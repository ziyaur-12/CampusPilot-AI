# 🚀 CampusPilot AI

### AI-Powered Campus Placement & Career Preparation Platform

CampusPilot AI is a full-stack web application designed to help students prepare for campus placements through intelligent resume analysis, ATS evaluation, job-description matching, skill-gap identification, personalized recommendations, and resume building.

The platform combines a modern **MERN stack architecture** with **LLM-based AI integration** to provide practical career insights through an interactive dashboard.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Key Features](#-key-features)
- [AI Features](#-ai-features)
- [AI Workflow](#-ai-workflow)
- [Application Workflow](#-application-workflow)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Authentication](#-authentication)
- [Resume Analysis](#-resume-analysis)
- [Job Description Matching](#-job-description-matching)
- [Resume Builder](#-resume-builder)
- [Database Design](#-database-design)
- [API Endpoints](#-api-endpoints)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [Screenshots](#-screenshots)
- [Security](#-security)
- [Challenges & Learning](#-challenges--learning)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)

---

# 📖 Overview

CampusPilot AI is developed as a placement-focused platform where students can manage and improve their job preparation from a single dashboard.

Instead of using separate tools for resume analysis, ATS checking, job matching, and resume creation, CampusPilot AI combines these functionalities into one application.

The platform allows users to:

- Create an account
- Login securely
- Upload a resume
- Extract text from PDF resumes
- Analyze resumes using AI
- Generate an ATS-oriented score
- Identify skills and missing skills
- Receive resume improvement suggestions
- Match resumes against job descriptions
- Identify matched and missing job skills
- Generate personalized recommendations
- Build resumes using a structured Resume Builder

---

# 🎯 Problem Statement

Students often use multiple platforms for different placement activities.

For example:

- One platform for creating resumes
- Another for checking ATS compatibility
- Another for understanding job requirements
- Another for identifying missing skills

This creates a fragmented preparation process.

CampusPilot AI addresses this problem by bringing important resume and job-preparation functionalities into a single full-stack platform.

---

# 💡 Solution

CampusPilot AI provides a centralized dashboard where students can analyze their resumes, compare them with job descriptions, understand their skill gaps, and improve their resumes.

The application follows a client-server architecture:

```text
React Frontend
      ↓
REST APIs
      ↓
Node.js + Express Backend
      ↓
MongoDB Database
      ↓
AI API Integration
