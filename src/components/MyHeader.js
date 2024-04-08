import React from 'react';

const MyHeader = ({myStyle, children}) =>
<div>
<h4> Composant : My header </h4>
<h1 style = {{ color: myStyle}}> { children } </h1>

</div>

export default MyHeader