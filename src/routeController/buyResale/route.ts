import express from "express";
import reSaleTicket from "./controller/post";

const reSaleBuy = express.Router();

reSaleBuy.post("/", reSaleTicket);
export default reSaleBuy;
