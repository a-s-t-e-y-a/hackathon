import express from "express";
import upload from "../../middleware/multer";
import uploadSupabase from "./controller/uploadLogic";

const uploadRoute = express.Router();

uploadRoute.post("/", upload.single("image"), uploadSupabase);

export default uploadRoute;
