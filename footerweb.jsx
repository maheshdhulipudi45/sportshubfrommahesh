import Foot1 from "./footer.module.css"
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram ,FaHome} from 'react-icons/fa';
import { Link, useNavigate, useNavigation } from "react-router-dom";

const Foot =()=>{

   
    return(
        <>
        <div className={Foot1.ft1}>
        <div className={Foot1.ft2}><img src="\public\baseball-removebg-preview.png"></img><span>SportsHub</span></div>
        <div className={Foot1.ft3}>
        <div className={Foot1.ft3_1}><ul>
            <li>
                
                
            <Link  to="/">  Home</Link>  </li>
            <li>  <Link  to="/about">  About</Link></li>
            <li><Link  to="/privacy"> Privacy&Policy</Link></li>
            <li><Link  to="/terms">  Terms&Conditions</Link></li></ul></div>
          
       <div className={Foot1.socialIcons}>
                 <FaGoogle className={`${Foot1.icon} ${Foot1.google}`} />
                 <FaFacebook className={`${Foot1.icon} ${Foot1.facebook}`} />
                 <FaTwitter className={`${Foot1.icon} ${Foot1.twitter}`} />

                 
                 <FaInstagram className={`${Foot1.icon} ${Foot1.instagram}`} />
                 <FaHome className={`${Foot1.icon} ${Foot1.whatsapp}`} />
               </div>
               <div className={Foot1.ft3_4}>
                <h5>Copyright          @ Sportshub</h5>
               </div>
        </div>
        <div className={Foot1.ft4}><button>  <Link to="/contact">ContactUs</Link> </button></div>
        </div>
        </>
    )
}
export default Foot