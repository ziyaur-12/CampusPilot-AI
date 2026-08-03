function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-100">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">

        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

          {/* Left Side */}
          <div className="hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 p-12 text-white lg:flex lg:flex-col lg:justify-center">

            <h1 className="text-5xl font-bold">
              CampusPilot AI
            </h1>

            <p className="mt-8 text-lg leading-8 text-blue-100">
              Your AI-powered placement companion for resume analysis,
              interview preparation and smart job matching.
            </p>

            <div className="mt-12 space-y-4">

              <p>✅ AI Resume Analyzer</p>
              <p>✅ ATS Score Checker</p>
              <p>✅ AI Mock Interview</p>
              <p>✅ Smart Job Matching</p>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-10">

            <div className="w-full max-w-md">

              <h2 className="text-4xl font-bold text-slate-900">
                {title}
              </h2>

              <p className="mt-3 text-slate-500">
                {subtitle}
              </p>

              <div className="mt-10">
                {children}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AuthLayout;