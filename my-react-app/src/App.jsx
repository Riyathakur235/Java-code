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

//recipes
// import React, { useContext } from 'react'
// import Home from'./Home'
// import { Route,Routes } from 'react-router-dom'
// import AddToCart from './AddToCart'
// import OnePage from './OnePage'

// const App = ()=>{
//   return(
//     <div>
      
//        <Routes>
//         <Route   path='/'    element={<Home/>} />

//         <Route   path='/cart'    element={<AddToCart />}/>
//         <Route path='/onepage/:id' element={<OnePage/>}></Route>

//       </Routes>
//     </div>
//   )
// }

//todo
// import React, { useState } from 'react'

// const App = () => {
//     let[input,SetInput] = useState('')
//     let[data,SetData] = useState ([])
//     function fun1(e){
//        SetInput(e.target.value)

//     }

//     function btn(){
//         SetData({...data,input})
//     }
//   return (
//     <div>
//       {<h2>{input}</h2>}
//       {
//         data.map((a)=>{
//           return(<>
//           <li>{a}</li>
//           </>)
//         })
//       }

//         <input onChange={fun1} />
//         <button onClick={btn}>click</button>
//     </div>
//   )
// }

//stopwatch 

// import React, {useEffect, useState } from 'react'

// const App = () => {
//   const[time,SetTime]=useState(0)
//   const[isRunning,SetIsRunning]=useState(false)
  
// useEffect(()=>{
//   let timer;
//   if(isRunning){
//     timer=setInterval(()=>{
//       SetTime((prev)=>prev+1)
//     },100)
//   } else {
//     clearInterval(timer);
//   }
//   return()=>clearInterval(timer)
// },[isRunning])

// const formatTime=(time)=>{
//   const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
//   };

//   return (
//     <div style={{textAlign:"center",marginTop:"50px"}}>
//       <h1>Stopwatch</h1>
//       <h2>{formatTime(time)}</h2>
//       <button onClick={()=>SetIsRunning(true)} >start</button>
//       <button onClick={()=>SetIsRunning(false)}>Stop</button>
//       <button onClick={()=>SetIsRunning(0)}>Reset</button>
//     </div>
//   )
// }
   

// 
// const App = () => {
  
//   function reducer(count,action){
//     if(action.type=="++"){
//       return count+1;
//     }else if(action.type=="--"){
//       return count-1;
//   }else if(action.type=="reset"){
//       return 0
//   }else
//   return count 
//  }
//   let[count,dispatch]=useReducer(reducer,0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>dispatch({type:"++"})}>++</button>
//       <button onClick={()=>dispatch({type:"--"})}>--</button>
//       <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
//     </div>
//   )

// }


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
export default App

