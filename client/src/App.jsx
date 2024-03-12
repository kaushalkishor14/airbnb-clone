import {Routes, Route} from "react-router-dom"
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import OutLet from "./component/OutLet";
import Register from "./pages/RegisterPage";
import axios  from "axios";

axios.defaults.baseURL ='http://127.0.0.1:5000';
axios.defaults.withCredentials =true;

function App() {
  return (

<Routes>
  <Route path='/' element={<OutLet/>}>
  <Route path="/" element={<IndexPage/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/register" element={<Register/>}/>
  </Route>

</Routes>



  );
}

export default App;
