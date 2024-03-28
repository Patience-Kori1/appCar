import React, { Component}  from 'react';
import Car from './Cars.js';
import Wrapper from './Wrapper.js';
import MyHeader from './MyHeader.js';

class MyCars extends Component {

    state = { 
        cars : [ "Ford",  "Mercedes", "Peugeot" ]
      };
    
    render() {
    
        return (
            <div style = {{padding:'100px'}} >
            <Wrapper>
            <MyHeader myStyle = {this.props.color}>
                {this.props.title}
            
            </MyHeader>
            </Wrapper>
             
                <Car color="red" > { this.state.cars[0]} </Car>
                <Car color ="black" > { this.state.cars[1]} </Car>
                <Car color ="green" > { this.state.cars[2]} </Car>
                
            </div>
            
        )
    }
}
export default MyCars;