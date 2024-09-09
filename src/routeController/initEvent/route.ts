import express from "express";
import eventInit from "./controller/postEvent";
import { eventGet, eventGetId } from "./controller/getEvent";
import authenticate from "../../middleware/auth";

const eventInitRoute = express.Router();

eventInitRoute.post("/", authenticate, eventInit);
eventInitRoute.get("/", eventGet);
eventInitRoute.get("/:id", eventGetId);

export default eventInitRoute;
