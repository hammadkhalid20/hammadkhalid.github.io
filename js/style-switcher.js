
// // const links=document.querySelectorAll(".alternate-style"),
// const alternateStyles = document.querySelectorAll(".alternate-style");
//         //   totalLinks=links.length;
//         / function setActiveStyle(color){
//                 alternateStyles.forEach((style) => {
//                     if(color === style.getAttribute("title"))
//                     {
//                         style.removeAttribute("disabled");
//                     }
//                     else
//                     {
//                         style.setAttribute("disabled", "true");
//                     }
//                 })
//             }

// function setActiveStyle(color) {
//     for(let i=0; i<totalLinks; i++){
//         if(color == links[i].getAttribute("class")){
//             links[i].removeAttribute("disabled");
//         }
//         else{
//             links[i].setAttribute("disabled","true");
//         }
//     }
// }

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const bodySkin=document.querySelectorAll(".body-skin"),
totalBodySkin=bodySkin.length;
for(let i=0; i<totalBodySkin; i++){
    bodySkin[i].addEventListener("change",function(){
        if(this.value == "dark"){
            document.body.className="dark";
        }
        else{
            document.body.className="";
        }
    })
}

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// })
// window.addEventListener("load", () => {
//     if(document.body.classList.contains("dark")){
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else{
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })