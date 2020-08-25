import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import Banner from './Components/banner';
import './App.css';
import BestServices from './Components/BestServices';

class App extends Component{
render(){
return (
<div>
  <Navbar />
  <Banner />
  <h3 style={{alignContent: 'center'}}>Best Services</h3>
  <BestServices />
  <hr />
  <Footer />
</div>

);
}
 }
export default App;
