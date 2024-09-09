import express from "express";
import eventRoute from "./routeController/event/route";

const mainRouter = express.Router();
mainRouter.use("/eventAuth", eventRoute);

export default mainRouter;
