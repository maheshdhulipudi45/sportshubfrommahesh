
import React, { useState } from 'react';
import styles from './singup.module.css'; 
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Singup1 = ()=> {
  const [data1, setData1] = useState({
    username: "",
    username1: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data1.username === "") {
      notifyFirst1()
    } else if (data1.username1 === "") {
      notifylast1()
    } else if (data1.email === "") {
     notifyemail1()
    } else if (data1.password === "") {
    notifypass1()
    } else if (data1.confirmPassword === "") {
      notifyConfirmpass1()
    } else if (data1.password !== data1.confirmPassword) {
      notifydoesnotConfirmpass1()
    } else {
      notifySuccess();
    }
  };
  

  const notifySuccess = () => {
    toast.success("Successfully Submitted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
     
    });
  };
  const notifyFirst1 = () => {
    toast.info("Enter First Name", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifylast1 = () => {
    toast.info("Enter Last Name", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifyemail1 = () => {
    toast.info("Enter Email", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifypass1 = () => {
    toast.info("Enter Password", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyConfirmpass1 = () => {
    toast.info("Enter Confirm Password", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifydoesnotConfirmpass1 = () => {
    toast.warn("Passwords do not match", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };



  return (
    <>
     <div className={styles.c0}>
     <div className={styles.c0_1}></div>
      <div className={styles.c1}>
        <div className={styles.c2}>
          <h3>To Create Your Own <br />Account</h3>
          <p>Join our community and enjoy the benefits.</p>
          <img src="\baseball-removebg-preview.png"/>
        </div>
        <div className={styles.c3c3}>
          <h2>Create an Account</h2>
          <form>
            <input
              className={styles.input}
              type="text"
              placeholder="First Name"
              onChange={(e) => setData1({ ...data1, username: e.target.value })}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Last Name"
              onChange={(e) => setData1({ ...data1, username1: e.target.value })}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              onChange={(e) => setData1({ ...data1, email: e.target.value })}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              onChange={(e) => setData1({ ...data1, password: e.target.value })}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setData1({ ...data1, confirmPassword: e.target.value })}
            />
            <button
              className={styles.button}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <span className={styles.signupLink}>
              <h6>I Have An Account?</h6>
              <li> <Link to="/login1">Login</Link></li>
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
}

export default Singup1;
