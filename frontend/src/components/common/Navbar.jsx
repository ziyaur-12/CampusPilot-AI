import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 80px",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <h2>CampusPilot AI</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;