import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.user));
  }

  function handleChange(e: { target: { name: any; value: any } }) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-center mb-5 text-black">
          Login Form
        </h1>
        <input
          className="w-full mb-4 rounded-md py-2 px-3 border bg-gray-200"
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <input
          className="w-full mb-4 rounded-md py-2 px-3 border bg-gray-200"
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        <div>
          <button
            className="w-full bg-yellow-200 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
          <Link
            to="/Register"
            className="mt-2 w-full bg-yellow-200 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
