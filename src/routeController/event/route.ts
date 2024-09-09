import express from "express";
import postEventAuth from "./controller/post";
import login from "./controller/eventLogin";

const eventRoute = express.Router();

eventRoute.post("/signup", postEventAuth);
eventRoute.post("/login", login);

export default eventRoute;
