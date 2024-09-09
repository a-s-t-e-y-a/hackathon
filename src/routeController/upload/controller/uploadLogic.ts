import { Request, Response } from "express";
import supabase from "../../../middleware/supabase";
import logger from "../../../../config/winstion";
interface Authenticate extends Request {
  fileUrl: string;
  file: any
}
const getUploads = async (req: Authenticate, res: Response): Promise<any> => {
  try {
    console.log('Request file:', req.file); // Debugging log
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const { originalname, buffer } = req.file;
    const { data, error } = await supabase.storage
      .from('evc') // Replace with your bucket name
      .upload(originalname, buffer, {
        contentType: req.file.mimetype,
      });

    if (error) {
      logger.error(error);
      throw error;
    }

    res.status(200).json({
      message: 'File uploaded successfully',
      fileUrl: process.env.BASE_URL + data.path
    });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

export default getUploads;
