import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import  Greeting from './components/Greeting.jsx'
import Student from './components/Student.jsx'

function App() {


  return (
    <>
      <Greeting/>
      <Student name={'Arsh Rana'} course={'cse'} marks={90}/>
      <Student name={'Arsh Rana'} course={'cse'} marks={90}/>
      <Student name={'Arsh Rana'} course={'cse'} marks={90}/>
    </>
  )
};

export default App
