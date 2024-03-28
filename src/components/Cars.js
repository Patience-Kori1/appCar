import React from "react";
import Wrapper from './Wrapper.js';

const Car = ({children, color}) => {

    const colorInfo = color ? (<p>couleur: {color } </p>) : (<p>Couleur : néant</p>);

    return children ? (
      <Wrapper>
                <p> Marque : {children} </p>
                {colorInfo}
      </Wrapper>
     ) :  (<p> Pas de data ! </p>)
   

   
}


export default Car ;
