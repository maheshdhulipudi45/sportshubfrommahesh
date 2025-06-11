
import Cric from "./cricket.module.css"
import styled from 'styled-components';

const Cricket =()=>{

let cards = [
  { img:"virat.jpeg",name:"Virat Kohli", info:"Runs: 16,500 | Matches: 220" },

  {img:"rohit.jpeg",name:"Rohit Sharma", info:"Runs: 13,500 | Matches: 220" },

  {img:"smith.jpeg",name:"Stive Smith", info:"Runs: 12,000 | Matches: 220" },
  {img:"baber.jpeg",name:"Baber Azam", info:"Runs: 10,500 | Matches: 220" },

];



    return(
        <>
       
  <div className={Cric.cricket1 }>
    {/* <h1 className={Cric.he1}>Welcome to SportsHub</h1><hr></hr> */}
    <h1 className={Cric.he2} >CRICKET IS A SPORT OF PASSION,<br></br> STRATEGY, AND GLORY</h1>
    <a href="/news" class="cta-button">  <button className="button">
        Explore News
      </button></a>
  </div>

{/**   latest cricket */}

 
   <h2   className={Cric.he1}>Latest Cricket News</h2><hr></hr>
  <div className={Cric.cricket2}>
  <div className={Cric.cricket2_1}> 
  <div className={Cric.cricket2_1_1}>
    <img src= "\public\india.jpg"></img></div>
  <div className={Cric.cricket2_1_2}><h6>NEWS</h6>
  <h4>India wins ICC World Cup!</h4> <p>The Indian cricket team emerged victorious after a spectacular performance in the finals.</p></div>
  </div>


  <div className={Cric.cricket2_1}> 
  <div className={Cric.cricket2_1_1}>
    <img src= "\public\rohitnews.webp"></img></div>
  <div className={Cric.cricket2_1_2}><h6>NEWS</h6>
  <h4>Rohit And Wankhed</h4> <p>'An unreal feeling' - Rohit on MCA's Wankhede stand gesture</p></div>
  </div>


  <div className={Cric.cricket2_1}> 
  <div className={Cric.cricket2_1_1}>
    <img src= "\public\abhishek-sharma.webp"></img></div>
  <div className={Cric.cricket2_1_2}><h6>NEWS</h6>
  <h4>India Young Players New Contract</h4> <p>Abhishek Sharma, Nitish Reddy, Harshit Rana likely to get BCCI's central contract</p></div>
  </div>
  

  <div className={Cric.cricket2_1}> 
  <div className={Cric.cricket2_1_1}>
    <img src= "\public\thisjayahsawebp.webp"></img></div>
  <div className={Cric.cricket2_1_2}><h6>NEWS</h6>
  <h4>Singapore to host ICC annual conference</h4> <p>The annual conference of the  (ICC) is set to take place in Singapore,.</p></div>
  </div>
 
  </div>
  <h2  className={Cric.he1}>Match Schedule</h2>
  <hr></hr>
  <div class={Cric.sd}>
  <div class={Cric.sd1}>
    
  <div class={Cric.sd1_1}>
  <div class={Cric.sd1_1_1}><span>Match-1</span></div> 
  <div class={Cric.sd1_1_2}> <span>Live*</span></div> </div> 
  <div class={Cric.sd1_2}>
  <div class={Cric.sd1_2_1}>   <img src="\public\ind.jpeg"></img> 

  <span>IND</span> <b>195/6(20)</b>
  </div> 
  <div class={Cric.sd1_2_2}>   <img src="\public\SA.jpeg"></img>
  <span>SA</span>      <b>49/2(6.1)</b></div> 
    </div> 
  <div class={Cric.sd1_3}><span>M.Chinnaswamy Stadium, Bengaluru</span></div> 
    </div>   





{/* match schedules */}

    <div class={Cric.sd1}>
    
    <div class={Cric.sd1_1}>
    <div class={Cric.sd1_1_1}><span>Match-2</span></div> 
    <div class={Cric.sd1_1_2}> <span>Live*</span></div> </div> 
    <div class={Cric.sd1_2}>
    <div class={Cric.sd1_2_1}>   <img src="\public\Aus.jpeg"></img> 
  
    <span>AUS</span> <b>00/0(0)</b>
    </div> 
    <div class={Cric.sd1_2_2}>   <img src="\public\Sl.jpeg"></img>
    <span>SL</span>      <b>00/0(0)</b></div> 
      </div> 
    <div class={Cric.sd1_3}><span>Eden Gardens, Kolkata</span></div> 
      </div>   




      <div class={Cric.sd1}>
    
    <div class={Cric.sd1_1}>
    <div class={Cric.sd1_1_1}><span>Match-3</span></div> 
    <div class={Cric.sd1_1_2}> <span>Live*</span></div> </div> 
    <div class={Cric.sd1_2}>
    <div class={Cric.sd1_2_1}>   <img src="\public\NZ.jpeg"></img> 
  
    <span>NZL</span> <b>195/6(20)</b>
    </div> 
    <div class={Cric.sd1_2_2}>   <img src="\public\ENG.jpeg"></img>
    <span>ENG</span>      <b>49/2(6.1)</b></div> 
      </div> 
    <div class={Cric.sd1_3}><span>Wankhede Stadium, Mumbai</span></div> 
      </div>   
      <div class={Cric.sd1}>
    
  <div class={Cric.sd1_1}>
  <div class={Cric.sd1_1_1}><span>Match-4</span></div> 
  <div class={Cric.sd1_1_2}> <span>Live*</span></div> </div> 
  <div class={Cric.sd1_2}>
  <div class={Cric.sd1_2_1}>   <img src="\public\PAK.jpeg"></img> 

  <span>PAK</span> <b>195/6(20)</b>
  </div> 
  <div class={Cric.sd1_2_2}>   <img src="\public\WI.jpeg"></img>
  <span>WI</span>      <b>49/2(6.1)</b></div> 
    </div> 
  <div class={Cric.sd1_3}><span>Narendra Modi Stadium, Ahmedabad</span></div> 
    </div>     
  
  </div>
 
 
<h2  class={Cric.he1}>Top Players</h2><hr></hr>
<div className={Cric.script1}>
  {cards.map((d1, index) => (
    <div key={index} className={Cric.script2}>
      <img src={d1.img} alt={d1.name}></img>
      <h3>{d1.name}</h3>
      <p>{d1.info}</p>
    </div>
  ))}
</div>
        </>
    )
}




export default Cricket;