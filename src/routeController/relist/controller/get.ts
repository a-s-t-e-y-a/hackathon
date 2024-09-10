import prisma from "../../../../config/prisma.config";

const getReList = async (req, res) => {
  try {
    const tickets = await prisma.reSellTicket.findMany({
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

export default getReList;
