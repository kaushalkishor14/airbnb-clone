import { useContext } from "react"
import { UserContext } from "../UserContext"
import {Link, useNavigate, useParams } from "react-router-dom";

export default function AccoundPage() {
    const {ready,user} = useContext(UserContext);
    const navitate = useNavigate();

    // if(!ready){
    //     return 'Loading...'
    // }

    if(ready && !user){
        navitate("/login");
    
    }

  const {subpage}=useParams()
  console.log(subpage)

    return (
        <div>
            <nav className="w-full mt-8 flex gap-2 justify-center ">
            <Link to={'/account'} className="p-2 bg-primary text-white rounded-md px-6">My profile</Link>
            <Link to={'/account/booking'} className="p-2 px-6">My Booking</Link>
            <Link to={'/account/places'}className="p-2 px-6">My accomodations</Link>

            </nav>
           
        </div>
    )
}