import AuthLayout from "../../components/auth/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <AuthLayout
      title="Create Account 🚀"
      subtitle="Start your AI-powered placement journey."
    >
      <RegisterForm />
    </AuthLayout>
  );
}

export default Register;