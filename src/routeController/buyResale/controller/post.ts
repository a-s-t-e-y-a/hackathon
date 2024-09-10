import { contract } from "../../../../config/solidity";

const reSaleTicket = async (req, res) => {
  try {
    const { eventId, ticketId } = req.body;

    const ticket = await contract.tickets(eventId, ticketId);
    const resalePrice = ticket.resalePrice;

    const tx = await contract.buyResaleTicket(eventId, ticketId, {
      value: resalePrice,
    });
    await tx.wait();

    res.json({
      success: true,
      message: "Resale ticket purchased successfully",
      transactionHash: tx.hash,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

export default reSaleTicket;
