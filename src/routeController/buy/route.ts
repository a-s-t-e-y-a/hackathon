import express from "express";
import buyContract from "./controller/buy";
import getTicket from "./controller/get";
import authenticate from "../../middleware/auth";

const buyRoute = express.Router();

buyRoute.post("/", authenticate, buyContract);
buyRoute.get("/", authenticate, getTicket);
export default buyRoute;
