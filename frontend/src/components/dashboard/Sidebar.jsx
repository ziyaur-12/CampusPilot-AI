import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authService";
import { useAuth } from "../../hooks/useAuth";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Resume Analyzer",
    path: "/dashboard/resume",
  },
  {
    name: "ATS Checker",
    path: "/dashboard/ats",
  },
  {
    name: "Jobs",
    path: "/dashboard/jobs",
  },
  {
    name: "Mock Interview",
    path: "/dashboard/interview",
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
  },
];

function Sidebar() {
    const navigate = useNavigate();
const { setUser } = useAuth();

const handleLogout = async () => {
  try {
    await logoutUser();

    setUser(null);

    navigate("/login");
  } catch (error) {
    console.log(error);
    alert("Logout Failed");
  }
};
  return (
    <aside className="flex h-screen w-72 flex-col bg-slate-900 text-white shadow-lg">
      {/* Logo */}
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-3xl font-bold text-violet-400">
          CampusPilot AI
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Placement Dashboard
        </p>
      </div>

      {/* Menu */}
      <nav className="mt-6 flex flex-1 flex-col gap-2 px-4">
        {menus.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-violet-600 text-white"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="border-t border-slate-700 p-4">
        <button
  onClick={handleLogout}
  className="w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
>
  Logout
</button>
      </div>
    </aside>
  );
}

export default Sidebar;