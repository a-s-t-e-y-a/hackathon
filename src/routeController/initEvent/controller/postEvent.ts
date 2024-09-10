import { ZodError } from "zod";
import prisma from "../../../../config/prisma.config";
import eventInitZod from "../../../zod/eventInit";
import contract from "../../../../config/solidity";
import { ethers } from "ethers";

function convertToUnixTimestamp(dateString) {
  const date = new Date(dateString); // Parse the date string
  return Math.floor(date.getTime() / 1000); // Convert milliseconds to seconds
}

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
    const eventId = 0;
    const totalTickets = data_.ticketNo;
    const eventName = data_.eventName;
    const eventTime = convertToUnixTimestamp(data_.time);
    const ticketPrice = data_.price;
    //solidity code here
    const tx = await contract.createEvent(
      eventId,
      totalTickets,
      eventName,
      ethers.parseEther(ticketPrice.toString()),
      eventTime,
    );
    await tx.wait();
    res.status(201).json({
      message: "Event created successfully",
      info,
      transctionHash: tx.hash(),
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
      console.log(err);
      res.status(500).send(err);
    }
  }
};

export default eventInit;
