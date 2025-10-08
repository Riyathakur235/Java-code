import React, { useEffect, useState } from "react"
 import './App.css'
// const Home =()=>{
//     let {count,SetCount} = useState()
//     //let data= new Data().toLocaleTimeString()
//    // console.log(data)
// setInterval(()=>{
//     SetCount(new Date().toLocalTimeString())
// })
// return(

//     <div>
//         <h2>{count}</h2>
//         <button onClick={()=>SetCount(count+1)}>++</button>
//         <button onClick={()=>SetCount(count-1)}>--</button>
//         <button onClick={()=>SetCount(0)}>reset</button>
        
//     </div>
// )
// }
// const Home =()=>{
//     let[ApiData,SetApiData]=useState([])
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res)=>{
//             return res.json()
//         }).then((data)=>{
//             console.log(data);
//         })
//     },[])
//    return(
//     <div>
//         {
//             ApiData.map((a)=>{
//                 return(<>
//                 <p>{a.id}</p>
//                 <h2>{a.title}</h2>
//                 </>)
//             })
//         }
//     </div>
//    ) 
// }


