import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StarshipContext } from "../../Context/StarshipContext";
import NavBar from "../NavBar";

export default function Login() {
  const { login } = useContext(StarshipContext)
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Login failed');
    })
    .then((data) => {
      console.log(data.user);
      navigate("/");
    })
    .catch((error) => {
      setError('Login failed. Please check your credentials.');
      console.error('Error:', error);
    });
    login();
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center bg-black">
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
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="w-full bg-yellow-200 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
          <Link to="/Register" className="mt-2 block text-center text-white">
            Sign Up
          </Link>
        </form>
      </div>
    </>
  );
}

