const container = document.getElementById("container");
const inp = document.querySelector(".inp")
const notfound =document.querySelector(".notfound")
const select = document.querySelector("#select")
const sort = document.querySelector(".sort")
const URL = "https://randomuser.me/api/?results=250";
(async function() {
    console.log("fatching users are....")
    let promise=await fetch(URL)
    let data= await promise.json()
    document.querySelector(".loader-container").style.display="none"
    console.log(data.results.length)
     for (let i = 0; i < data.results.length; i++) {
        let apiName = data.results[i].name.first+" "+data.results[i].name.last
        let apiEmail = data.results[i].email
        let apiGender = data.results[i].gender
        let apiCountry = data.results[i].location.country
        let apiImage = data.results[i].picture.large
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `  <img src="${apiImage}" alt="user" />
        <h3>${apiName}</h3>
        <p>${apiEmail}</p>
        <p id="gender">${apiGender}</p>
        <p>${apiCountry}</p>`
        container.appendChild(card) 
    }
    let card=document.querySelectorAll(".card" )
    inp.addEventListener("input",(arg) => {
        let value=inp.value.toLowerCase()
    card.forEach((element) => {
       let name=element.querySelector("h3").innerText
       if (name.toLowerCase().includes(value)) {
          element.style.display="block"
          notfound.style.display="none"
          
       }
       else {
           element.style.display="none"
           notfound.style.display="block"
       }
       
    })
        
})
   //select filter
    select.addEventListener("input",(arg) => {
        let opt=select.value.toLowerCase()
        card.forEach((element) => {
         let gender=element.querySelector("#gender").innerText
         if (opt==="default") {
             element.style.display="block"
         } 
         else if (gender.toLowerCase()===opt) {
             element.style.display="block"
         }
         else {
             element.style.display="none"
         }
        })
})
})()
function scrollToTopSec() {
  document.querySelector('.top-sec').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start' 
  });
}
