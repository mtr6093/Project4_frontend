import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

class Equipment extends Component {
    constructor(props) {
        super(props);
    }


render() {
    console.log(this.props)
    console.log(this.props.equipment)
    const allEquip = this.props.equipment.equipment.map(item => {
        
        return(
            <div>
               
                <div className="equipment">
                <ul>
                    <li>
                        <Link to={`/model_info/${item.id}`}>{item.model}</Link>
                    </li>
                </ul>
                </div>
                
            </div>
        );
   
    })
    console.log(allEquip)
        
      
      
    return (
        
        <div className='container'>
        <div className="creation">
            <h3> Enter information below to enter a new piece of equipment
                <form onSubmit={(e) => this.props.createEquip(e)}>
                    <input placeholder='Type(i.e.Tractor)' name="name"/>
                    <input placeholder='model number' name='model'/>
                    <input type='submit' value='create equipment'/>
                </form> <br />
            </h3>
        </div>
        
        <div className="EQLI">
            <h2> List of avaialable equipment</h2>
            {allEquip}
        </div>
        
        </div>


        );
    }
}




export default Equipment;