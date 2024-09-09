import express from "express";
import getUploads from "./controller/uploadLogic";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadRoute = express.Router();

uploadRoute.post("/", upload.single("image"), getUploads);

export default uploadRoute;
