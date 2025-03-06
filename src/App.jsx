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

let content = 'Ainda não seleccionaste nada';

function sayHello(myContent){
  content = myContent;
}


function App() {
  // const [count, setCount] = useState(0)

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
      <OurBtn onSelect={() =>sayHello('js')}>JS</OurBtn>
      <OurBtn onSelect={() =>sayHello('react')}>React</OurBtn>
      <div>{content}</div>
      </menu>
    </>
  )
}

export default App
