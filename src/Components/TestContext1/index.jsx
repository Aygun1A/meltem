import React, {useContext}from 'react'
import './style.css'
import { CountContext } from '../../Context'


const Index = () => {
  
const {count,azalt,artir}=useContext(CountContext)
  
  return (
    <div>

      <h3>TestContext 1 count:{count}</h3>

      <div>
        <button onClick={azalt}>azalt</button>
        <button onClick={artir}>artir</button>
      </div>
    </div>
    
  )
}

export default Index