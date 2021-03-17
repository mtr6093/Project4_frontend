import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './Equipment.css';

class Equipment extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log(this.props)
        console.log(this.props.equipment)
        const allEquip = this.props.equipment.equipment.map(item => {

            return (
                <div className="eqb">
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
        // console.log(allEquip)



        return (

            <div className='container'>

                <div className="creation">
                    <h3> Enter information below to track a new piece of equipment
                <form onSubmit={(e) => this.props.createEquip(e)}>
                            <input className="Type" placeholder='Type(i.e.Tractor, Combine, etc)' name="name" /><br />
                            <input className="Model" placeholder='model number' name='model' /><br />
                            <input type='submit' value='Create New Equipment Entry' />
                        </form> <br />
                    </h3>
                </div>

                <h2 className="Title"> List of avaialable equipment</h2>
                <div className="EQLI">
                    {allEquip}
                </div>

            </div>


        );
    }
}




export default Equipment;