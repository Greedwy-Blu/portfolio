import { useState } from 'react';
import { Navbar } from './components/Navbar'
import { Header } from './components/About'
import { Footer } from './components/Footer'
import { FrontEnd } from './components/FrontEnd'
import { Scroll } from './components/scroll'
import { BackEnd } from './components/BackEnd';
import { Techs } from './components/Techs';

function App() {

  return (
    <div>



<Navbar/>
<Header/>


<Scroll/>


<FrontEnd/>
<BackEnd/>
<Techs/>
<Footer/>


    </div>
  )
}

export default App
