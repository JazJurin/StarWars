import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((users) => {
        const emailExists = users.some((user) => user.email === formData.email);
        if (emailExists) {
          setError("Este correo ya está registrado");
        } else {
          fetch("http://localhost:3001/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
              throw new Error("Error en el registro");
            })
            .then((data) => {
              navigate("/Login");
              console.log("Usuario registrado:", data);
            })
            .catch((error) => {
              console.error("Error: ", error);
            });
        }
      });
  }

  function handleChange(e: { target: { name: any; value: any } }) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setError("");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <form
        className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-black text-left mb-5">
          Create Your Account
        </h1>
        <p className="text-black m-5 w-50">
          Star Wars is part of The Walt Disney Family of Companies. You'll be
          able to log into services and experiences using the same email and
          password
        </p>
        <input
          className="w-full mb-4 rounded-md py-2 px-3 border bg-gray-200"
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
              />
              <div>{error && (
                  <p className="text-red-500">{error}</p>
              ) }</div>
        <input
          className="w-full mb-4 rounded-md py-2 px-3 border bg-gray-200"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <input
          className="w-full mb-4 rounded-md py-2 px-3 border bg-gray-200"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <input
          className="w-full mb-4 rounded-md py-2 px-3 border bg-gray-200"
          type="password"
          placeholder="Create Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        <button
          className="w-50 bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"
          type="submit"
        >
          Create Acount
              </button>
              <Link to="/Login"
          className="w-50 ml-4 bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"
          type="submit"
        >
          LOGIN
        </Link>
      </form>
    </div>
  );
}
