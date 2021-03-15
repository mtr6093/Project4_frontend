import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
// import { response } from 'express';
import Equipment from './components/Equipment'




class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      equipment:[]
  
    }
  }
  async getEquipment() {
    const response = await axios.get('http://localhost:3000/api/equipment/');
    this.setState({ equipment: response.data.allEquipment});

  }
  async componentDidMount() {
    await this.getEquipment()
  }
  // componentDidMount=()=>{
  //   axios.get('http://localhost:3000/api/equipment/', {     
  //   headers: {
  //     Accept: 'application/json'
  //   }
  // })
  //   .then(response =>{
      
  //     this.setState({
  //       equipment:response.data.allEquipment
  //     })
  //   })
  // }


render(){
   
  console.log(this.state)
   
 return (
   <div className="App">
     <header className="App-header">
       <p>TEST TEXT</p>
       <Route exact path="/equipment" render={routerProps => <Equipment {...routerProps} equipment={this.state} 
          />
          }/>
       
     </header>
   </div>
 );
 }
}


export default App;
