import express from "express";
import eventInit from "./controller/postEvent";
import { eventGet, eventGetId } from "./controller/getEvent";

const eventInitRoute = express.Router();

eventInitRoute.post("/", eventInit);
eventInitRoute.get("/", eventGet);
eventInitRoute.get("/:id", eventGetId);

export default eventInitRoute;
