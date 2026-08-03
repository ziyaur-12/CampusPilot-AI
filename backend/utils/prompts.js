export const ATS_PROMPT = (resumeText) => `
You are an expert ATS Resume Analyzer.

Analyze the following resume.

Return ONLY valid JSON in the following format.

{
  "atsScore": 0,
  "skills": [],
  "missingSkills": [],
  "strengths": [],
  "suggestions": []
}

Rules:
- Return only valid JSON.
- Do not add markdown.
- Do not use \`\`\`json.
- ATS score should be between 0 and 100.

Resume:

${resumeText}
`;