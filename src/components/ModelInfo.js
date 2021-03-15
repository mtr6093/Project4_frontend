import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

class ModelInfo extends Component {
    constructor(props) {
        super(props);
    }


render() {
    console.log(this.props)
    console.log(this.props.equipment)
    console.log(this.props.match.params)

    let findModel = this.props.equipment.find(item => item.id ==this.props.match.params.id)
    console.log(findModel)

    return(
        <div>
        <div className="Model-ID">
            <h2>Previous service information for: {findModel.model}</h2>
        </div>
        <div className="Hours">
            <h3>Hours of last oil change: {findModel.hoursOilChanged}</h3>
            <h3>Hours of last fuel filter change: {findModel.hoursFuelFilterChanged}</h3>
            <h3>Hours of last Hydraulic filter chnge: {findModel.hoursHydraulicOilChanged}</h3>

        </div>
        </div>
    )
    }
}
    







export default ModelInfo;