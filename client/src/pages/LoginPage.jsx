import { Link , Navigate} from "react-router-dom";
import { useState } from "react";
import  axios  from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
// for redirect user to home afet login state
  const[redirect, setRedirect] = useState(false);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      await axios.post('/login', { email, password });
      alert("Login successful");
      setRedirect(true)

    } catch (error) {
      alert("Login failed.Please try again");
    }
  }

  // for redirect user to home afet login call
  if(redirect){
    return <Navigate  to={'/'}/>
  }

  return (
    <div className="mt-4  grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login your Account</h1>
        <form className="max-w-sm mx-auto  " onSubmit={handleLoginSubmit}>
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
          <button className="primary my-6">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don&apos;t have an account yet?{" "}
            <Link to={"/register"} className="underline text-black">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
