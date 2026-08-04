export const ATS_PROMPT = (resumeText) => `
You are an ATS Resume Analyzer.

Analyze the following resume.

Resume:

${resumeText}

Return ONLY valid JSON in this format:

{
  "atsScore": 85,
  "skills": [],
  "missingSkills": [],
  "strengths": [],
  "suggestions": []
}
`;

export const JOB_MATCH_PROMPT = (resumeText, jobDescription) => `
You are an expert ATS Resume Matcher.

Compare the resume with the following Job Description.

Resume:

${resumeText}

Job Description:

${jobDescription}

Return ONLY valid JSON.

{
  "matchScore": 90,
  "matchedSkills": [],
  "missingSkills": [],
  "recommendations": []
}
`;