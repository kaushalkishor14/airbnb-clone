import {Routes, Route} from "react-router-dom"
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import OutLet from "./component/OutLet";
import Register from "./pages/RegisterPage";
// import axios  from "axios";
// import AccoundPage from "./pages/AccountPage";
import { UserContextProvider } from "./UserContext";


import axios from 'axios';
import ProfilePage from "./pages/ProfilePage";
import PlacePage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";

axios.defaults.baseURL = 'http://127.0.0.1:5000';

// Add this line to ensure Axios includes credentials (e.g., cookies, authorization headers) with requests
axios.defaults.withCredentials = true;

function App() {
  return (
  <UserContextProvider>
<Routes>
  <Route path='/' element={<OutLet/>}>
  <Route path="/" element={<IndexPage/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/account" element={<ProfilePage/>}/>
  <Route path="/account/places" element={<PlacePage/>}/>
  <Route path="/account/places/new" element={<PlacesFormPage/>}/>
  
  </Route>
</Routes>
</UserContextProvider>



  );
}

export default App;
