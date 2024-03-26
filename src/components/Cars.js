import React from "react";

const Car = ({children, color}) => {
    // console.log(props.children);
    return (
        <div style = {{backgroundColor: 'pink', width: '400px', margin:'5px auto', padding:'10px'}}>
            <p> Marque : {children} </p>
            <p> Couleur : {color} </p>
        </div>
      
    )
}

export default Car;
