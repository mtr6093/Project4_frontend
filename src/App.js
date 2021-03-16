import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
// import { response } from 'express';
import Equipment from './components/Equipment'
import ModelInfo from './components/ModelInfo'



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

  addEquip = async(event)=>{
    event.preventDefault()
    const name = event.target.name.value
    const model = event.target.model.value
  
    await axios.post('http://localhost:3000/api/equipment', {name, model})
    await this.getEquipment()
  }

  updateOil = async(event)=>{
    event.preventDefault()
    console.log(event.target.oil.value)
    const hoursChanged = event.target.oil.value
    console.log(event.target.id.value)
    const id=event.target.id.value
    

    await axios.put(`http://localhost:3000/api/equipment/${id}`, {
      hoursOilChanged: hoursChanged})
    await this.getEquipment()
  }
  updateFuel = async(event)=>{
    event.preventDefault()
    console.log(event.target.fuel.value)
    const hoursChanged = event.target.fuel.value
    console.log(event.target.id.value)
    const id=event.target.id.value
    

    await axios.put(`http://localhost:3000/api/equipment/${id}`, {
      hoursFuelFilterChanged: hoursChanged})
    await this.getEquipment()
  }
  deleteEquip=async(event)=>{
    const deleteE=event.target
    await axios.delete(`http://localhost:3000/api/equipment/:id`)
    await this.getEquipment()
  }


render(){
   
  console.log(this.state)
   
 return (
   <div className="App">
      <header className="App-header">
       <h1>Equipment Maintenance Tracking App</h1>
      </header>
      <nav>
      <Link to='/equipment'>Equipment List</Link><br />
      <Link to='/'>Home</Link>
      </nav>

       <Route exact path="/equipment" render={routerProps => <Equipment {...routerProps} equipment={this.state} createEquip={this.addEquip}
          />
          }/>
      <Route path="/Model_info/:id" render={routerProps => <ModelInfo {...routerProps} {...this.state} 
      updateOilHours={this.updateOil} updateFuel={this.updateFuel}/>}
      />
       
     
   </div>
 );
 }
}


export default App;
