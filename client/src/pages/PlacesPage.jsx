import { Link, useParams } from "react-router-dom";
export default function PlacesPage() {
  const { action } = useParams();

  return (
    <div>
      {action !== "new" && (
        <div className="text-center py-8">
          <Link
            className=" inline-flex gap-1 bg-primary text-white rounded-md py-2 px-6"
            to={"/account/places/new"}
          >
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
            Add new places
          </Link>
        </div>
      )}
      {action === "new" && (
        <div className="m-auto md:max-w-lg sm:max-w-sm lg:max-w-full">
          <from>
            <h2 className="text-2xl mt-4 ">Title</h2>
            <p className="text-gray-400 text sm">Title of your place</p>
            <input type="text" placeholder="title" />
            <h2 className="text-2xl mt-4">Addres</h2>
            <p className="text-gray-400 text sm">Addres where you vist</p>
            <input type="text" placeholder="addres" />
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-400 text sm">Add more photo you like</p>
            <div className="flex gap-2">
              <input type="text" placeholder={"Add using link"} />
              <button className="bg-gray-200 px-4 rounded-xl ">
                Add&nbsp;photo
              </button>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-4">
              <button className=" flex justify-center gap-1 border bg-transparent rounded-md p-6 text-gray-500">
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
                    d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                  />
                </svg>
                Upload
              </button>
            </div>
            <h2 className="text-2xl mt-4 ">Description</h2>
            <p className="text-gray-400 text sm">Describe about your place you vist</p>
            <textarea/>
            <h2 className="text-2xl mt-4 ">Perks</h2>
            <p className="text-gray-400 text sm">Select all the perks</p>
            <div></div>
            
          </from>
        </div>
      )}
    </div>
  );
}
