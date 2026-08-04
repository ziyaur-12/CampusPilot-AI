import React from "react";

function ResumeForm({ resumeData, setResumeData }) {
  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEducationChange = (index, field, value) => {
  const updatedEducation = [...resumeData.education];

  updatedEducation[index][field] = value;

  setResumeData({
    ...resumeData,
    education: updatedEducation,
  });
};

const addEducation = () => {
  setResumeData({
    ...resumeData,
    education: [
      ...resumeData.education,
      {
        college: "",
        degree: "",
        cgpa: "",
        year: "",
      },
    ],
  });
};

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Resume Information
      </h2>

      {/* Personal Information */}

      <div className="mb-8">

        <h3 className="mb-4 text-xl font-semibold text-violet-600">
          Personal Information
        </h3>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={resumeData.fullName}
            onChange={handleChange}
            className="rounded-xl border p-3 outline-none focus:border-violet-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={resumeData.email}
            onChange={handleChange}
            className="rounded-xl border p-3 outline-none focus:border-violet-600"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={resumeData.phone}
            onChange={handleChange}
            className="rounded-xl border p-3 outline-none focus:border-violet-600"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={resumeData.location}
            onChange={handleChange}
            className="rounded-xl border p-3 outline-none focus:border-violet-600"
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={resumeData.linkedin}
            onChange={handleChange}
            className="rounded-xl border p-3 outline-none focus:border-violet-600"
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub URL"
            value={resumeData.github}
            onChange={handleChange}
            className="rounded-xl border p-3 outline-none focus:border-violet-600"
          />

        </div>

      </div>

      {/* Portfolio */}

      <div className="mb-8">

        <input
          type="text"
          name="portfolio"
          placeholder="Portfolio Website"
          value={resumeData.portfolio}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 outline-none focus:border-violet-600"
        />

      </div>

      {/* Professional Summary */}

      <div>

        <h3 className="mb-4 text-xl font-semibold text-violet-600">
          Professional Summary
        </h3>

        <textarea
          rows={7}
          name="summary"
          placeholder="Write a professional summary..."
          value={resumeData.summary}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 outline-none focus:border-violet-600"
        />

      </div>

      {/* Education */}

<div className="mt-10">

  <div className="mb-5 flex items-center justify-between">

    <h3 className="text-xl font-semibold text-violet-600">
      Education
    </h3>

    <button
      type="button"
      onClick={addEducation}
      className="rounded-lg bg-violet-600 px-4 py-2 text-white hover:bg-violet-700"
    >
      + Add Education
    </button>

  </div>

  {resumeData.education.map((edu, index) => (

    <div
      key={index}
      className="mb-6 rounded-xl border border-slate-200 p-5"
    >

      <div className="grid gap-4 md:grid-cols-2">

        <input
          type="text"
          placeholder="College Name"
          value={edu.college}
          onChange={(e) =>
            handleEducationChange(
              index,
              "college",
              e.target.value
            )
          }
          className="rounded-xl border p-3"
        />

        <input
          type="text"
          placeholder="Degree"
          value={edu.degree}
          onChange={(e) =>
            handleEducationChange(
              index,
              "degree",
              e.target.value
            )
          }
          className="rounded-xl border p-3"
        />

        <input
          type="text"
          placeholder="CGPA"
          value={edu.cgpa}
          onChange={(e) =>
            handleEducationChange(
              index,
              "cgpa",
              e.target.value
            )
          }
          className="rounded-xl border p-3"
        />

        <input
          type="text"
          placeholder="Passing Year"
          value={edu.year}
          onChange={(e) =>
            handleEducationChange(
              index,
              "year",
              e.target.value
            )
          }
          className="rounded-xl border p-3"
        />

      </div>

    </div>

  ))}

</div>

      <button
        className="mt-8 w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700"
      >
        Save Resume
      </button>

    </div>
  );

  
}

export default ResumeForm;