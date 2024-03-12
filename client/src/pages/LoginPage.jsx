import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4  grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login your Account</h1>
        <form className="max-w-sm mx-auto  ">
          <input type="email" placeholder="your@eamil.com" />
          <input type="password" placeholder="Password" />
          <button className="primary my-6">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don&apos;t have an account yet? <Link to={"/register"} className="underline text-black">Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
