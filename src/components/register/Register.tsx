import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.firstName) {
      newErrors.firstName = "Please enter your first name";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Please enter your last name";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password should be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((users) => {
          const emailExists = users.some((user) => user.email === formData.email);

          if (emailExists) {
            setError({ email: "This email is already registered" });
          } else {
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            })
              .then((res) => {
                if (res.ok) {
                  return res.json();
                }
                throw new Error("Error");
              })
              .then((data) => {
                navigate("/Login");
                console.log("User registered:", data);
              })
              .catch((error) => {
                console.error("Error: ", error);
              });
          }
        });
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center bg-black">
        <form
          className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold text-black text-left mb-5">
            Create Your Account
          </h1>
          <p className="text-black m-2 text-left">
            Star Wars is part of The Walt Disney Family of Companies.
          </p>
          <p className="text-black m-2 text-left">
            You'll be able to log into services and experiences using the same
            email and password
          </p>
          <input
            className="w-full mb-4 rounded-md py-2 px-3 border bg-gray-200"
            type="text"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          <div>
  {error && (
    <p className="text-red-500">
      {error.firstName || error.lastName || error.email || error.password}
    </p>
  )}
</div>
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
          <p className="text-center">
            If you have account, Please <Link to="/Login" className="text-black">Login</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
}
