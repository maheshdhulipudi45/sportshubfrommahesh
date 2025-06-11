// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter,Routes,Route } from 'react-router'
// import Nav from './sprotweb/naviweb'
// import Body from './sprotweb/body'
// import Foot from './sprotweb/footerweb'
// import About from './sprotweb/about'
// import PrivacyPolicy from './sprotweb/privacypolicy'
// import TermsAndConditions from './sprotweb/tremsconditions'
// import Cricket from './sprotweb/cricket'
// import Kabbadi from './sprotweb/prokabbadi'
// import Football from './sprotweb/football'
// import Shop from './sprotweb/shopping'
// import ContactPage from './sprotweb/contact'
// import Newspage from './sprotweb/news'

// import Main45 from './sprotweb/main45'


// import { Outlet } from 'react-router'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

   
//    <Main45/>
  
 
    
    

   
   
    
//        <BrowserRouter>
     
//       <Routes>
      
       
//         <Route index element={<Body/>}>
//         <Route path="/about"  element={<About/>}></Route>

//         <Route path="/privacy"  element={<PrivacyPolicy/>}></Route>
//         <Route path="/terms"  element={<TermsAndConditions/>}></Route>
//         <Route path="/cricket"  element={<Cricket/>}></Route>
//         <Route path="/kabbadi"  element={<Kabbadi/>}></Route>
//         <Route path="/football" element={<Football/>}></Route>
//         <Route path="/shopping" element={<Shop/>}></Route>
//         <Route path='/contact'  element={<ContactPage/>}></Route>
//                 <Route path='/news'  element={ <Newspage/>}></Route>
//                 </Route>
       
       
              
//          </Routes>
     
         
//          </BrowserRouter> 
         
       
       
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct import for routing
import Body from './sprotweb/body';
import About from './sprotweb/about';
import PrivacyPolicy from './sprotweb/privacypolicy';
import TermsAndConditions from './sprotweb/tremsconditions';
import Cricket from './sprotweb/cricket';
import Kabbadi from './sprotweb/prokabbadi';
import Football from './sprotweb/football';
import Shop from './sprotweb/shopping';
import SportsPage from './sprotweb/sportpage';
import Newspage from './sprotweb/news';
import Main45 from './sprotweb/main45';
import Login1 from './sprotweb/navilogin';
import Singup1 from './sprotweb/singup';
import Contact11 from './sprotweb/contact1';


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Main45 />}> 
          <Route index element={<Body />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/kabbadi" element={<Kabbadi />} />
          <Route path="/football" element={<Football />} />
          <Route path="/shopping" element={<Shop />} />
          <Route path="/contactpage" element={<Contact11/>}/>
          <Route path='/sportpage' element={<SportsPage/>}/>
          <Route path="/news" element={<Newspage />} />
          <Route path="/login1" element={<Login1/>}></Route>
          <Route path="/singup1" element={<Singup1/>}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

