function FeaturesSection() {
  const features = [
    {
      title: "AI Resume Analyzer",
      description:
        "Analyze resumes instantly and receive AI-powered suggestions to improve quality and ATS compatibility.",
      emoji: "📄",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "ATS Score Checker",
      description:
        "Check how well your resume matches recruiter ATS systems before applying.",
      emoji: "📊",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Smart Job Matching",
      description:
        "Get personalized job recommendations based on your skills, interests and resume.",
      emoji: "💼",
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "AI Mock Interview",
      description:
        "Practice technical and HR interviews with instant AI feedback and improvement tips.",
      emoji: "🎤",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Placement Analytics",
      description:
        "Track applications, interview progress, placements and overall career growth.",
      emoji: "📈",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Career Guidance",
      description:
        "Receive personalized roadmaps, learning resources and career recommendations.",
      emoji: "🎯",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Everything You Need To Get Placed
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            CampusPilot AI combines Artificial Intelligence with placement
            preparation to help students build better resumes, crack interviews,
            discover jobs and track their complete placement journey.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
            >

              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-3xl shadow-lg`}
              >
                {feature.emoji}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {feature.description}
              </p>

              <button className="mt-8 font-semibold text-blue-600 transition group-hover:translate-x-2">
                Learn More →
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;