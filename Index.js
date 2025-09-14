// console.log(document);

//    let h1= document.getElementById("one");
//    console.log(h1);

// let h1=document.querySelector(".two")
// console.log(h1)

// let h1=document.getElementById("one")
// h1.style.color="red
  
// let h1=document.getElementsByClassName("two")
// h1[0].style.color='red'

// for(let i of h1){
//     i.style.color='red'
// }

//changetext
// let h1=document.querySelector("#one")
// h1.innerText="hii"
//console.log(h1.innerText())
// document.getElementByTagName

// let a=document.querySelector("a")
// a.setAttribute("href","http://filpkart.com")
// console.log(a);
//  const arr=[
//    " https://plus.unsplash.com/premium_photo-1757260019168-606a272c7d9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
//    "https://images.unsplash.com/photo-1755397271926-3681d11c16e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3Dsr",
//    "https://images.unsplash.com/photo-1756758005190-92941d91b8b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
//    "https://plus.unsplash.com/premium_photo-1698342931398-84352ce5ca20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D"
//  ]
// const imageEl=document.querySelector("img")

//  let num=0;
// setInterval(function(){
//     imageEl.setAttribute("src",arr[num]);
//     num=(num+1)%arr.length;
// //num=num+1;
// },2000);

//   let body=  document.querySelector("body")
// function fun1(){
//  // console.log("hello");
//   body.style.background="red"
  
// }
  
//event apply karna 
// let btn=document.querySelector("button")
// let body=document.querySelector("body")

// btn.onclick=function(){
//   console.log("hello")
//   body.style.backgroundColor='red';
// }

// btn.addEventListener("click",()=>{
//   body.style.backgroundColor="red";
// })


//  let inp=document.querySelector("input")
// let h2 =document.querySelector("h2")
// /inp.addEventListener("input",(e)=>{
//   console.log(e.target.value);
//   h2.innerText=e.target.value
//  })

//local storage
//login show
// let formEl=document.querySelector("form")
// formEl.addEventListener("submit",(e)=>{
//   e.preventDefault()
//  let data={
//   name:formEl[0].value,
//   email:formEl[1].value,
//   pass:formEl[2].value
//  }
//  console.log(data);
//  localStorage.setItem("formData",JSON.stringify(data))
// localStorage.removeItem("fromData")
  // console.log(formEl[0].value);
  // console.log(formEl[1].value);
  // console.log(formEl[2].value);
  
// })
// let form2=document.querySelector("form2")
// form2.addEventListener("sumit",(e)=>{
//   e.preventDefault()
//   let saveData=localStorage.getItem("formData")
//   let dataobj=JSON.parse(saveData)
//   let loginobj={
//     email:form2[0].value,
//     pass:form2[1].value
//   }
//   if(dataobj.email==loginobj.email && dataobj.pass==loginobj.pass){
//     prompt("login done")
//   }else{
//     prompt("error")
//   }
// })


let inp=document.querySelector("input")
let btn=document.querySelector("button")
let ul=document.querySelector("ul")

btn.addEventListener("click",()=>{
//  console.log("hello");
  let data=inp.value
  //console.log(data);
  let li=document.createElement("li")
  li.innerText=data
  ul.append(li)
  inp.value=" "
  li.addEventListener("click",()=>{
    li.remove()
  })
  
})