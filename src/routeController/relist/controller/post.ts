import { ethers } from "ethers";
import { contract, wallet } from "../../../../config/solidity";
import prisma from "../../../../config/prisma.config";

const reList = async (req, res) => {
  try {
    const { eventId, ticketId, resalePrice } = req.body;

    // Check if the user owns the ticket
    const ticketOwner = await contract.getTicketOwner(eventId, ticketId);
    if (ticketOwner.toLowerCase() !== wallet.address.toLowerCase()) {
      return res
        .status(400)
        .json({ success: false, message: "First buy a Ticket" });
    }

    const tx = await contract.listTicketForResale(
      eventId,
      ticketId,
      ethers.parseEther(resalePrice.toString())
    );
    await tx.wait();
    const result = await prisma.reSellTicket.create({
      data: {
        eventId,
        ticketId,
        resalePrice,
        hash: tx.hash,
        data: tx.data,
        from: tx.data,
      },
    });
    res.json({
      success: true,
      message: "Ticket listed for resale successfully",
      ...result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
export default reList;
