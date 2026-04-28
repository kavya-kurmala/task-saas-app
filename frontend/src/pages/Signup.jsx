import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/signup", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 mb-4 rounded">
            {error}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
          value={formData.name}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
          value={formData.email}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
          value={formData.password}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Signup
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;