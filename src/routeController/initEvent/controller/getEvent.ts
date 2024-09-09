import prisma from "../../../../config/prisma.config";

const eventGet = async (req, res) => {
  try {
    const info = await prisma.event.findMany({});
    res.status(200).json({
      info,
    });
  } catch (err) {
    res.status(404).json({
      message: "Error occured",
    });
  }
};

const eventGetId = async (req, res) => {
  try {
    const id = req.params.id;
    const info = await prisma.event.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      info,
    });
  } catch (err) {
    res.status(404).json({
      message: "Some error occured",
    });
  }
};

export { eventGet, eventGetId };
