//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import MainGoal from './components/MainGoal'
import CourseGoal from './components/CourseGoal.jsx'
import OurBtn from './components/OurBtn.jsx'
import { useState } from 'react'
import Discount from './components/Discount.jsx'
import {EXAMPLES, CORE_CONCEPTS} from './data/coreConcepts.js'
import Delete from './components/Delete.jsx'
import ComponentsCard from './components/ComponentsCard.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ShoppingList from './pages/ShoppingList.jsx'
import Contacts from './pages/Contacts.jsx'
import LayoutMaster from './components/layoutMaster.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AvailablePlaces from './pages/PlacesIndex.jsx'

const router = createBrowserRouter([
  {path: '/', 
    element: <LayoutMaster/>,
    errorElement: <ErrorPage/>,
    children:[
      {path: '/', element: <HomePage/>},
      {path: '/shopping-list', element: <ShoppingList/>},
      {path: '/contacts/:name', element: <Contacts/>},
      {path: '/places', element: <AvailablePlaces/>},
    ]
  },
 
]);


function App() {

  return <RouterProvider router={router}/>;
  // const [count, setCount] = useState(0)

  const [content, setContent] = useState('components');

  function sayHello(myContent){
    setContent(myContent);
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
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <CourseGoal/>
      <CourseGoal title='react'/>
      <menu>
      <OurBtn active={content == 'jsx'}  functionForClick={() =>sayHello('jsx')}>jsx</OurBtn>
      <OurBtn active={content == 'props'} functionForClick={() =>sayHello('props')}>props</OurBtn>
      <OurBtn active={content == 'state'} functionForClick={() =>sayHello('state')}>state</OurBtn>
      <div>
        <p>{EXAMPLES[content].title}</p>
      <p>{EXAMPLES[content].description}</p>
      </div>
      </menu>
      <Discount/>
      <Delete/>
      <div>
      {CORE_CONCEPTS.map((item) =>
       <ComponentsCard key={item.title} {...item}/>
      )}
      
     
      </div>
    </>
  )
}

export default App
