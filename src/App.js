import React from 'react'; 
import Header from './components/Header'; 
import Navbar from './components/Navbar'; 
import Content from './components/Content'; 
import Footer from './components/Footer'; 

import './App.css';

const App = () => {
   return (
     <div className="app-wrapper">
       <Header />
       <Navbar />
       <Content />
       <Footer />
     </div>
   )
}


export default App;