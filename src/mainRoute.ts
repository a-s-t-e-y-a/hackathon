import express from "express";
import eventRoute from "./routeController/event/route";
import userRoute from "./routeController/user/route";

const mainRouter = express.Router();
mainRouter.use("/eventAuth", eventRoute);
mainRouter.use("/userAuth", userRoute);

export default mainRouter;
