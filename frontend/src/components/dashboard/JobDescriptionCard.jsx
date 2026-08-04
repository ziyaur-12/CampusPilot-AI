import { useState } from "react";
import { Briefcase } from "lucide-react";

function JobDescriptionCard({ uploadedResume }) {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMatchResume = async () => {
  if (!uploadedResume) {
    alert("Please upload your resume first.");
    return;
  }

  if (!jobDescription.trim()) {
    alert("Please paste the Job Description.");
    return;
  }

  console.log("Resume ID:", uploadedResume._id);
  console.log("Job Description:", jobDescription);

  alert("Backend API will be connected in the next step 🚀");
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
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste Job Description here..."
        className="mt-6 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-violet-500"
      />

      

      <button
  onClick={handleMatchResume}
  disabled={loading}
  className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-50"
>
  {loading ? "Matching..." : "Match Resume 🚀"}
</button>

    </div>
  );
}

export default JobDescriptionCard;