const nav = document.getElementById("hamburgar")

let nanUl = document.getElementById("ul")
nanUl.style.display = "none"

hamburgar.addEventListener('click' , event =>{
    if (nanUl.style.display === "none") {
        nanUl.style.display = "flex"
    }else{
        nanUl.style.display ="none"
    }
})