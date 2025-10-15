//import { useReducer, useState } from 'react'
// import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
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

//Api
// import React,{useState} from 'react'
// import SignUp from './SignUp'
// import Login from './Login'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import AddToCart from './AddToCart'
// // http://localhost:5173/
// const App = () => {
//   let [apiData,SetData]=     useState([])
//   let [filteredddData,SetFilteredddData]=     useState([])

//     let [cart,SetCart]=    useState([])
//     console.log(cart,"h=dekhooooo");
//   return (
//     <div>
//       {/* <SignUp/>
//       <Login/> */}
//       <Routes>
//         <Route   path='/'    element={<Home cart={cart} SetCart={SetCart} apiData={apiData} SetData={SetData} filteredddData={filteredddData}    SetFilteredddData={SetFilteredddData}  />} />
//         <Route   path='/signup'    element={<SignUp/>}/>
//         <Route   path='/login'    element={<Login/>}/>
//         <Route   path='/cart'    element={<AddToCart cart={cart}/>}/>


//       </Routes>
//     </div>
//   )
// }
// export default App



// const App = ()=>{
//   function reduser (count,action){
//    if(action.type=="inc"){
//     return count+1;
//    }
//    else if(action.type=="d"){
//     return count-1;
//    }else{
//     return count;
//    }
//   }
//   let[count,dispatch]= useReducer(reduser,0)
//   return(
//     <div>
//       <h2></h2> 
//       <button onClick={()=>dispatch({type:"inc"})}>++</button>
//       <button onClick={()=>dispatch({type:"d"})}>--</button>
//     </div>
//   )
// }

//colour
// const App=()=>{
//   function reduser(color,action){
//     if(action.type=="r"){
//       return 'red'
//     }
//     else if(action.type='g'){
//       return 'green'
//     }
//   }
//   let[color,dispatch]=useReducer(reduser,'white')
//   return(
//     <div style={{backgroundColor}}>
//        <button onClick={()=>dispatch({type:'r'})}>red</button>
//         <button onClick={()=>dispatch({type:'r'})}>green</button>
//     </div>
//   )


// import React from 'react'
// import Home from './Home'
// import React from 'react'
// const App =()=>{
//   let user="hello"
//   return(
//     <div>
//       <Home data={user}/>
//     </div>
//   )
// }
//export default App


import React from 'react'
import Home from'./Home'

const App = ()=>{
  return(
    <div>
      <Home/>
    </div>
  )
}
export default App