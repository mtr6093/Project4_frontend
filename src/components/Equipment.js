import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

class Equipment extends Component {
    constructor(props) {
        super(props);
    }


render() {
    console.log(this.props.equipment)
    const allEquip = this.props.equipment.equipment.map((equipmentElement, index)=>{
        return {equipmentElement.model}
        // return <Link to={`/details/${equimpent.id}`}><h4 class>{equimpent.model}</h4></Link>
      })
    return (
        
        <div>
            
         {/* <div className='container'>
          
            
        {allArtists}
    
        </div>
        <h3>Create a New Artist</h3>
        <form onSubmit={(e)=>this.props.addArtist(e)}>
          <input type="text" name="name" />
          <input type="submit" value="Add Artist" />
        </form> */}
        </div>


        );
    }
}




export default Equipment;