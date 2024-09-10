import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

// Replace these with your actual secret keys or use environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
// TypeScript interface for your custom request with additional properties
interface AuthRequest extends Request {
  userId?: string;
  eventOrganiserId?: string;
  headers: any;
}

const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    // Extract tokens from headers
    const userToken = req.headers["authorization-user-token"]
      ?.toString()
      .replace("Bearer ", "");
    const eventOrganiserToken = req.headers[
      "authorization-event-organiser-token"
    ]
      ?.toString()
      .replace("Bearer ", "");

    if (userToken != "Bearer") {
      console.log(true)
      // Verify and decode user token
      const userPayload = jwt.verify(userToken, JWT_SECRET);
      req.userId = userPayload.id;
    }
    if (eventOrganiserToken != "Bearer") {
      // Verify and decode event organiser token
      const eventOrganiserPayload = jwt.verify(
        eventOrganiserToken,
        JWT_SECRET,
      );
      console.log(eventOrganiserPayload)
      req.eventOrganiserId = eventOrganiserPayload.id;
    }

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authenticate;
