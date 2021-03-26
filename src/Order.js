import React from 'react'


function Order({ details }) {
    if (!details) {
      return <h3>Working fetching your Order&apos;s details...</h3>
    }
  
    return (
      <div className='order container'>
        <h2>{details.name}</h2>
        <p>Pizza Size: {details.size}</p>
      </div>
    )
  }
  
  export default Order
  