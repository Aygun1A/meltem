import React,{useState} from 'react'
import './style.css'



const Index = (props) => {
  const [count,setCount]=useState(props.count)

  const artir = ()=>setCount(count+1)
  const azalt = ()=>setCount(count-1)


  return (
    
    <div>

      <h5>TestContext3Ex count:{count}</h5>
    
    <div>
      <button onClick={azalt}>azalt</button>
      <button onClick={artir}>artir</button>
    </div>
  </div>
  )
}

export default Index