import { useState } from 'react'
import Home from "./Home"


// const App = () =>{
//     console.log("hii")
//     let {state,Setstate}= useState("red")
//     function funn1(){
//        // SetState(state+1)
//        if(state=="red"){
//         Setstate("gold")
//        }else{
//         Setstate("red")
//        }
//     }
//     return(
//         <div style={{backgroundColor:state}}>
//          <h2> {state}</h2>
//         <button onClick={fun1}>click</button>

//         </div>
//     )
// }
const App =()=>{
    let [data,SetData]= useState({
        name:"",
        email:"",
        passWord:""
    })
    function fun1(e){
        let {name,value}=e.target 
      SetInput({...input,[name]:value})
      console.log(input);   
     }
    return(
        <div>
            <input type ="text" onChange={fun1} name='name' value={data.name}></input>
            <br></br>
            <br></br>
            <input type='email' onChange={fun1} name='email ' value={data.email} ></input>
            <br></br>
            <br></br>
            <input type='passWord' onChange={fun1} name='passWord ' value={data.passWord} ></input>
        </div>
    )
}


export default App
