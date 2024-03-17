import { useContext} from "react";
import { UserContext } from "../UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import  axios  from "axios";

export default function AccoundPage() {
    // const[toHomePage , setHomePage ] = useState(false);
  const { ready, user ,setUser} = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }
  

  const navitate = useNavigate();

  if(!ready){
      return 'Loading...'
  }

   async function logout(){
     await axios.post('/logout');
     setUser(null)
     navitate('/')
  }

  if (ready && !user) {
    navitate("/login");
  }


  function linkClasses(type = null) {
    let classes = "p-2 px-6";
    if (type === subpage ) {
      classes += "p-2 bg-primary text-white rounded-md px-6";
    }
    return classes;
  }

  return (
    <div>
      <nav className="w-full mt-8 flex gap-2 justify-center ">
        <Link to={"/account"} className={linkClasses("profile")}>
          My profile
        </Link>
        <Link to={"/account/booking"} className={linkClasses("booking")}>
          My Booking
        </Link>
        <Link to={"/account/places"} className={linkClasses("places")}>
          My accomodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className=" text-center max-w-lg mx-auto mb-8 font-serif my-5 ">
          Logged in as {user.name} ({user.email})
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
      )}
    </div>
  );
}
