function StatCard({ title, value, color }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h2
        className={`mt-3 text-4xl font-bold ${color}`}
      >
        {value}
      </h2>
    </div>
  );
}

export default StatCard;