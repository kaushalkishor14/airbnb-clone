import {createContext, useEffect, useState} from "react";
import axios from "axios";
// import {data} from "autoprefixer";

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({data}) => {
        setUser(data);
        setReady(true);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UserContext.Provider value={{user,setUser,ready,setReady}}>
      {children}
    </UserContext.Provider>
  );
}