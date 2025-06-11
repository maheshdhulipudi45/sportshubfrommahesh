import Football1 from "./cricket.module.css"

const  Football =()=>{


  
let cards=[{img:"\messi.webp",name:"Lionel Messi",info:"Goals: 800 | Matches: 1020"},
  {img:"ronaldo.webp",name:"RONALDO",info:"Goals: 790 | Matches: 1010"},
  {img:"Kylian.jpg",name:"Kylian Mbappé",info:"Goals: 650 | Matches: 900"},
  {img:"neymar-jr.webp",name:"Neymar Jr",info:"Goals: 600 | Matches: 820"}
];
    return(

      

        <>
       
  <div className={ Football1.cricket1}>
     <h1 className={Football1.he2} >FOOTBALL IS A SPORT OF PASSION,<br></br> STRATEGY, AND GLORY</h1>
            <a href="/news" class="cta-button">  <button className="button">
                Explore News
              </button></a>
  </div>

 
     <h2 className={Football1.he1}>Latest Kabbadi News</h2>
     <hr/>
  <div className={Football1.cricket2}>
  <div className={Football1.cricket2_1}> 
  <div className={Football1.cricket2_1_1}>
    <img src="\public\footballnews1.jpeg"></img></div>
  <div className={Football1.cricket2_1_2}><h6>NEWS</h6>
  <h4>Injury leaves Kylian Mbappe in doubt for Real Madrid’s Copa del Rey final against Barcelona</h4> <p>.</p></div>
  </div>

  <div className={Football1.cricket2_1}> 
  <div className={Football1.cricket2_1_1}>
    <img src="\footballnews2.webp"></img></div>
  <div className={Football1.cricket2_1_2}><h6>NEWS</h6>
  <h4>English Premier League return race: Leeds, Burnley within touching distance of punching tickets</h4> <p></p></div>
  </div>


  <div className={Football1.cricket2_1}> 
  <div className={Football1.cricket2_1_1}>
    <img src="\public\footballnews3.jpg"></img></div>
  <div className={Football1.cricket2_1_2}><h6>NEWS</h6>
  <h4>Manchester United star Alejandro Garnacho wanted by Atletico Madrid and Bayer Leverkusen</h4> <p>.</p></div>
  </div>



  <div className={Football1.cricket2_1}> 
  <div className={Football1.cricket2_1_1}>
    <img src="\public\Ronaldo (4).webp"></img></div>
  <div className={Football1.cricket2_1_2}><h6>NEWS</h6>
  <h4>Cristiano Ronaldo and Al-Nassr’s title hopes suffer major setback with 2-1 loss in Saudi Pro League</h4> <p></p></div>
  </div>

  
  </div>

  <h2 className={Football1.he1}>Match Schedules</h2>
  <hr/>
  <div className={Football1.sd}>
  <div className={Football1.sd1}>
    <div className={Football1.sd1_1}>
      <div className={Football1.sd1_1_1}><span>Match-1</span></div> 
      <div className={Football1.sd1_1_2}><span>Live*</span></div> 
    </div> 
    <div className={Football1.sd1_2}>
      <div className={Football1.sd1_2_1}><img src="\public\ind.jpeg"></img><span>IND</span> <b>00</b></div> 
      <div className={Football1.sd1_2_2}><img src="\public\SA.jpeg"></img><span>SA</span> <b>00</b></div> 
    </div> 
    <div className={Football1.sd1_3}><span>COLUMBO</span></div> 
  </div> 

  <div className={Football1.sd1}>
    <div className={Football1.sd1_1}>
      <div className={Football1.sd1_1_1}><span>Match-2</span></div> 
      <div className={Football1.sd1_1_2}><span>Live*</span></div> 
    </div> 
    <div className={Football1.sd1_2}>
      <div className={Football1.sd1_2_1}><img src="\public\Aus.jpeg"></img><span>AUS</span> <b>00</b></div> 
      <div className={Football1.sd1_2_2}><img src="\public\Sl.jpeg"></img><span>SL</span> <b>00</b></div> 
    </div> 
    <div className={Football1.sd1_3}><span>SANDEY</span></div> 
  </div> 

  <div className={Football1.sd1}>
    <div className={Football1.sd1_1}>
      <div className={Football1.sd1_1_1}><span>Match-3</span></div> 
      <div className={Football1.sd1_1_2}><span>Live*</span></div> 
    </div> 
    <div className={Football1.sd1_2}>
      <div className={Football1.sd1_2_1}><img src="\public\NZ.jpeg"></img><span>NZL</span> <b>00</b></div> 
      <div className={Football1.sd1_2_2}><img src="\public\ENG.jpeg"></img><span>ENG</span> <b>00</b></div> 
    </div> 
    <div className={Football1.sd1_3}><span>ENGLAND</span></div> 
  </div> 

  <div className={Football1.sd1}>
    <div className={Football1.sd1_1}>
      <div className={Football1.sd1_1_1}><span>Match-4</span></div> 
      <div className={Football1.sd1_1_2}><span>Live*</span></div> 
    </div> 
    <div className={Football1.sd1_2}>
      <div className={Football1.sd1_2_1}><img src="\public\PAK.jpeg"></img><span>PAK</span> <b>00</b></div> 
      <div className={Football1.sd1_2_2}><img src="\public\WI.jpeg"></img><span>WI</span> <b>00</b></div> 
    </div> 
    <div className={Football1.sd1_3}><span> Ahmedabad</span></div> 
  </div>   
  </div>

  <h2 className={Football1.he1}>Top Players</h2>
  
<div  className={Football1.script1}>
    {cards.map((d1, index1) => (
      <div key={index1}  className={Football1.script2}>
        <img src={d1.img} alt={d1.name}  ></img>
        <h3>{d1.name}</h3>
        <p>{d1.info}</p>
      </div>

))}
  </div>

        </>
    );
};

export default Football;
