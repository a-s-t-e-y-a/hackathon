import { uuid } from "uuidv4";
import { contract } from "../../../../config/solidity";
import prisma from "../../../../config/prisma.config";

const buyContract = async (req, res) => {
  try {
    const { eventId } = req.body;
    const latestPost = await prisma.ticket.findFirst({
      orderBy: {
        id: "desc", // Order by the `id` field in descending order
      },
    });
    let ticketId = 0;
    if (!latestPost) {
      ticketId = ticketId;
    } else {
      ticketId = ticketId + 1;
    }
    const price = await prisma.event.findFirst({
      where: {
        eventNumber: eventId,
      },
    });
    const event = await contract.events(eventId);
    const ticketPrice = event.ticketPrice;
    const tx = await contract.buyTicket(eventId, ticketId, {
      value: price.price,
    });
    await tx.wait();
    const result = await prisma.ticket.create({
      data: {
        hash: tx.hash,
        data: tx.data,
        from: tx.data,
        User: { connect: { id: req.userId } },
      },
    });
    res.json({
      success: true,
      message: "Ticket purchased successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
export default buyContract;
