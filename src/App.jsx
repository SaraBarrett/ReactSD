//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import MainGoal from './components/MainGoal'
import {userData} from './data/data.js';
import CourseGoal from './components/CourseGoal.jsx'
import OurBtn from './components/OurBtn.jsx'
import { useState } from 'react'
import Discount from './components/Discount.jsx'
import {EXAMPLES} from './data/coreConcepts.js'

function App() {
  // const [count, setCount] = useState(0)

  const [content, setContent] = useState('components');

  function sayHello(myContent){
    setContent(myContent);
    console.log(myContent)
  }

  return (
    <>
    <Header/>
    <MainGoal myGoal='fazer dinheiro'/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
         
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card name={userData.name}/>
      <Card name='Márcia' title='coordenadora'/>
      <Card name='Bruno' title='coordenador pedagógico'/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <CourseGoal/>
      <CourseGoal title='react'/>

      <menu>
      <OurBtn functionForClick={() =>sayHello('jsx')}>jsx</OurBtn>
      <OurBtn functionForClick={() =>sayHello('props')}>props</OurBtn>
      <OurBtn functionForClick={() =>sayHello('state')}>state</OurBtn>
      <div>
        <p>{EXAMPLES[content].title}</p>
      <p>{EXAMPLES[content].description}</p>
      </div>
      </menu>


      <Discount/>
    </>
  )
}

export default App
