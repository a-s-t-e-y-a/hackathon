import express from "express";
import eventRoute from "./routeController/event/route";
import userRoute from "./routeController/user/route";
import eventInitRoute from "./routeController/initEvent/route";
import uploadSupabase from "./routeController/upload/controller/uploadLogic";

const mainRouter = express.Router();
mainRouter.use("/eventAuth", eventRoute);
mainRouter.use("/userAuth", userRoute);
mainRouter.use("/evenInit", eventInitRoute);
mainRouter.use("/upload", uploadSupabase);

export default mainRouter;
