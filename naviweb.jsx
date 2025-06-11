// import React from "react"
// import Navi from "./naviweb.module.css"
// import { Link } from "react-router"

   


// const Nav=()=>{

  


//     return(
//         <>
//         <div className={Navi.div0}>
//             <div   className={Navi.dd} >
// <img src="\baseball-removebg-preview.png"></img>
// <h3>SPORTS HUB</h3>
//             </div>
          
//             <div className={Navi.div1}>
//                 <ul>
//               <li>< a href="/">Home</a></li>
//               <li>< a href="/sportpage">Sports</a>
//               <ul>
//                       <li>< a href="/cricket">Cricket</a>
             
//               </li>
//               <li>< a href="/kabbadi">Kabbadi</a></li>
//               <li>< a href="/football">FootBall</a></li>
//               </ul>
//               </li>
//               <li>< a href="/news">News</a></li>
//               <li>< a href="/shopping">Shoping</a></li>
//               <li>< a href="/Contactpage">Contact</a></li>

//                </ul>
//                </div>
//                <div className={Navi.div2}>
//                 <button className={Navi.b1}><a href="/login1">Login</a></button>
               
//                </div>
           
//         </div>
//         </>
//     )
// }
// export default Nav;



import React from "react";
import Navi from "./naviweb.module.css";
import { Link } from "react-router";

const Nav = () => {
  return (
    <>
      <div className={Navi.div0}>
        <div className={Navi.dd}>
          <img src="/baseball-removebg-preview.png" alt="Logo" />
          <h3>SPORTS HUB</h3>
        </div>

        <div className={Navi.div1}>
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/sportpage">Sports</a>
              <ul>
                <li><a href="/cricket">Cricket</a></li>
                <li><a href="/kabbadi">Kabbadi</a></li>
                <li><a href="/football">Football</a></li>
              </ul>
            </li>
            <li><a href="/news">News</a></li>
            <li><a href="/shopping">Shopping</a></li>
            <li><a href="/Contactpage">Contact</a></li>
          </ul>
        </div>

        <div className={Navi.div2}>
          <button className={Navi.b1}><a href="/login1">Login</a></button>
        </div>
      </div>
    </>
  );
};

export default Nav;
