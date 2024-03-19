import { Link,useParams } from "react-router-dom";
export default function PlacesPage() {
    const {action} = useParams()
    
    
  return (
    <div>
        {action !== 'new' &&(
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
        {action === 'new' && (
         <div className="m-auto md:max-w-lg sm:max-w-sm lg:max-w-full">
               <from>
                <h2 className="text-2xl mt-4 ">Title</h2>
                <input type="text" placeholder="title"/>
                <h2 className="text-2xl mt-4">Addres</h2>
                <input type="text" placeholder="addres"/>
                <h2 className="text-2xl mt-4">Photos</h2>

                </from>
         </div>
        )}
    
    </div>
  );
}
