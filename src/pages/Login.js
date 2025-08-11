import { setAuthToken } from "@/features/auth.features";

export default function LoginPage() {
  const handleLogin = async () => {
    const fakeToken = "abc123.jwt.token"; // normally from API
    setAuthToken(fakeToken);
    alert("Logged in!");
  };

  return (
    <div className="p-6">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
