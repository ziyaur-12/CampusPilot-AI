📖 Software Requirement Specification (SRS)
Project Title
TalentBridge AI
AI-Powered Smart Campus Placement & Recruitment Platform
1. Project Vision

TalentBridge AI is a modern AI-powered campus placement platform designed to simplify and automate the complete recruitment process for colleges, students, recruiters, and placement officers. The system combines the MERN stack with Artificial Intelligence to provide resume analysis, intelligent job matching, real-time communication, and placement analytics.

The goal is to replace manual placement activities with a secure, scalable, and intelligent digital platform.

2. Problem Statement

Many colleges still manage placement activities manually or through basic web portals.

Existing systems have several limitations:

Students cannot easily find suitable jobs.
Recruiters spend significant time filtering candidates.
Placement officers manually maintain records.
Resume screening is slow and inconsistent.
Students do not receive personalized career guidance.
Communication between students and recruiters is delayed.
Placement statistics are difficult to generate.

These challenges reduce placement efficiency and create unnecessary manual work.

3. Proposed Solution

TalentBridge AI provides an end-to-end intelligent placement platform where:

Students create professional profiles.
AI analyzes resumes and calculates ATS scores.
Recruiters post jobs and receive AI-ranked applicants.
Students receive personalized job recommendations.
Placement officers monitor the complete recruitment process.
Real-time notifications keep all users updated.
AI generates interview questions and career suggestions.
4. Project Objectives

The main objectives of TalentBridge AI are:

Automate the placement process.
Reduce manual work for placement officers.
Improve resume quality using AI.
Recommend jobs based on student skills.
Help recruiters shortlist better candidates.
Improve communication using real-time notifications.
Provide data-driven placement analytics.
Build an industry-level full-stack application.
5. Scope of the Project
Student
Registration and Login
Complete Profile
Resume Upload
Resume Builder
AI Resume Review
ATS Score
Job Search
Apply for Jobs
Track Applications
Chat with Recruiters
Interview Calendar
Notifications
Recruiter
Company Registration
Company Verification
Job Posting
Candidate Search
AI Candidate Ranking
Interview Scheduling
Offer Letter Upload
Recruitment Dashboard
Placement Officer (Admin)
Manage Students
Manage Recruiters
Verify Companies
Approve Job Posts
Broadcast Announcements
Placement Reports
Analytics Dashboard
6. User Roles
Student

Purpose

Apply for jobs and improve placement chances.

Permissions

Manage profile
Upload resume
Apply jobs
View notifications
Attend interviews
Recruiter

Purpose

Hire eligible candidates.

Permissions

Create company profile
Create jobs
Shortlist candidates
Schedule interviews
Admin (TPO)

Purpose

Manage the entire placement process.

Permissions

Approve recruiters
Manage students
Generate reports
View analytics
7. Functional Requirements
Authentication
Email Registration
Email Verification
Login
Forgot Password
Reset Password
JWT Authentication
Role-Based Access Control
Google OAuth Login
Student Module
Student Dashboard
Resume Upload
Resume Builder
Resume Analyzer
ATS Score
AI Suggestions
Job Recommendations
Saved Jobs
Application Tracking
Notifications
Calendar
Chat
Recruiter Module
Company Profile
Job Posting
Candidate Management
Candidate Search
Candidate Ranking
Interview Scheduling
Email Notifications
Admin Module
User Management
Company Approval
Dashboard
Reports
Analytics
Broadcast Messages
AI Module
Resume Analysis
ATS Score
Resume Improvement Suggestions
AI Job Matching
Interview Question Generator
Career Recommendation
8. Non-Functional Requirements

Performance

API response within 2–3 seconds.

Security

JWT Authentication
Password Hashing
HTTPS
Input Validation
Role-Based Authorization

Scalability

Modular architecture
Cloud deployment
Easily extendable

Reliability

Error handling
Logging
Data backup

Usability

Responsive design
Clean dashboard
Easy navigation
Accessibility support
9. Technology Stack
Frontend
React.js
Vite
Tailwind CSS
shadcn/ui
Framer Motion
React Router
Redux Toolkit
TanStack Query
Axios
React Hook Form
Zod
Backend
Node.js
Express.js
Database
MongoDB Atlas
Mongoose
Authentication
JWT
Google OAuth
Cloud Services
Cloudinary
Render
Vercel
AI
Gemini API
LangChain (Future Integration)
Vector Database (Future RAG Support)
Real-Time
Socket.io
Email
Nodemailer
File Upload
Multer
Cloudinary
10. Future Scope

The platform can be extended with:

Online coding assessments
Video interview integration
AI voice interviews
Placement prediction using Machine Learning
Multi-college support
Mobile application
HR analytics dashboard
Company recommendation engine
11. Expected Outcomes

After successful implementation:

Students receive personalized placement guidance.
Recruiters hire candidates more efficiently.
Placement officers reduce manual workload.
AI improves resume quality and job matching.
Colleges gain better placement analytics.
12. Why This Project is Different

Unlike traditional placement portals, TalentBridge AI integrates Artificial Intelligence into multiple stages of the recruitment process.

Key innovations include:

AI Resume Analyzer
AI ATS Score Generator
AI Job Recommendation
AI Candidate Ranking
AI Career Guidance
Real-time Notifications
Live Chat
Placement Analytics Dashboard
Modern SaaS-inspired UI