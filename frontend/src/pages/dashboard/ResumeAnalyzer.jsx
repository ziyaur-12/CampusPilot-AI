import ResumeUploadCard from "../../components/dashboard/ResumeUploadCard";

function ResumeAnalyzer() {
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

      {/* Upload Card */}
      <ResumeUploadCard />

      {/* Results Placeholder */}
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-700">
          AI Analysis Results
        </h2>

        <p className="mt-3 text-slate-500">
          Upload a resume to generate ATS Score, Skills,
          Missing Keywords and AI Suggestions.
        </p>
      </div>
    </div>
  );
}

export default ResumeAnalyzer;