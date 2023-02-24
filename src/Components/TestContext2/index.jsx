import React,{useContext} from 'react'
import './style.css'
import { CountContext } from '../../Context'




const Index = () => {

  const {count,azalt,artir}=useContext(CountContext)

   
  
  return (
    <div>

      <h4>TestContext 2 count:{count}</h4>
      <div>
        <button onClick={azalt}>azalt</button>
        <button onClick={artir}>artir</button>
      </div>
    </div>
  )
}

export default Index