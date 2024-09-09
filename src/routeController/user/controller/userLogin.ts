import { ZodError } from "zod";
import prisma from "../../../../config/prisma.config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userLogin } from "../../../zod/userAuth";

// Replace with your actual secret key
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

const login = async (req, res) => {
  try {
    // Validate the incoming request data
    const data_ = userLogin.parse(req.body);

    // Find the user by email
    const user = await prisma.user.findFirst({
      where: { email: data_.email },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(data_.password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }, // Token expiration time
    );

    // Send the token in the response
    res.status(200).json({
      message: "Login successful user",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    if (err instanceof ZodError) {
      res
        .status(400)
        .json({ message: "Validation failed", errors: err.errors });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", error: err.message });
    }
  }
};

export default login;
