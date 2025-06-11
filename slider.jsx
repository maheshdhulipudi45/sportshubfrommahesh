
import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const MySlide=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    return(
        <>
        <Slider {...settings}>
           <p>
            <p>fghjkl</p>
           </p>
           <p>
            <p>fghjkl</p>
           </p>
           <p>
            <p>fghjkl</p>
           </p>
           <p>
            <p>fghjkl</p>
           </p>
        </Slider>
        </>
    )
}
export default MySlide