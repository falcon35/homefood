import React, { Component } from 'react'
import {Navbar,NavbarBrand} from 'reactstrap'
import ProductList from "./components/ProductList"
import {FOODS} from  './shared/data'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       foods:FOODS
    }
  }
  
  render(){
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
          <NavbarBrand href="/">Car Rent</NavbarBrand>
          </div>
        </Navbar>
       
          <ProductList foods={this.state.foods}/>
        
      </div>
    );
  }
  
}

export default App;
