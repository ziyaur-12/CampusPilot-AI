import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CampusPilot AI
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex">
          <Link to="/" className="text-slate-700 hover:text-blue-600">
            Home
          </Link>

          <Link to="/about" className="text-slate-700 hover:text-blue-600">
            About
          </Link>

          <Link to="/contact" className="text-slate-700 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-100">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;