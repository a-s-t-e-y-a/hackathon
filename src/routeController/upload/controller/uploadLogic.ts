import supabase from "../../../middleware/supabase";

const uploadSupabase = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { originalname, buffer } = req.file;
    const { data, error } = await supabase.storage
      .from("evc") // Replace with your bucket name
      .upload(`public/${originalname}`, buffer, {
        contentType: req.file.mimetype,
      });

    if (error) {
      throw error;
    }

    res.status(200).json({
      message: "File uploaded successfully",
      fileUrl: process.env.BASE_URL + originalname,
    });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
};
export default uploadSupabase;
