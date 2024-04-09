import { Link } from "react-router-dom";
import AccountNav from "./AccountNav";

export default function PlacePage() {
  return (
    <div>
      <AccountNav />
      <div className="text-center">
        list of addplaces
        <br/>
        <Link className="inline-flex bg-primary gap-1 py-2 px-6 rounded-full text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new place
        </Link>
      </div>
    </div>
  );
}
