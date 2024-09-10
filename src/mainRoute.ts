import express from "express";
import eventRoute from "./routeController/event/route";
import userRoute from "./routeController/user/route";
import eventInitRoute from "./routeController/initEvent/route";
import uploadRoute from "./routeController/upload/route";
import buyRoute from "./routeController/buy/route";
import reSaleBuy from "./routeController/buyResale/route";
import reListRoute from "./routeController/relist/route";

const mainRouter = express.Router();
mainRouter.use("/eventAuth", eventRoute);
mainRouter.use("/userAuth", userRoute);
mainRouter.use("/evenInit", eventInitRoute);
mainRouter.use("/upload", uploadRoute);
mainRouter.use("/buy", buyRoute);
mainRouter.use("/re-sale", reSaleBuy);
mainRouter.use("/re-list", reListRoute);

export default mainRouter;
