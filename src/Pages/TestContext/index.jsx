import React,{useState} from 'react'
import './style.css'

import { TestContext1Ex,TestContext2Ex,TestContext3Ex } from '../../Components'


const Index = () => {

  const [count,setCount]=useState(0)

  const artir = ()=>setCount(count+1)
  const azalt = ()=>setCount(count-1)
  return (
    <div className='Test'>
      <h1>TestContext Count{count}</h1>
      <div>
        <button onClick={azalt}>azalt</button>
        <button onClick={artir}>artir</button>
      </div>
      <hr/>
      <TestContext1Ex count ={count}/>
      <hr/>
      <TestContext2Ex count ={count}/>
      <hr/>
      <TestContext3Ex count ={count}/>
      <hr/>
     
    </div>
  )
}

export default Index