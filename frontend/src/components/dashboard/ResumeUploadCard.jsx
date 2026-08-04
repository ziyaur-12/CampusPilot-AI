import {
  uploadResume,
  analyzeResume,
} from "../../services/resumeService";
import { useState } from "react";
import { UploadCloud, FileText } from "lucide-react";

function ResumeUploadCard({ onResumeUploaded }) {
  const [file, setFile] = useState(null);
  const [uploadedResume, setUploadedResume] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
  const selected = e.target.files[0];

  if (!selected) return;

  if (selected.type !== "application/pdf") {
    alert("Please select a PDF file.");
    return;
  }

  if (selected.size > 5 * 1024 * 1024) {
    alert("Maximum file size is 5 MB.");
    return;
  }

  setFile(selected);

  try {
    const formData = new FormData();
    formData.append("resume", selected);

    const res = await uploadResume(formData);

    alert(res.data.message);

    setUploadedResume(res.data.resume);

if (onResumeUploaded) {
  onResumeUploaded(res.data.resume);
}

console.log(res.data);
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Resume Upload Failed"
    );
  }
};

const handleAnalyze = async () => {
  if (!uploadedResume) {
    alert("Please upload a resume first.");
    return;
  }

  try {
    setLoading(true);

    const res = await analyzeResume(uploadedResume._id);

    console.log(res.data);

    setAnalysis(res.data.analysis);

    alert("Resume analyzed successfully 🚀");

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Analysis Failed"
    );

  } finally {

    setLoading(false);

  }
};

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Resume Upload
          </h2>

          <p className="mt-2 text-slate-500">
            Upload your latest resume for AI analysis.
          </p>
        </div>

        <UploadCloud
          size={45}
          className="text-violet-600"
        />
      </div>

      <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center">

        <input
          id="resume"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />

        <label
          htmlFor="resume"
          className="cursor-pointer"
        >
          <UploadCloud
            size={60}
            className="mx-auto text-violet-500"
          />

          <p className="mt-4 text-lg font-semibold">
            Click to Upload Resume
          </p>

          <p className="mt-2 text-sm text-slate-500">
            PDF only • Max 5 MB
          </p>

          <div className="mt-6 inline-block rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white">
            Choose Resume
          </div>
        </label>

        {file && (
          <div className="mt-8 rounded-xl bg-green-50 p-4">

            <div className="flex items-center justify-center gap-3">

              <FileText className="text-green-600" />

              <span className="font-medium">
                {file.name}
              </span>

            </div>

            <p className="mt-2 text-sm text-slate-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>

          </div>
        )}
        {uploadedResume && (
  <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">
    <h3 className="text-lg font-bold text-green-700">
      ✅ Resume Uploaded Successfully
    </h3>

    <div className="mt-4 space-y-2 text-left">
      <p>
        <span className="font-semibold">File Name:</span>{" "}
        {uploadedResume.fileName}
      </p>

      <p>
        <span className="font-semibold">Status:</span>{" "}
        Uploaded
      </p>

      <p>
        <span className="font-semibold">Resume ID:</span>{" "}
        {uploadedResume._id}
      </p>
    </div>

    <button
  onClick={handleAnalyze}
  disabled={loading}
  className="mt-5 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? "Analyzing..." : "Analyze Resume 🚀"}
</button>
  </div>
)}

{analysis && (
  <div className="mt-8 space-y-6">

    {/* ATS Score */}
    <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 p-8 text-center text-white shadow-lg">

      <h2 className="text-3xl font-bold">
        ATS Resume Score
      </h2>

      <div className="mt-6 flex justify-center">

        <div className="flex h-40 w-40 items-center justify-center rounded-full border-[10px] border-white text-5xl font-bold">

          {analysis.atsScore}%

        </div>

      </div>

      <p className="mt-4 text-lg">

        {analysis.atsScore >= 80
          ? "Excellent Resume 🚀"
          : analysis.atsScore >= 60
          ? "Good Resume 👍"
          : "Needs Improvement"}

      </p>

    </div>

    {/* Skills */}

    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-4 text-2xl font-bold">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">

        {analysis.skills.map((skill, index) => (

          <span
            key={index}
            className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>

    {/* Missing Skills */}

    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-4 text-2xl font-bold text-red-600">
        Missing Skills
      </h2>

      <div className="flex flex-wrap gap-3">

        {analysis.missingSkills.map((skill, index) => (

          <span
            key={index}
            className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>

    {/* Strengths */}

<div className="rounded-2xl bg-white p-6 shadow">

  <h2 className="mb-5 text-2xl font-bold text-green-600">
    💪 Strengths
  </h2>

  <div className="grid gap-4 md:grid-cols-2">

    {analysis.strengths.map((item, index) => (

      <div
        key={index}
        className="rounded-xl border border-green-200 bg-green-50 p-4"
      >
        <p className="font-medium text-slate-700">
          ✅ {item}
        </p>
      </div>

    ))}

  </div>

</div>

    {/* Suggestions */}

<div className="rounded-2xl bg-white p-6 shadow">

  <h2 className="mb-5 text-2xl font-bold text-orange-600">
    💡 AI Suggestions
  </h2>

  <div className="grid gap-4">

    {analysis.suggestions.map((item, index) => (

      <div
        key={index}
        className="rounded-xl border border-orange-200 bg-orange-50 p-4 transition hover:shadow-md"
      >
        <p className="font-medium text-slate-700">
          {item}
        </p>
      </div>

    ))}

  </div>

</div>

  </div>
)}

      </div>
    </div>
  );
}

export default ResumeUploadCard;