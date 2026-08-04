import { useState } from "react";
import { Briefcase } from "lucide-react";
import { matchResume } from "../../services/resumeService";

function JobDescriptionCard({ uploadedResume }) {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobMatch, setJobMatch] = useState(null);

  const handleMatchResume = async () => {
    if (!uploadedResume) {
      alert("Please upload your resume first.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please paste the Job Description.");
      return;
    }

    try {
      setLoading(true);

      const res = await matchResume(
        uploadedResume._id,
        jobDescription
      );

      console.log(res.data);
      console.log(res.data.jobMatch);
      setJobMatch(res.data.jobMatch);
      alert("Resume matched successfully 🚀");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Resume Matching Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">

      <div className="flex items-center gap-3">

        <Briefcase
          size={32}
          className="text-violet-600"
        />

        <h2 className="text-2xl font-bold text-slate-800">
          Job Description Match
        </h2>

      </div>

      <p className="mt-2 text-slate-500">
        Paste the job description to compare it with your resume.
      </p>

      <textarea
        rows={10}
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
        placeholder="Paste Job Description here..."
        className="mt-6 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-violet-500"
      />

      <button
        onClick={handleMatchResume}
        disabled={loading}
        className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-50"
      >
        {loading
          ? "Matching..."
          : "Match Resume 🚀"}
      </button>

      {jobMatch && (
  <div className="mt-8 space-y-6">

    {/* Match Score */}
    <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-center text-white shadow-lg">

      <h2 className="text-3xl font-bold">
        Resume Match Score
      </h2>

      <div className="mt-6 flex justify-center">
        <div className="flex h-40 w-40 items-center justify-center rounded-full border-[10px] border-white text-5xl font-bold">
          {jobMatch.matchScore}%
        </div>
      </div>

    </div>

    {/* Matched Skills */}
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold text-green-600">
        ✅ Matched Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {jobMatch.matchedSkills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Missing Skills */}
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-2xl font-bold text-red-600">
        ❌ Missing Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {jobMatch.missingSkills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full bg-red-100 px-4 py-2 font-semibold text-red-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Recommendations */}
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-5 text-2xl font-bold text-orange-600">
        💡 AI Recommendations
      </h2>

      <div className="grid gap-4">
        {jobMatch.recommendations.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-orange-200 bg-orange-50 p-4"
          >
            {item}
          </div>
        ))}
      </div>
    </div>

  </div>
)}

    </div>
  );
}

export default JobDescriptionCard;