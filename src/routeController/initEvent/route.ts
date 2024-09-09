import express from "express";

const eventInitRoute = express.Router();

eventInitRoute.post("/");
eventInitRoute.get("/");

export default eventInitRoute;
