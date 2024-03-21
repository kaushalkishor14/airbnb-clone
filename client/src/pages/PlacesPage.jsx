import { useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function PlacesPage() {
  const { action } = useParams();
  const[title ,setTitle] = useState(''); 
  const[addres,setAddress] = useState('');
  const[addPhotos, setAddPhotos] = useState([]);
  const[photLink, setLink]= useState('');
  const[description , setDescription] = useState('');
  const[preks, setPreks] = useState([]);
  const[extrainfo , setExtraInfo] = useState('');
  const[checkIn,setCheckIn] = useState('');
  const[checkOut, setCheckOut] = useState('');
  const[maxGuests , setMaxGuests] = useState(1)

  function inputHeader(text){
    return (
<h2 className="text-2xl mt-4 ">{text}</h2>
    ); 
  }

  function inputDescription(text){
    return  (
<p className="text-gray-400 text sm">{text}</p>
    ) 
  }

  function preInput(header,description){
    return (
      <>
      {inputHeader(header)}
      {inputDescription(description)}
      </>
    )

  }

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
            {preInput('Title','Title of your place')}
     
            <input type="text" placeholder="title" />
            {preInput('Addres','Addres where you vist')}
            
            <input type="text" placeholder="addres" />
            {preInput('Photos','Add more photo you like')}
           
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
            <p className="text-gray-400 text sm">
              Describe about your place you vist
            </p>
            <textarea />
            <h2 className="text-2xl mt-4 ">Perks</h2>
            <p className="text-gray-400 text sm">Select all the perks</p>
            <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-4">
              <label className="border p-4  flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
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
                    d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
                  />
                </svg>
                <span>Wifi</span>
              </label>
              <label className="border p-4  flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
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
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>

                <span>Free praking spot</span>
              </label>
              <label className="border p-4  flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
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
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>

                <span>Tv</span>
              </label>
              <label className="border p-4  flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
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
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                  />
                </svg>

                <span>Entrance</span>
              </label>
              <label className="border p-4  flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
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
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>

                <span>pets</span>
              </label>
            </div>
            
            <h2 className="text-2xl mt-4 ">Extra info</h2>
            <p className="text-gray-400 text sm">HOuse rules, etc</p>
            <textarea/>
            <h2 className="text-2xl mt-4 ">Check in&out times </h2>
            <p className="text-gray-400 text sm">Add check in&out times </p>
           <div className="grid gap-2 sm:grid-cols-3">
           <div>
              <h3 className="mt-2  -mb-1">Check in time</h3>
              <input type="text" placeholder="14:00" />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check out time</h3>
              <input type="text" placeholder="23:00" />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input type="text" placeholder="10" />
            </div>
           </div>
           
            <button className="primary mt-4">Save</button>
          
          </from>

        </div>
      )}
    </div>
  );
}
