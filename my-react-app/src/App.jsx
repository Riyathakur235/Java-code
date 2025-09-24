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
    return(
        <div>
            <Home/>
        </div>
    )
}


export default App
