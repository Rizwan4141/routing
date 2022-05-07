import Home from './Components/Page/Home';
import React from 'react';
import About from './Components/Page/About';
import Form from './Components/Page/Form';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

const App=()=> {
 
  return (
    <div className="App">
     < BrowserRouter>
     <Link to="/">About</Link>
     <Link to="/home">Home</Link>
     <Link to="/form">Form</Link>
     <Routes>
     <Route path='/' location="/rasistation"  element = {<About/>}/>
     <Route path='/home' element = {<Home/>}/>
     <Route path='/form' element = {<Form/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
