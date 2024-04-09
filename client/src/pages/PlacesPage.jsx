/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Preks from "../Preks";
import PhotosUploader from "../../PhotosUploader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [addres, setAddress] = useState("");

  const [description, setDescription] = useState("");
  const [preks, setPreks] = useState([]);
  const [extrainfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const navitate = useNavigate();

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

  async function addNewPlace(ev) {
    ev.preventDefault();
    const placeData = {
      title,
      addres,
      description,
      preks,
      maxGuests,
      checkOut,
      checkIn,
    };
    axios.post("/places", placeData);
    navitate("/places");
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
          <from onSubmit={addNewPlace}>
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
            <PhotosUploader />

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
