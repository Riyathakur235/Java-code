import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//npm import React, { useState } from 'react'

// const App = () => {
//     let [input,SetInput]=   useState({
//       name:"",
//       email:"",
//       passWord:""
//     })
//     function fun1(e){
//       let  {name,value}=    e.target
//       SetInput({...input,[name]:value})
//       console.log(input);
      
      
      
//       // console.log(e.target);
      
//     }
//   return (
//     <div>
//       {/* <h2>{input}</h2> */}
//       <input   name='name' value ={input.name} onChange={fun1} type='text' placeholder='Name'/>
//       <br></br>
//       <br></br>

//       <input  type='email' name="email" onChange={fun1}  value={input.email} placeholder='email'/>
//       <br></br>
//       <br></br>
//       <input  name='passWord' value={input.passWord}  onChange={fun1} type='text' placeholder='passWord'/>
   


//     </div>
//   )
// }

// export default App





// let obj={
//   id:1,
//   name:"ankit"
// }
// let {id}=obj


import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
// http://localhost:5173/
const App = () => {
  return (
    <div>
      {/* <SignUp/>
      <Login/> */}
      <Routes>
        <Route   path='/'    element={<Home/>}/>
        <Route   path='/signup'    element={<SignUp/>}/>
        <Route   path='/login'    element={<Login/>}/>


      </Routes>
    </div>
  )
}




export default App
