import express from "express";
import eventRoute from "./routeController/event/route";
import userRoute from "./routeController/user/route";
import eventInitRoute from "./routeController/initEvent/route";
import uploadRoute from "./routeController/upload/route";

const mainRouter = express.Router();
mainRouter.use("/eventAuth", eventRoute);
mainRouter.use("/userAuth", userRoute);
mainRouter.use("/evenInit", eventInitRoute);
mainRouter.use("/upload", uploadRoute);

export default mainRouter;
