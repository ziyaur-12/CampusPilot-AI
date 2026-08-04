import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import ResumeForm from "../../components/resume-builder/ResumeForm";

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",

    education: [
  {
    college: "",
    degree: "",
    cgpa: "",
    year: "",
  },
],
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            AI Resume Builder 📄
          </h1>

          <p className="mt-2 text-slate-500">
            Build your professional resume with AI assistance.
          </p>

        </div>

        {/* Main Layout */}

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left */}

          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
          />

          {/* Right */}

          <div className="rounded-2xl bg-white p-6 shadow-md">

            <h2 className="mb-6 text-2xl font-bold">
              Live Preview
            </h2>

            <div className="min-h-[750px] rounded-xl border bg-slate-50 p-8">

              <h1 className="text-3xl font-bold">
                {resumeData.fullName || "Your Name"}
              </h1>

              <p className="mt-2 text-slate-600">
                {resumeData.email}
              </p>

              <p className="text-slate-600">
                {resumeData.phone}
              </p>

              <p className="text-slate-600">
                {resumeData.location}
              </p>

              <hr className="my-6" />

              <h2 className="mb-3 text-xl font-bold">
                Professional Summary
              </h2>

              <p className="leading-7 text-slate-700 whitespace-pre-wrap">
                {resumeData.summary ||
                  "Your professional summary will appear here..."}
              </p>

              <hr className="my-6" />

              <hr className="my-6" />

<h2 className="mb-4 text-xl font-bold">
  Education
</h2>

<div className="space-y-5">

  {resumeData.education.map((edu, index) => (

    <div key={index}>

      <h3 className="font-semibold text-lg">
        {edu.degree || "Degree"}
      </h3>

      <p className="text-slate-700">
        {edu.college || "College Name"}
      </p>

      <p className="text-slate-500">
        CGPA: {edu.cgpa || "-"} | Passing Year: {edu.year || "-"}
      </p>

    </div>

  ))}

</div>

              <h2 className="mb-3 text-xl font-bold">
                Links
              </h2>

              <div className="space-y-2 text-blue-600">

                {resumeData.linkedin && (
                  <p>{resumeData.linkedin}</p>
                )}

                {resumeData.github && (
                  <p>{resumeData.github}</p>
                )}

                {resumeData.portfolio && (
                  <p>{resumeData.portfolio}</p>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default ResumeBuilder;