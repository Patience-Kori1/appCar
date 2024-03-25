import React, { Component}  from 'react';
import Car from './Cars.js';

class MyCars extends Component {
    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <p> ceci est un test</p>
                <Car></Car>
            </div>
            
        )
    }
}
export default MyCars;