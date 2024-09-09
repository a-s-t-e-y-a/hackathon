import { ZodError } from "zod";
import prisma from "../../../../config/prisma.config";
import eventInitZod from "../../../zod/eventInit";

const eventInit = async (req: any, res) => {
  try {
    const data_ = eventInitZod.parse(req.body);

    const info = await prisma.event.create({
      data: {
        eventName: data_.eventName,
        ticketNo: data_.ticketNo,
        about: data_.about,
        price: data_.price,
        image: data_.image,
        eventOrganiser: { connect: { id: req.eventOrganiserId } },
      },
    });

    res.status(201).json({
      message: "Event created successfully",
      info,
    });
  } catch (err) {
    if (err instanceof ZodError) {
      res.status(400).json({
        message: "Validation failed",
        errors: err.errors,
      });
    } else if (err.name === "PrismaClientKnownRequestError") {
      res.status(400).json({
        message: "Database error",
        error: err.message,
      });
    } else {
      // Handle unexpected errors
      res.status(500).json({
        message: "Internal server error",
        error: err.message,
      });
    }
  }
};

export default eventInit;
