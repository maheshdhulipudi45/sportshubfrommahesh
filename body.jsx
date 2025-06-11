import React from "react"
import Body1 from "./body.module.css"
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

import { Link } from "react-router";



const Body=()=>{
console.log("mahesh")




const events = [
  {
    title: "Cricket: India vs Australia",
    date: "May 10, 2025",
    location: "Rajiv Gandhi Stadium, Hyderabad",
    image: "/indvsaus.jpg",
  },
  {
    title: "Football: Hyderabad FC vs Kerala Blasters",
    date: "May 15, 2025",
    location: "Gachibowli Stadium",
    image: "KBFC-vs-HYD1.jpg",
  },
  {
    title: "Tennis: Indian Open Finals",
    date: "May 20, 2025",
    location: "LB Stadium, Hyderabad",
    image: "ndian Open Finals.jpg",
  },
];






let MyArr=[{img:"\cricket.avif",name:"cricket"},{img:"\cricket.avif",name:"kabbadi"},{img:"\cricket.avif",name:"cricket"},{img:"\cricket.avif",name:"cricket"}]
  
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };
  







  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

    
    return(
        <>


<div  className={Body1.bodybox1}>
<div  className={Body1.bodybox2}>
<div  className={Body1.bodybox3}>
<div>
<h1>Welcome to the Sports Hub</h1>
      <p>
        Your one-stop destination for all things sports! Whether you're a passionate fan, 
        an aspiring athlete, or simply someone who appreciates the spirit of competition, 
        this platform is designed to inspire, inform, and ignite your love for sports.
      </p>
      </div>
      <div  className={Body1.bodybox33}></div>
  </div>

  {/* <div  className={Body1.bodybox3_1}>
  <img src= "\public\sports.webp"></img>
  </div> */}
</div>
</div>

{/* scrolls */}

<div className={Body1.Autoslider0}>
<div className={Body1.Autoslider}>
      <Slider {...settings1}>
        <div className={Body1.Auto11}>
        <img src="autoplaycricket.jpg"/>
          <h3>Cricket</h3>
        </div>
        <div className={Body1.Auto11}>
        <img src="\public\autoplaykabbadi.jpg"/>
          <h3>Kabbadi</h3>
        </div>
        <div  className={Body1.Auto11}>
        <img src="\public\autoplayfootballi.jpg"/>
          <h3>Football</h3>


        </div>
        <div  className={Body1.Auto11} >
        <img src="\public\autoplayhockey.jpg"/>
          <h3>Hockey</h3>
        </div>
        <div   className={Body1.Auto11}>
        <img src="\public\autoplayvolleyball.jpg"/>
          <h3>Volleyball</h3>
        </div>
        <div  className={Body1.Auto11}>
        <img src="\public\kabbadi.jpeg"/>
          <h3>Batmantion</h3>
        </div>
      </Slider>
    </div>
    </div>









    {/* 
    Sports History Highlights */}


<div className={Body1.timeline}>
  <h2>Sports History Highlights</h2>
  <div className={Body1.timelineGrid}>
    <div className={Body1.timelineItem}>
      <img src="1983.jpg" alt="1983 World Cup " className={Body1.timelineImage} />
      <h3>1983 - Cricket World Cup </h3>
      <p>India secures its first-ever Cricket World Cup, defeating West Indies at Lord's.</p>
    </div>

    <div className={Body1.timelineItem}>
      <img src="2007t20.jpg" alt="2007 T20 World Cup Win" className={Body1.timelineImage} />
      <h3>2007 - T20 World Cup  Win</h3>
      <p>India wins the first ICC T20 World Cup in a thrilling final against Pakistan.</p>
    </div>

    <div className={Body1.timelineItem}>
      <img src="World-Cup-2011-Champions.jpg" alt="2011 World Cup Victory" className={Body1.timelineImage} />
      <h3>2011 - Cricket World Cup </h3>
      <p>India lifts the Cricket World Cup after 28 years, defeating Sri Lanka at Wankhede Stadium.</p>
    </div>

    <div className={Body1.timelineItem}>
      <img src="2018Fifa.jpg" alt="Football World Cup 2018" className={Body1.timelineImage} />
      <h3>2018 - Football World Cup</h3>
      <p>France claims victory in the FIFA World Cup, defeating Croatia in a spectacular final.</p>
    </div>

    <div className={Body1.timelineItem}>
      <img src="2024t20.jpg" alt="Neeraj Chopra Gold" className={Body1.timelineImage} />
      <h3>2024 -T20WC Victory</h3>
      <p>India's triumph in the 2024 ICC Men's T20 World Cup was a historic moment for cricket fans.</p>
    </div>


   
    <div className={Body1.timelineItem}>
      <img src="2025icc.jpg" alt="Neeraj Chopra Gold" className={Body1.timelineImage} />
      <h3>2025 - ICC Championship </h3>
      <p>India's victory in the ICC Men's Champions Trophy 2025 was a monumental achievement in cricket history.</p>
    </div>


  </div>
</div>



    {/* Featured Articles */}

    <div className={Body1.featured}>
  <h2>Featured Articles</h2>
  <div className={Body1.articles}>
    <div className={Body1.article}>
      <div>
      <img src="\public\cricketball.jpeg" alt="Featured Article" />
      </div>
      <div className={Body1.article1}>
      <h3>Mastering the Cricket Swing</h3>
      <p>Discover techniques to improve your batting skills, endorsed by experts.Uncover expert-backed tips to refine your cricket swing, boost shot accuracy, and develop confidence at the crease</p>
      </div>
    </div>
    <div className={Body1.article}>
      <div>
      <img src="\Top 5 Football Drills.jpg" alt="Featured Article" />
      </div>
      <div  className={Body1.article1}>
      <h3>Top 5 Drills to Elevate Your Football Performance</h3>
      <p>Learn effective drills to level up your game with insights from professional coaches.Uncover expert-backed tips to refine your cricket swing, boost shot accuracy at the crease</p>
    </div>
    </div>
    <div className={Body1.article}>
      <div>
      <img src="\public\kabbadiwhy.jpg" alt="Featured Article" />
      </div>
      <div>
      <div className={Body1.article1}>
      <h3>Why Kabbadi is a Rising Star</h3>
      <p>Explore the growing popularity of Kabbadi and its impact globally.Uncover expert-backed tips to refine your cricket swing, boost shot accuracy, and develop confidence at the crease</p>
      </div>
    </div>
    </div>
  </div>
</div>


{/* Upcoming Events */}

<div className={Body1.app}>
      <header>
        <h1>Upcoming Sports Events</h1>
      </header>
      <main className={Body1.eventGrid}>
        {events.map((event, index) => (
          <div className={Body1.eventCard} key={index}>
            <img src={event.image} alt={event.title} />
            <div className={Body1.eventDetails}>
              <h2>{event.title}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          </div>
        ))}
      </main>
    </div>







            </>
    )
}
export default Body;

