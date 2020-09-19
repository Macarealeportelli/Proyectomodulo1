const hamburguesa = document.getElementById("menu-hamburguesa")
const menu = document.getElementById("menu-responsive")
const links = document.querySelectorAll(".menu-responsive li")

hamburguesa.onclick = () =>{
  
    menu.classList.toggle(`hidden`)
}


for (let link of links){
    link.onclick = () => {
        menu.classList.add(`hidden`)
    }
}