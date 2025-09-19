
// let btn=   document.querySelector("button")
// let inp=   document.querySelector("input")
// btn.addEventListener("click",()=>{
//     let searchText=inp.value
// fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`).
// then((data)=>{
//     return data.json()

// }).then((res)=>{
//     console.log(res);
//     show(res)
    
// })

// })




// function show(res){
//    let img=  document.querySelector("img")
// //    console.log(res[0].show.image.medium);
//   let link=   res[0].show.image.medium
// img.setAttribute("src",link)
   

// }



// let key="9f6290d6cda9a36a63755fadee71f83d"
// let city="jabalpur"
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).
// then((data)=>{
//     return data.json()
// }).then((res)=>{
//     console.log(res);
    
// })



// let arr=[1,2,-3,4,5]
// let k=3
// let n=arr.length
// let vSum=0;
// for(let i=0;i<k;i++){
//     vSum+=arr[i]
// }
// let maxSum=vSum;
// for(let i=k;i<n;i++){
//     vSum=vSum+arr[i]-arr[i-k]
//  if(vSum>maxSum){
//  maxSum=vSum
//   }
// }
// console.log(maxSum);


//promise
// let p1 = new Promise((res,rej)=>{
//     res()
// })
// let p2 = new Promise((res,rej)=>{
//     rej()
// })
// let p3 = new Promise((res,rej)=>{
//     res()
// })
// //   Promise.all([p1,p2,p3]).then((res)=>{
// //     console.log(res);
    
// //   })
// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
    
// })

import a from './Home.js';
import { firstname,sum} from './Home.js';
console.log(a);
console.log(firstname);
 sum()