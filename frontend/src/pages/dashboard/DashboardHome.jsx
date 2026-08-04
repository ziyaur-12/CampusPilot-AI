import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import ResumeUploadCard from "../../components/dashboard/ResumeUploadCard";
import JobDescriptionCard from "../../components/dashboard/JobDescriptionCard";

function DashboardHome() {
   const [uploadedResume, setUploadedResume] = useState(null);
  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Welcome */}
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Here's your placement overview.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="ATS Score"
            value="92%"
            color="text-violet-600"
          />

          <StatCard
            title="Jobs Matched"
            value="24"
            color="text-green-600"
          />

          <StatCard
            title="Interviews"
            value="5"
            color="text-orange-500"
          />

          <StatCard
            title="Resume"
            value="Ready"
            color="text-blue-600"
          />

        </div>

        {/* Bottom Section */}
        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-bold">
              Recent Activity
            </h2>

            <ul className="space-y-3 text-slate-600">
              <li>✅ Resume Uploaded</li>
              <li>✅ ATS Score Improved</li>
              <li>✅ AI Suggestions Generated</li>
              <li>✅ New Jobs Matched</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-bold">
              Upcoming Interviews
            </h2>

            <ul className="space-y-3 text-slate-600">
              <li>Google - 12 Aug</li>
              <li>Microsoft - 15 Aug</li>
              <li>Infosys - 20 Aug</li>
            </ul>
          </div>

        </div>

      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
  <ResumeUploadCard
  onResumeUploaded={setUploadedResume}
/>
  <JobDescriptionCard
  uploadedResume={uploadedResume}
/>
</div>
    </DashboardLayout>
  );
}

export default DashboardHome;