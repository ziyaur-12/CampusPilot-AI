import { analyzeResume } from "../controllers/resumeController.js";
import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import Resume from "../models/Resume.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/upload",
  protect,
  upload.single("resume"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please upload a PDF",
        });
      }

      const resume = await Resume.create({
        user: req.user._id,
        fileName: req.file.filename,
        filePath: req.file.path,
      });

      res.status(201).json({
        success: true,
        message: "Resume Uploaded Successfully 🚀",
        resume,
      });

    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);
router.post(
  "/analyze",
  protect,
  analyzeResume
);

export default router;