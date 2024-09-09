import express from "express";
import signup from "./controller/post";
import login from "./controller/userLogin";

const userRoute = express.Router();

userRoute.post("/signup", signup);
userRoute.post("/login", login);

export default userRoute;
