import React,{useContext} from 'react'
import './style.css'
import { CountContext } from '../../Context'
const Index = () => {


  
  const {count,azalt,artir}=useContext(CountContext)

  
  
  return (
    <div>

      <h5>TestContext 3 count:{count}</h5>

      <div>
        <button onClick={azalt}>azalt</button>
        <button onClick={artir}>artir</button>
      </div>
    </div>

  )
}

export default Index