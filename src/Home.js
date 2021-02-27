import React from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css'

export default function Home() {
  
  const history = useHistory()

  const routeToPizza = () => {
    console.log(history);
    history.push('/pizza')
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80
        '
        alt=''
      />
      <button
        onClick={routeToPizza}
        className='md-button shop-button'
      >
        Order now!
      </button>
    </div>
  )
}
 