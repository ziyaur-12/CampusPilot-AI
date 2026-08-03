function TrustedCompanies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys",
    "TCS",
    "Accenture",
    "Wipro",
    "Capgemini",
  ];

  return (
    <section
      id="companies"
      className="bg-white border-y border-slate-200 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Trusted Companies
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Companies Hiring Our Students
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            CampusPilot AI helps students prepare for placements in India's
            leading product and service-based companies.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company}
              className="group flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white hover:shadow-xl"
            >
              <span className="text-xl font-bold text-slate-700 transition group-hover:text-blue-600">
                {company}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-10 text-white md:grid-cols-3">

          <div className="text-center">
            <h3 className="text-4xl font-bold">300+</h3>
            <p className="mt-2 text-blue-100">
              Hiring Companies
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold">5000+</h3>
            <p className="mt-2 text-blue-100">
              Registered Students
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold">95%</h3>
            <p className="mt-2 text-blue-100">
              Placement Success Rate
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;