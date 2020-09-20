const hamburguesa = document.getElementById("menu-hamburguesa")
const menu = document.getElementById("menu-responsive")
const links = document.querySelectorAll(".menu-responsive li")

hamburguesa.onclick = () =>{
  
    menu.classList.toggle(`mostrar-menu`)
}


for (let link of links){
    link.onclick = () => {
        menu.classList.add(`mostrar-menu`)
    }
}