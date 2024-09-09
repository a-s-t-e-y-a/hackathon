import logger from "../../../../config/winstion";
import supabase from "../../../middleware/supabase";

const uploadSupabase = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { originalname, buffer } = req.file;
    const { data, error } = await supabase.storage
      .from("evc") // Replace with your bucket name
      .upload(`${originalname}`, req.file[0]);

    if (error) {
      logger.error(error);
      throw error;
    }

    res.status(200).json({
      message: "File uploaded successfully",
      fileUrl: process.env.BASE_URL + data.path,
    });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
};
export default uploadSupabase;
