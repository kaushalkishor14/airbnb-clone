import { useState } from "react";
import axios from "axios";
export default function PhotosUploader(){

    const [addPhotos, setAddPhotos] = useState([]);
    const [photLink, setLink] = useState("");



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
    
      function uploadPhoto(ev){
       
       const files = ev.target.files;
       const data = new FormData();
       for(let i=0;i<files.length; i++){
        data.append('photo',files[i])
       }
        axios.post('/upload', data,{
        headers:{'content-type':'multipart/form-data'}
       }).then(response =>{
        const {data:filenames} = response;
        setAddPhotos(prev => {
          return [...prev, ...filenames];
        })
       })
      }
    return (

        <>
          <div className="flex gap-2">
              <input
                type="text"
                value={photLink}
                onChange={(ev) => setLink(ev.target.value)}
                placeholder={"Add using link"}
              />
              <button
                onClick={addPhotoByLink}
                className="bg-gray-200 px-4 rounded-xl "
              >
                Add&nbsp;photo
              </button>
            </div>
            
            <div className=" grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-4">
              {addPhotos.length > 0 &&
                addPhotos.map((link) => (
                 
                  <div className="h-30 flex " key={link}><img className="rounded-2xl w-full object-cover position-center" src={"http://localhost:5000/uploads/"+ link} alt="image"/></div>
                ))}
              <label
                value={addPhotos}
                onChange={(ev) => setAddPhotos(ev.target.value)}
                className=" flex justify-center gap-1 border bg-transparent rounded-md p-6 text-gray-500"
              >
                <input type="file" multiple className="hidden" onChange={uploadPhoto}/>
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
        </>
    );
}