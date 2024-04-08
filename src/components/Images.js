import React from 'react';

const message = "Mr Musk";
const messUser = "Mr Zuk"
const Images =() => {
  return (
    <div>
      <h2>Image</h2>
      <img src={require('./images/musk.jpeg')} alt={message} width="500" height= "500" />
      <img src={require('./images/zukeberg.jpeg')} alt={messUser} width="80" height= "80" />
    </div>
  )
}

export default Images
