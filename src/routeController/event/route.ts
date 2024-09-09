import express from "express";
import postEventAuth from "./controller/post";

const eventRoute = express.Router();

eventRoute.post("/", postEventAuth);

export default eventRoute;
