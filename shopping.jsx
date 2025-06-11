
import { useState } from "react"; 
import Shop1 from "./shopping.module.css";
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
  const Myshop = [
    { img: "/public/mijersy.jpg", name: "Mumbai Indians", name2: "official Fan Jersey 2025", cost: "1499 MRP", cost2: "Get it for ₹850", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/mijersy2.jpg", name: "Mumbai Indians", name2: "official Fan Jersey 2025", cost: "₹1499 MRP", cost2: "Get it for ₹850", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/mijersey3.jpg", name: "Mumbai Indians", name2: "official Fan Jersey 2025", cost: "₹1499 MRP", cost2: "Get it for ₹850", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/mijersy4.jpg", name: "Mumbai Indians", name2: "official Fan Jersey 2025", cost: "₹1499 MRP", cost2: "Get it for ₹850", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },


    { img: "/public/rcbjersy.jpg", name: "RC Bengaluru", name2: "official Fan Jersey 2025", cost: "₹1299 MRP", cost2: "Get it for ₹1050", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/public/rcbjersy2.jpg", name: "RC Bengaluru", name2: "official Fan Jersey 2025", cost: "₹1799 MRP", cost2: "Get it for ₹1250", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/public/rcbjersy3.jpg", name: "RC Bengaluru", name2: "official Fan Jersey 2025", cost: "₹1799 MRP", cost2: "Get it for ₹1250", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/public/rcbjersy0.jpg", name: "RC Bengaluru", name2: "official Fan Jersey 2025", cost: "₹1299 MRP", cost2: "Get it for ₹950", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },

    { img: "/public/cskjersy.jpg", name: "Chennai Super Kings", name2: "official Fan Jersey 2025", cost: "₹1099 MRP", cost2: "Get it for ₹850", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/public/cskjersy2.jpg", name: "Chennai Super Kings", name2: "official Fan Jersey 2025", cost: "₹1599 MRP", cost2: "Get it for ₹850", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/public/cskjersy3.jpg", name: "Chennai Super Kings", name2: "official Fan Jersey 2025", cost: "₹1199 MRP", cost2: "Get it for ₹850", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/public/cskjersy4.jpg", name: "Chennai Super Kings", name2: "official Fan Jersey 2025", cost: "₹1899 MRP", cost2: "Get it for ₹850", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },

    { img: "/public/srhjersy.jpg", name: "Sunrises Hyderabad", name2: "official Fan Jersey 2025", cost: "₹1499 MRP", cost2: "Get it for ₹850", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/public/indiajersy.jpg", name: "Team India ", name2: "official Fan Jersey 2025", cost: "₹2099 MRP", cost2: "Get it for ₹1450", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/public/indiajersy2.jpg", name: "Team India", name2: "official Fan Jersey 2025", cost: "₹1799 MRP", cost2: "Get it for ₹1360", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
    { img: "/public/indiajersy5.jpg", name: "Team India", name2: "official Fan Jersey 2025", cost: "₹1899 MRP", cost2: "Get it for ₹1450", cost3: "with coupon", button1: "Add to Cart", button2: "Buy Now" },
  ];

  // State for search input
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");

  // Filtered array based on search input
  const filteredShop = Myshop.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
   
  );




  const Addcart = () => { toast("Your Item Go To Add Cart Please CheckIt!");


  toast.success('🦄 Wow so easy!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
  }

  const Bynow = () => { toast("Please Login Your Account");


    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    }
  return (
    <>
      <div className={Shop1.shp1}>
        <div className={Shop1.shp2}>
          {/* <div>
            <span>Welcome To SportsHub Shopping</span>
          </div> */}
          <div>
            {/* <input
              type="text"
              id="btn"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Enter</button> */}

<StyledWrapper>
      <div className="input-wrapper">
        <button className="icon">
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 22L20 20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <input type="text" name="text" className="input"   id="btn"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)} />
      </div>
    </StyledWrapper>
          </div>
        </div>
        <div className={Shop1.shp3}>
          {filteredShop.map((shopy, index) => (
            <div key={index} className={Shop1.shp5}>
              <img src={shopy.img} alt={shopy.name} />
              <h3>{shopy.name}</h3>
              <p>{shopy.name2}</p>
              <h6>{shopy.cost}</h6>
              <li>
                {shopy.cost2} <i>{shopy.cost3}</i>
              </li>
              <div className={Shop1.shp6}>
                <button  className={Shop1.shp7} onClick={ Addcart}>{shopy.button1}</button>
                <button  className={Shop1.shp8}  onClick={ Bynow} >{shopy.button2}</button>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
const StyledWrapper = styled.div`
  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
  }

  .input {
    border-style: none;
    height: 23px;
    width: 90px;
    padding: 10px;
    outline: none;
    border-radius: 5%;
    transition: 0.5s ease-in-out;
    background-color:rgb(19, 8, 126);
    box-shadow: 0px 0px 3px #1557c0;
    padding-right: 40px;
    color: #fff;
  }

  .input::placeholder,
  .input {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 17px;
     color:rgb(8, 8, 8);

  }

  .input::placeholder {
    color: #8f8f8f;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    outline: none;
    border-style: none;
    border-radius: 30%;
    pointer-events: painted;
    background-color: transparent;
    transition: 0.2s linear;
  }

  .icon:focus ~ .input,
  .input:focus {
    box-shadow: none;
    width: 250px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 3px solid #1557c0;
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }`;

export default Shop;

