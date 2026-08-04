import { useState } from "react";
import ResumeUploadCard from "../../components/dashboard/ResumeUploadCard";
import JobDescriptionCard from "../../components/dashboard/JobDescriptionCard";

function ResumeAnalyzer() {
  const [uploadedResume, setUploadedResume] = useState(null);
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Resume Analyzer 📄
        </h1>

        <p className="mt-2 text-slate-500">
          Upload your resume and get AI-powered analysis with ATS score,
          skill extraction and personalized improvement suggestions.
        </p>
      </div>

     {/* Resume Upload */}
     <ResumeUploadCard
  onResumeUploaded={setUploadedResume}
/>

     {/* Job Description Match */}
     <JobDescriptionCard
  uploadedResume={uploadedResume}
/>
    </div>
  );
}

export default ResumeAnalyzer;