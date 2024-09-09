import { Request, Response } from "express";
import logger from "../../../../config/winstion";
interface Authenticate extends Request {
  fileUrl: string;
}
const getUploads = async (req: Authenticate, res: Response): Promise<any> => {
  try {
    console.log(req.file);
    console.log(req.fileUrl);
    if (!req.fileUrl) {
      return res.status(404).json({
        mesagge: "Error occured",
      });
    }
    res.status(200).json({
      message: "Photo uploaded successfully",
      data: process.env.BASE_URL_AWS_S3 + req.fileUrl,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getUploads;
