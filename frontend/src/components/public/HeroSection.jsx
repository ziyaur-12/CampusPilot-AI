import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-violet-100">
      {/* Background Blur */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"></div>
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl"></div>

      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <span className="inline-flex rounded-full border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            🚀 AI Powered Placement Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Get Placed
            <br />
            Smarter with
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              CampusPilot AI
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Build ATS-friendly resumes, practice AI-powered interviews,
            discover personalized job opportunities and monitor your placement
            progress—all from one intelligent platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/register"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              Login
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">5K+</h3>
              <p className="mt-2 text-slate-500">Students</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-violet-600">300+</h3>
              <p className="mt-2 text-slate-500">Companies</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-emerald-600">95%</h3>
              <p className="mt-2 text-slate-500">ATS Success</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="mb-8 text-3xl font-bold text-slate-800">
              Dashboard Preview
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-blue-50 p-6">
                <p className="text-slate-500">ATS Score</p>

                <h3 className="mt-3 text-5xl font-bold text-blue-600">
                  92%
                </h3>

                <div className="mt-6 h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-[92%] rounded-full bg-gradient-to-r from-blue-600 to-violet-600"></div>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-6">
                <p className="text-slate-500">Matched Jobs</p>

                <h3 className="mt-3 text-5xl font-bold text-emerald-600">
                  34
                </h3>

                <p className="mt-5 text-lg text-emerald-600">
                  +8 New Matches
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 p-6">
                <p className="text-slate-500">Mock Interviews</p>

                <h3 className="mt-3 text-5xl font-bold text-violet-600">
                  12
                </h3>
              </div>

              <div className="rounded-2xl bg-orange-50 p-6">
                <p className="text-slate-500">Profile</p>

                <h3 className="mt-3 text-4xl font-bold text-orange-600">
                  Ready
                </h3>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -right-10 -top-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block">
            <p className="text-sm text-slate-500">Placement Prediction</p>

            <h3 className="mt-2 text-3xl font-bold text-emerald-600">
              94%
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;