// import React, { useState } from "react";
// import styles from "./navilogin.module.css" // Importing CSS Module

// const Login1 = () => {
//   const [data, setData] = useState({ text: "", password: "" });

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (data.text === "") {
//       console.log("Enter Username Or Email");
//     } else if (data.password === "") {
//       console.log("Enter Password");
//     } else if (data.password.length < 8) {
//       console.log("Password must be at least 8 characters long");
//     } else if (data.password !== "Mahesh@45") {
//       console.log("Invalid Username Or Password!");
//     } else {
//       console.log("Successfully Logged In!");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftPanel}>
//         <h3>Adventure</h3>
//         <h5>starts here</h5>
//         <h6>Create an account to join our<br /> community</h6>
//         <img src="/path/to/image.png" alt="Adventure" />
//       </div>
//       <div className={styles.rightPanel}>
//         <h2>Login</h2>
//         <form>
//           <input
//             type="text"
//             placeholder="Username Or Email"
//             onChange={(e) => setData({ ...data, text: e.target.value })}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setData({ ...data, password: e.target.value })}
//           />
//           <button onClick={handleLogin}>Login</button>
//         </form>
//         <div className={styles.socialIcons}>
//           <div className={`${styles.icon} ${styles.google}`}>Google</div>
//           {/* Add other social icons */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login1;







import styles from "./navilogin.module.css"

import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Login1 = () => {
  const [data, setData] = useState({
    text: "",
    password: ""
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (data.text === "") {
      notifyuser()
    } else if (data.password === "") {
      notifypass()
    } else if (data.password.length < 8) {
      notifypass1()
    } else if (data.password !== "Mahesh@45") {
      notifyError();
    } else {
      notifySuccess();
    }
  };
  const notifyuser = () => toast.info("Enter Username Or Email", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const notifypass = () => toast.info("Enter Password", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const notifypass1 = () => toast.info("Password must be at least 8 characters long", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const notifyError = () => toast.warn("Invalid Username Or Password!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifySuccess = () => toast.success("Successfully Logged In!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return (
    <>
     <div className={styles.logind0}>
     <div className={styles.logind0_1}></div>
      <div className={styles.logind1}>
        <div className={styles.logind2}>
          <h3>SportsHub </h3>  
          <h6>Create an account to join our<br /> community</h6>
          <img src="\baseball-removebg-preview.png"/>
        </div>
        <div className={styles.logind3}>
          <h2>Login</h2>
          <form>
            <input
              type="text"
              placeholder="Username Or Email"
              onChange={(e) => setData({ ...data, text: e.target.value })}
            />
            <p></p>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <p>Forgot Password?</p>
            <button onClick={handleLogin}>Login</button>
            <span>
              <h6>Don't have an account?</h6>
              <li>
                <Link to="/singup1">Signup</Link>
              </li>
            </span>
          </form>
           
         <div className={styles.socialIcons}>
                     <FaGoogle className={`${styles.icon} ${styles.google}`} />
                     <FaFacebook className={`${styles.icon} ${styles.facebook}`} />
                     <FaTwitter className={`${styles.icon} ${styles.twitter}`} />
                     <FaInstagram className={`${styles.icon} ${styles.instagram}`} />
                   
          </div>
        </div>
      </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login1;

