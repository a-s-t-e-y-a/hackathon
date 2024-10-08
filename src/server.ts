import express from "express";
import logger from "../config/winstion";
import mainRouter from "./mainRoute";
import cors from "cors";
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
  logger.info("SERVER STARTED ");
});
