import prisma from "../../../../config/prisma.config";

const getTicket = async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        userId: req.userId,
      },
    });
    res.json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getTicket;
