import React, { Component}  from 'react';
import Car from './Cars.js';

class MyCars extends Component {
    render() {
        return (
            <div style = {{padding:'100px'}} >
                    <h1 style = {{backgroundColor: 'pink', width: '400px', margin:'5px auto', padding:'10px'}}> Ma liste de voiture</h1>
             
                <Car color="red">Ford </Car>
                <Car color ="black">Mercedes</Car>
                <Car color ="green">Peugeot</Car>
            </div>
            
        )
    }
}
export default MyCars;