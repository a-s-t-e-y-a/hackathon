import { ZodError } from "zod";
import prisma from "../../../../config/prisma.config";
import bcrypt from "bcrypt";
import { userAuthZod } from "../../../zod/userAuth";

const signup = async (req, res) => {
  try {
    const data_ = userAuthZod.parse(req.body);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data_.password, salt);

    const data = await prisma.user.create({
      data: {
        name: data_.name,
        email: data_.email,
        password: hashedPassword,
      },
    });

    res.status(200).json({ message: "Validation successful", data });
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

export default signup;
