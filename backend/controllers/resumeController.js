import fs from "fs";
import pdfParse from "pdf-parse/lib/pdf-parse.js";
import Resume from "../models/Resume.js";
import { GoogleGenAI } from "@google/genai";
import { ATS_PROMPT } from "../utils/prompts.js";

export const analyzeResume = async (req, res) => {
  try {
    const { resumeId } = req.body;

    if (!resumeId) {
      return res.status(400).json({
        success: false,
        message: "Resume ID is required",
      });
    }

    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    // Read PDF
    const dataBuffer = fs.readFileSync(resume.filePath);

    // Extract Text
    const pdfData = await pdfParse(dataBuffer);
    const resumeText = pdfData.text;

    // Gemini Client
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = ATS_PROMPT(resumeText);

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    const cleanedResponse = response.text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

const analysis = JSON.parse(cleanedResponse);

    res.status(200).json({
  success: true,
  analysis,
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};