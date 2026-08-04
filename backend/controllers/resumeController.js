import fs from "fs";
import pdfParse from "pdf-parse/lib/pdf-parse.js";
import Resume from "../models/Resume.js";
import Groq from "groq-sdk";
import {
  ATS_PROMPT,
  JOB_MATCH_PROMPT,
} from "../utils/prompts.js";

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

    const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const prompt = ATS_PROMPT(resumeText);

const completion = await groq.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [
    {
      role: "user",
      content: prompt,
    },
  ],
  temperature: 0.2,
});

const cleanedResponse = completion.choices[0].message.content
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

    const analysis = JSON.parse(cleanedResponse);

    // Save analysis in MongoDB
    resume.analysis = {
      atsScore: analysis.atsScore,
      skills: analysis.skills,
      missingSkills: analysis.missingSkills,
      strengths: analysis.strengths,
      suggestions: analysis.suggestions,
      analyzedAt: new Date(),
    };

    await resume.save();

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
export const matchResume = async (req, res) => {
  try {
    const { resumeId, jobDescription } = req.body;

    if (!resumeId || !jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Resume ID and Job Description are required",
      });
    }

    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    // Read Resume PDF
    const dataBuffer = fs.readFileSync(resume.filePath);

    // Extract Resume Text
    const pdfData = await pdfParse(dataBuffer);
    const resumeText = pdfData.text;

    // Groq Client
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    // Prompt
    const prompt = JOB_MATCH_PROMPT(
      resumeText,
      jobDescription
    );

    // Groq Response
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
    });

    const cleanedResponse = completion.choices[0].message.content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const matchResult = JSON.parse(cleanedResponse);

    // Save in MongoDB
    resume.jobMatch = {
      matchScore: matchResult.matchScore,
      matchedSkills: matchResult.matchedSkills,
      missingSkills: matchResult.missingSkills,
      recommendations: matchResult.recommendations,
      analyzedAt: new Date(),
    };

    await resume.save();

    res.status(200).json({
      success: true,
      jobMatch: matchResult,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};