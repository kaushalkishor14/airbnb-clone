import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(ev)  {
    ev.preventDefault();
    axios.post('http://localhost:5000/register', {
      name,
      email,
      password,
    });
  }


// JkQadpHaAJxKLbtA


  return (
    <div className="mt-4  grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register your Account</h1>
        <form className="max-w-sm mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your@eamil.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary my-6">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link to={"/login"} className="underline text-black">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
