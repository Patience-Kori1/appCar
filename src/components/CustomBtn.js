import React from 'react';



const CustomBtn = ({children, btnStyle, handleClick}) => {
    const customBtn = {
        backgroundColor: "grey",
        border: "none",
        color: "#fff",
        fontSize: "19px",
        padding: "15px 30px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: "7px",
        display: "block",
        margin: "5px auto"
    }

    return (
         <div style = {{backgroundColor: 'rgb(164, 224, 206)', width: '700px', margin:'5px auto', padding:'10px', marginTop: '50px'}}>
            <button 
                onClick={handleClick}
                style= {{...customBtn, ...btnStyle}}
                >
                {children} 
            </button>

        </div>
    )
}
export default CustomBtn;