import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

class Equipment extends Component {
    constructor(props) {
        super(props);
    }


render() {
    console.log(this.props.equipment)
    const allEquip = this.props.equipment.equipment.map(item => {
        
        return(
            <div>
        <p>
            <Link to={`/model_info/${item.id}`}>{item.model}</Link>
        </p>
        </div>
        );
   
    })
    console.log(allEquip)
        
      
      
    return (
        
        <div>
            
         <div className='container'>
          
            
        {allEquip}
    
        </div>
        
        </div>


        );
    }
}




export default Equipment;