import React from "react";
import News from "./news.module.css"
import "@fontsource/roboto"; 
import "@fontsource/roboto/700.css";


const Newspage =()=>{

   //  const news=[{logo:"ipl",
   //    time:"19h",
   //    head:"SRH vs MI IPL 2025 Highlights: Mumbai on course to chase 143 runs",
   //      paranews:"Sunrisers Hyderabad host Mumbai Indians in the 41st match of the Indian Premier League 2025 at Rajiv Gandhi International Stadium, Hyderabad. Follow for the latest updates.",
   //      img:"football.jpeg"},
        
         

   //    ];


const newscards=[{
   img:"\iccaus.png",
   news:"ICC World Test Championship",
   title:"Shastri predicts Australia's bowling attack for World Test Championship Final ",
   time:"6h ago"
},{
   img:"\iccnl.jpg",
   news:" ODI NEWS",
   title:"Netherlands unveil full strength squad for UAE and Scotland series  ...... ",
   time:"12h ago"
},{
   img:"iccindia.jpg",
   news:" BCCI NEWS",
   title:"Big names included as India announce annual player contracts ...... ",
   time:"21 April, 2025"
},{
   img:"icczm.jpg",
   news:"TEST NEWS",
   title:"Zimbabwe repeat 2018 heroics with thrilling Test win in Sylhet ...... ",
   time:"23 April, 2025"
},
{
   img:"iccsunil.webp",
   news:"FOOTBALL NEWS",
   title:" Sunil Chhetri Scores Terrific Last-Gasp Winning Goal, Sends Bengaluru FC To ISL Final...... ",
   time:"6m ago"
},{
   img:"iccfoot1.jpg",
   news:"FOOTBALL NEWS",
   title:"Transfer rumors are spread    news: Bayern have advantage to sign Wirtz...... ",
   time:"8h ago"
},{
   img:"iccfoot2.jpg",
   news:"FOOTBALL NEwS",
   title:"Injury leaves Kylian Mbappe in doubt for Real Madrid’s Copa del Rey final against Barcelona  ...... ",
   time:"25 April 2025"
},{
   img:"iccfoot3.jpg",
   news:"FOOTBALL NEWS",
   title:"Manchester United injury update: Amad Diallo set to return to training - reports ...... ",
   time:"27 April 2025"
},
,{
   img:"indiahocky.jpg",
   news:"HOCKEY NEWS",
   title:"Hockey India Announces 54-Member Core Squad For April 2025 Training Camp  ...... ",
   time:"2h ago"
},{
   img:"hocky2.jpg",
   news:"HOCKEY NEWS",
   title:"Mizoram Hockey In Focus As Five Girls Selected For National Centres of Excellence  ...... ",
   time:"12h ago"
},{
   img:"hocky3.jpg",
   news:"HOCKEY NEWS",
   title:"Hockey fans create the ultimate NHL dream playoffs: Toronto  Leafs emerge as champions ...... ",
   time:"23 April 2025"
},{
   img:"hocky4.jpg",
   news:"HOCKEY NEWS",
   title:"Little rat’: How Senators’ quiet pest Ridly Greig became a hockey villain ...... ",
   time:"21 April 2025"
}]
   



    return(
        <>




          
       
        <h1 className={News.box0} ><i>SportsHub Latest News</i></h1>
        <div className={News.box1}>
        <div className={News.box2}>
        <div className={News.box3}>
        <div className={News.box4}>
         <div  className={News.box4_1}><b>IPL</b> <b>7h</b></div>
         <div  className={News.box4_2}><h4>Rohit Sharma fires again as Mumbai Indians pulverise hapless Sunrisers Hyderabad by seven wickets</h4>
         <p>Mumbai Indians’ fourth win on the trot, which took them to the third spot from the earlier sixth on the points table, came after SRH posted a below-par 143/8 and Rohit making the most of the perfect batting conditions to score 70 off 46 balls (8x4s, 3x6s).</p></div>
        </div>
        <div className={News.box5}>
         <img src="\rohitnews.jpg" ></img>
        </div>
        </div>



        {/* two */}
        <div className={News.box3}>
        <div className={News.box4}>
         <div  className={News.box4_1}><b>IPL</b> <b>7h</b></div>
         <div  className={News.box4_2}><h4>Mumbai Indians to host 19,000 underprivileged children at Wankhede Stadium for special ESA match against Lucknow Super Giants</h4>
         <p>The ESA initiative, launched in 2010, represents a collaboration between Reliance Foundation (the CSR arm of Reliance Industries Limited) and Mumbai Indians..</p></div>
        </div>
        <div className={News.box5}>
         <img src="\mumbaichild.jpg" ></img>
        </div>
        </div>
    
                {/* two */}
        <div className={News.box3}>
        <div className={News.box4}>
         <div  className={News.box4_1}><b>IPL</b> <b>7h</b></div>
         <div  className={News.box4_2}><h4>SRH vs MI IPL 2025 Highlights: Mumbai on course to chase 143 runs </h4>
         <p>The Board of Control for Cricket in India (BCCI) has announced the Annual Player Contracts for Team India (Senior Men) for the 2024-25 season, which will run from October 1st, 2024, to September 30th, 2025..</p></div>
        </div>
        <div className={News.box5}>
         <img src="india .jpg" ></img>
        </div>
        </div>
            {/* two */}
            <div className={News.box3}>
        <div className={News.box4}>
         <div  className={News.box4_1}><b>IPL</b> <b>7h</b></div>
         <div  className={News.box4_2}><h4>Indian sports wrap, April 25: Gold rush for Rashmika in KSS Shooting Championship; Pai wins round 1 of CCI Billiards Classic</h4>
         <p>Sunrisers Hyderabad host Mumbai Indians in the 41st match of the Indian Premier League 2025 at Rajiv Gandhi International Stadium, Hyderabad. Follow for the latest updates.</p></div>
        </div>
        <div className={News.box5}>
         <img src="boxing.jpg"></img>
        </div>
        </div>
                {/* two */}
        <div className={News.box3}>
        <div className={News.box4}>
         <div  className={News.box4_1}><b>IPL</b> <b>7h</b></div>
         <div  className={News.box4_2}><h4>Explained: Why Rachin Ravindra Is Not Playing Today's IPL 2025 Match For CSK Against SRH </h4>
         <p>Rachin Ravindra has been dropped from CSK's playing XI for tonight's IPL 2025 match against SRH at MA Chidambaram Stadium in Chennai.
         </p></div>
        </div>
        <div className={News.box5}>
         <img src="Rachin-Ravi.webp" ></img>
        </div>
        </div>
                {/* two */}
        <div className={News.box3}>
        <div className={News.box4}>
         <div  className={News.box4_1}><b>IPL</b> <b>7h</b></div>
         <div  className={News.box4_2}><h4>MS Dhoni After CSK Lose Again In IPL 2025: 'If Majority Of Your Players Are Not Doing Well...'</h4><p>Mahendra Singh Dhoni was a dissapointed man after Chennai Super Kings suffered their fourth consecutive defeat at Chepauk, losing to Sunrisers Hyderabad by 5 wickets in the 2025 Indian Premier League (IPL) at the MA Chidambaram Stadium in Chennai on Friday.</p></div>
        </div>
        <div className={News.box5}>
         <img src="\dhoni.jpg" ></img>
        </div>
        </div>





        




        




        
        

        </div>
        </div>
        <h1  className={News.box6h1}><i>Top News:-</i></h1>

        <div className={News.box61}>
        
         <div className={News.box6}>
        {newscards.map((card,index)=>(
  <div key={index} className={News.box7}>
  <img src={card.img}></img>
  <h6>{card.news}</h6>
  <h3>{card.title}</h3>
  <p>{card.time}</p>
  </div>
        ))}
         </div>
        </div>
        </>
    )
}
export default Newspage;

