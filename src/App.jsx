import React from 'react'


import Nabvar from './components/Nabvar';
import Home from './components/Home';
import socialLinks from './components/socialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Portfolio1 from './components/portfolio1';
import Skill from './components/Skill';

 import Connect  from './components/Connect';
import Basics from './components/Basics';


function App() {

  return (
    <div>
     
    
  {/* <Nabvar /> */}
  <Home />
  <socialLinks />
  <About />
  <Portfolio />
  <Portfolio1 />
  <Basics />
  <Skill />

  <Connect />


    </div>
  )
}

export default App
