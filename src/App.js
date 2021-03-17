import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Equipment from './components/Equipment'
import ModelInfo from './components/ModelInfo'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      equipment: []

    }
  }
  async getEquipment() {
    // const response = await axios.get('http://localhost:3000/api/equipment/');
    const response = await axios.get('https://marc-finalproject-backend-app.herokuapp.com/api/equipment/')
    this.setState({ equipment: response.data.allEquipment });
  }

  async componentDidMount() {
    await this.getEquipment()
  }

  addEquip = async (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const model = event.target.model.value
    await axios.post('http://localhost:3000/api/equipment', { name, model })
    await this.getEquipment()
  }

  updateOil = async (event) => {
    event.preventDefault()
    const hoursChanged = event.target.oil.value
    const id = event.target.id.value
    await axios.put(`http://localhost:3000/api/equipment/${id}`, {
      hoursOilChanged: hoursChanged
    })
    await this.getEquipment()
  }

  updateFuel = async (event) => {
    event.preventDefault()
    const hoursChanged = event.target.fuel.value
    const id = event.target.id.value
    await axios.put(`http://localhost:3000/api/equipment/${id}`, {
      hoursFuelFilterChanged: hoursChanged
    })
    await this.getEquipment()
  }

  updateHydro = async (event) => {
    event.preventDefault()
    const hoursChanged = event.target.hydro.value
    const id = event.target.id.value
    await axios.put(`http://localhost:3000/api/equipment/${id}`, {
      hoursHydraulicOilChanged: hoursChanged
    })
    await this.getEquipment()
  }

  deleteEquip = async (event) => {
    event.preventDefault()
    const id = event.target.id.value
    await axios.delete(`http://localhost:3000/api/equipment/${id}`)
    await this.getEquipment()
  }


  render() {

    // console.log(this.state)

    return (

      <body>
        <div className="gradient">
          <div className="App">

            <header className="App-header">
              <h1>Equipment Maintenance Tracking App</h1>
            </header>

            <nav className="Nav">
              <Link className="Nav" to='/equipment'>Equipment List</Link><br />
              <Link className="Nav" to='/'>Home</Link>
            </nav>

            <Switch>
              <Route exact path="/equipment" render={routerProps => <Equipment {...routerProps} equipment={this.state} createEquip={this.addEquip}
              />
              } />

              <Route path="/Model_info/:id" render={routerProps => <ModelInfo {...routerProps} {...this.state}
                updateOilHours={this.updateOil} updateFuel={this.updateFuel} updateHydro={this.updateHydro}
                deleteEquip={this.deleteEquip} />}
              />
            </Switch>
          </div>

          <div className="foot">
            <footer className="Footer">
              <a className="Ftext" href="mailto:m.t.rivers@hotmail.com">Contact Me</a>
              <h3 className="Ftext">© 2021 Marc Rivers. All Rights reserved</h3>
            </footer>
          </div>

        </div>
      </body>

    );
  }
}


export default App;
