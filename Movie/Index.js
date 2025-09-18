
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



let key="9f6290d6cda9a36a63755fadee71f83d"
let city="jabalpur"
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).
then((data)=>{
    return data.json()
}).then((res)=>{
    console.log(res);
    
})
