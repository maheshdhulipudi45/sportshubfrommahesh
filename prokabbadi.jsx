import Kabba from "./cricket.module.css";

const Kabbadi =()=>{


let cards=[{img:"\pradeep.jpeg",name:"Pardeep Narwal",info:"Raid Points: 1200 | Matches: 150"},
  {img:"\ajay.jpg",name:"Ajay Thakur",info:"Raid Points: 1200 | Matches: 120"},
  {img:"rahul.jpg",name:"Rahul Chaudhar",info:"Raid Points: 950 | Matches: 130"},
  {img:"\pawanjpeg.jpeg",name:"Pawan Sherawat",info:"Raid Points: 850 | Matches: 90"}
];



    return(
        <>
       
  <div className={Kabba.cricket1}>

    <h1 className={Kabba.he2} >KABBADI IS A SPORT OF PASSION,<br></br> STRATEGY, AND GLORY</h1>
        <a href="/news" class="cta-button">  <button className="button">
            Explore News
          </button></a>

  </div>

 
     <h2 className={Kabba.he1}>Latest Kabbadi News</h2>
     <hr/>
  <div className={Kabba.cricket2}>
  <div className={Kabba.cricket2_1}> 
  <div className={Kabba.cricket2_1_1}>
    <img src="\public\manpreet.jpeg"></img></div>
  <div className={Kabba.cricket2_1_2}><h6>NEWS</h6>
  <h4>Manpreet's golden dream achieved:</h4> <p>Mohammadreza Shadloui was in no doubt ahead of the game. He was the missing piece in the Haryana Steelers puzzle last year, and was the diamond.</p></div>
  </div>

  <div className={Kabba.cricket2_1}> 
  <div className={Kabba.cricket2_1_1}>
    <img src="\rakesh-kumar.webp"></img></div>
  <div className={Kabba.cricket2_1_2}><h6>NEWS</h6>
  <h4>U Mumba Rope In Rakesh Kumar As Head Coach!</h4> <p>Known for his exceptional leadership, Rakesh had earlier coached Haryana in the PKL and the Indian Railways team.</p></div>
  </div>


  <div className={Kabba.cricket2_1}> 
  <div className={Kabba.cricket2_1_1}>
    <img src="\k5otjln_kabaddi-x.webp"></img></div>
  <div className={Kabba.cricket2_1_2}><h6>NEWS</h6>
  <h4>Kabaddi's Global Body Declares World Cup In UK </h4> <p>Kabaddi's Global Body Declares World Cup In UK .The International Kabaddi Federation (IKF) on Wednesday .</p></div>
  </div>



  <div className={Kabba.cricket2_1}> 
  <div className={Kabba.cricket2_1_1}>
    <img src="\public\kabbadi.webp"></img></div>
  <div className={Kabba.cricket2_1_2}><h6>NEWS</h6>
  <h4>India wins ICC World Cup!</h4> <p>Ban On Indian Kabaddi Federation Will Be Lifted Next Month: International Body Chief Vinod Kumar Tiwari.</p></div>
  </div>

  
  </div>

  <h2 className={Kabba.he1}>Match Schedules</h2>
  <hr/>
  <div className={Kabba.sd}>
  <div className={Kabba.sd1}>
    <div className={Kabba.sd1_1}>
      <div className={Kabba.sd1_1_1}><span>Match-1</span></div> 
      <div className={Kabba.sd1_1_2}><span>Live*</span></div> 
    </div> 
    <div className={Kabba.sd1_2}>
      <div className={Kabba.sd1_2_1}><img src="\public\ind.jpeg"></img><span>IND</span> <b>45</b></div> 
      <div className={Kabba.sd1_2_2}><img src="\public\SA.jpeg"></img><span>SA</span> <b>39</b></div> 
    </div> 
    <div className={Kabba.sd1_3}><span>M.Chinnaswamy Stadium, Bengaluru</span></div> 
  </div> 

  <div className={Kabba.sd1}>
    <div className={Kabba.sd1_1}>
      <div className={Kabba.sd1_1_1}><span>Match-2</span></div> 
      <div className={Kabba.sd1_1_2}><span>Live*</span></div> 
    </div> 
    <div className={Kabba.sd1_2}>
      <div className={Kabba.sd1_2_1}><img src="\public\Aus.jpeg"></img><span>AUS</span> <b>00</b></div> 
      <div className={Kabba.sd1_2_2}><img src="\public\Sl.jpeg"></img><span>SL</span> <b>00</b></div> 
    </div> 
    <div className={Kabba.sd1_3}><span>Eden Gardens, Kolkata</span></div> 
  </div> 

  <div className={Kabba.sd1}>
    <div className={Kabba.sd1_1}>
      <div className={Kabba.sd1_1_1}><span>Match-3</span></div> 
      <div className={Kabba.sd1_1_2}><span>Live*</span></div> 
    </div> 
    <div className={Kabba.sd1_2}>
      <div className={Kabba.sd1_2_1}><img src="\public\NZ.jpeg"></img><span>NZL</span> <b>19</b></div> 
      <div className={Kabba.sd1_2_2}><img src="\public\ENG.jpeg"></img><span>ENG</span> <b>49</b></div> 
    </div> 
    <div className={Kabba.sd1_3}><span>Wankhede Stadium, Mumbai</span></div> 
  </div> 

  <div className={Kabba.sd1}>
    <div className={Kabba.sd1_1}>
      <div className={Kabba.sd1_1_1}><span>Match-4</span></div> 
      <div className={Kabba.sd1_1_2}><span>Live*</span></div> 
    </div> 
    <div className={Kabba.sd1_2}>
      <div className={Kabba.sd1_2_1}><img src="\public\PAK.jpeg"></img><span>PAK</span> <b>00</b></div> 
      <div className={Kabba.sd1_2_2}><img src="\public\WI.jpeg"></img><span>WI</span> <b>00</b></div> 
    </div> 
    <div className={Kabba.sd1_3}><span>Narendra Modi Stadium, Ahmedabad</span></div> 
  </div>   
  </div>

  <h2 className={Kabba.he1}>Top Players</h2>
  <hr/>
  {/* <div className={Kabba.player1}>
    <div className={Kabba.playercard}>
      <img src="\pradeep.jpeg" alt="Virat Kohli"/>
      <h3>Pardeep Narwal</h3> <p>Raid Points: 1200 | Matches: 150</p>
    </div>
    <div className={Kabba.playercard}>
      <img src="\public\ajay.jpg" alt="Steve Smith"/>
      <h3>Ajay Thakur</h3> <p>Raid Points: 1000 | Matches: 120</p>
    </div>
    <div className={Kabba.playercard}>
      <img src="\public\rahul.jpg" alt="Babar Azam"/>
      <h3>Rahul Chaudhari</h3> <p>Raid Points: 950 | Matches: 130</p>
    </div>
    <div className={Kabba.playercard}>
      <img src="\public\pawanjpeg.jpeg" alt="Rohit Sharma"/>
      <h3>Pawan Sherawat</h3> <p>Raid Points: 850 | Matches: 90</p>
    </div>
   
  </div> */}

  <div  className={Kabba.script1}>
    {cards.map((d1, index1) => (
      <div key={index1}  className={Kabba.script2}>
        <img src={d1.img} alt={d1.name}  ></img>
        <h3>{d1.name}</h3>
        <p>{d1.info}</p>
      </div>

))}
  </div>



        </>
    );
};

export default Kabbadi;
