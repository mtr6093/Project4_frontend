import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './ModelInfo.css';

class ModelInfo extends Component {
    constructor(props) {
        super(props);
    }


render() {
    console.log(this.props)
    console.log(this.props.equipment)
    console.log(this.props.match.params)
    // if (this.props.match.params=="undefined"){
    //     <Redirect to="http://localhost:3001/equipment" />

    //     console.log("broken")
    // }
    let findModel = this.props.equipment.find(item => item.id ==this.props.match.params.id)
    console.log(findModel)
    
    
    

    return(
        <div>
        <div className="Model-ID">
            <h2>Previous service information for: {findModel.model}<br /><br /><br /></h2>
        </div>
        <div className="info">
            <form onSubmit={(e)=> this.props.updateOilHours(e)}>
                Engine hours at time of last oil change:    {findModel.hoursOilChanged} <br /><input className="updater" type="integer" name = "oil" 
                placeholder="Enter New Hours" />
                <input type="hidden" name="id" value={findModel.id} />
                <input type="submit" value="Update"/>
            </form><br /><br />

            <form onSubmit={(e)=> this.props.updateFuel(e)}>
            Engine hours at time of last fuel filter change: {findModel.hoursFuelFilterChanged} <br /><input className="updater" type="integer" name = "fuel" 
                placeholder="Enter New Hours" />
                <input type="hidden" name="id" value={findModel.id} />
                <input type="submit" value="Update"/>
            </form><br /><br />

            <form onSubmit={(e)=> this.props.updateHydro(e)}>
            Engine hours at time of last Hydraulic filter change: {findModel.hoursHydraulicOilChanged} <br /><input className="updater" type="integer" name = "hydro" 
                placeholder="Enter New Hours"/>
                <input type="hidden" name="id" value={findModel.id} />
                <input type="submit" value="Update"/>
            </form>
            <br /><br /><br />

        </div>
        <div className="Delete">
            <form onSubmit={(e)=> this.props.deleteEquip(e) && this.props.history.push("/equipment")}  >
                <input type="hidden" name="id" value={findModel.id} />
                
                <input type="submit" value="Delete Equipment"/><h3> ⚠️ This will PERMANENTLY remove this piece of equipment. There is no restoring a piece of equipment after deletion.</h3>
            </form>
        </div>
        </div>
    )}
    
}
    







export default ModelInfo;