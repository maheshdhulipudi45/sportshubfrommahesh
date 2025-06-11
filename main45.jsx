import Nav from "./naviweb";
import Foot from "./footerweb";
import { Outlet } from "react-router-dom"; 
// import Login1 from "./navilogin";
// import Singup1 from "./singup";


const Main45 = () => {
  return (
    <>
      <Nav />
      <Outlet /> 
      <Foot />
   
      {/* <Login1/> */}
      {/* <Singup1/> */}
    
    </>
  );
};

export default Main45;
