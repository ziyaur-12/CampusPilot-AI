import { useAuth } from "../../hooks/useAuth";

function Topbar() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="text-slate-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <h3 className="font-semibold">
            {user?.fullName || "Student"}
          </h3>

          <p className="text-sm text-slate-500">
            {user?.email}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white">
          {(user?.fullName || "S")[0].toUpperCase()}
        </div>
      </div>
    </header>
  );
}

export default Topbar;