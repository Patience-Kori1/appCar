import React from 'react';

function Wrapper ({children} ) {
    return (
        <div style = {{backgroundColor: 'pink', width: '400px', margin:'5px auto', padding:'10px'}}>
            {/* <h4> Composant 4 : Wrapper</h4> */}
            {children}
        </div>
    )
}

export default Wrapper