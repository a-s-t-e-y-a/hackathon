import express from "express";
import reList from "./controller/post";
import getReList from "./controller/get";

const reListRoute = express.Router();

reListRoute.post("/", reList);
reListRoute.get("/", getReList);
export default reListRoute;
