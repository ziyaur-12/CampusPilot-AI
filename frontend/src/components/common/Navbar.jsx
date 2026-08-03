import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            CampusPilot AI
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="#companies"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Companies
          </a>

          <a
            href="#footer"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;