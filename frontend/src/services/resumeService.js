import api from "../api/api";

// Upload Resume
export const uploadResume = (formData) => {
  return api.post("/resume/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Analyze Resume
export const analyzeResume = (resumeId) => {
  return api.post("/resume/analyze", {
    resumeId,
  });
};