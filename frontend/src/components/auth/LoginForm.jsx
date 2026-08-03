import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";
import { useAuth } from "../../hooks/useAuth";

function LoginForm() {
  const navigate = useNavigate();

  const { setUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await loginUser({
      email: formData.email,
      password: formData.password,
    });

    if (res.data.success) {
      // Save user in Context
      setUser(res.data.user);

      alert("Login Successful 🎉");

      navigate("/dashboard");
    }

  } catch (error) {

    alert(
      error.response?.data?.message || "Login Failed"
    );

  } finally {

    setLoading(false);

  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Email */}
      <div>
        <label className="mb-2 block font-semibold text-slate-700">
          Email
        </label>

        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
        />
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block font-semibold text-slate-700">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-16 outline-none transition focus:border-blue-600"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Remember */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          Remember Me
        </label>

        <Link
          to="/forgot-password"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Login */}
      <button
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Signing In..." : "Login"}
      </button>

      {/* Register */}
      <p className="text-center text-slate-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;