/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Preks from "../Preks";
import axios from "axios";
export default function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [addres, setAddress] = useState("");
  const [addPhotos, setAddPhotos] = useState([]);
  const [photLink, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [preks, setPreks] = useState([]);
  const [extrainfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4 ">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-400 text sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  // addphotoby link

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photLink,
    });
    setAddPhotos((prev) => {
      return [...prev, filename];
    });
    setLink("");
  }

 async function uploadPhoto(ev){
   const files = ev.target.files;
   const data = new FormData();
   data.set('files',files([0]))
   await axios.post('/upload', data,{
    headers:{'content-type':'multipart/form-data'}
   })
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
            {preInput("Title", "Title of your place")}

            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            {preInput("Addres", "Addres where you vist")}

            <input
              type="text"
              value={addres}
              onChange={(ev) => setAddress(ev.target.valuE)}
              placeholder="addres"
            />
            {preInput("Photos", "Add more photo you like")}

            <div className="flex gap-2">
              <input
                type="text"
                value={photLink}
                onChange={(ev) => setLink(ev.target.value)}
                placeholder={"Add using link"}
              />
              <button
                onChange={addPhotoByLink}
                className="bg-gray-200 px-4 rounded-xl "
              >
                Add&nbsp;photo
              </button>
            </div>
            
            <div className=" grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-4">
              {addPhotos.length > 0 &&
                addPhotos.map((link) => (
                 
                  <div><img className="rounded-2xl" src={"http://localhost:5000/uploads/"+ link} alt="image"/></div>
                ))}
              <label
                value={addPhotos}
                onChange={(ev) => setAddPhotos(ev.target.value)}
                className=" flex justify-center gap-1 border bg-transparent rounded-md p-6 text-gray-500"
              >
                <input type="file" className="hidden" onChange={uploadPhoto}/>
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
              </label>
            </div>
            <h2 className="text-2xl mt-4 ">Description</h2>
            <p className="text-gray-400 text sm">
              Describe about your place you vist
            </p>
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <h2 className="text-2xl mt-4 ">Perks</h2>
            <p className="text-gray-400 text sm">Select all the perks</p>
            <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-4">
              <Preks selected={preks} onChange={setPreks} />
            </div>
            <h2 className="text-2xl mt-4 ">Extra info</h2>
            <p className="text-gray-400 text sm">HOuse rules, etc</p>
            <textarea
              value={extrainfo}
              onChange={(ev) => setExtraInfo(ev.target.value)}
            />
            <h2 className="text-2xl mt-4 ">Check in&out times </h2>
            <p className="text-gray-400 text sm">Add check in&out times </p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2  -mb-1">Check in time</h3>
                <input
                  type="text"
                  value={checkIn}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                  placeholder="14:00"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input
                  type="text"
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                  placeholder="23:00"
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(ev) => setMaxGuests(ev.target.value)}
                  placeholder="10"
                />
              </div>
            </div>

            <button className="primary mt-4">Save</button>
          </from>
        </div>
      )}
    </div>
  );
}
