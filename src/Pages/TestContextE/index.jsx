import React,{useState} from 'react'
import './style.css'

import { TestContext1,TestContext2,TestContext3 } from '../../Components'

import {CountContext} from '../../Context'

const Index = () => {

  const [count,setCount]=useState(0)

  const artir = ()=>setCount(count+1)
  const azalt = ()=>setCount(count-1)
  return (
    <div className='Test'>

        <CountContext.Provider value={{count,artir,azalt}}>

      <h1>TestContext Count{count}</h1>
      <div>
        <button onClick={azalt}>azalt</button>
        <button onClick={artir}>artir</button>
      </div>
      <hr/>   
      <TestContext1/>
      <hr/>
      <TestContext2/>
      <hr/>
      <TestContext3 />
      <hr/>
        </CountContext.Provider>
     
    </div>
  )
}

export default Index