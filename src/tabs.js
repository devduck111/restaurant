import createRestaurantHomePage from "./restaurant"
import menu from "./menu"
import contact from "./contact"

const createtabs= ()=>{
    const content = document.getElementById("content")

    const d1 = document.createElement('div')
    d1.textContent="Home"
    const d2 = document.createElement('div')
    d2.textContent="Menu"
    const d3 = document.createElement('div')
    d3.textContent="Contact"

    d1.style.border="1px #333 solid"
    d2.style.border="1px #333 solid"
    d3.style.border="1px #333 solid"

    content.appendChild(d1)
    content.appendChild(d2)
    content.appendChild(d3)

    d1.addEventListener("click", ()=>{
        clearContact()
        createRestaurantHomePage()
    })

    d2.addEventListener("click", ()=>{
        clearContact()
        menu()
    })

    d3.addEventListener("click", ()=>{
        clearContact()
        contact()
    })


}

function clearContact(){
    const content = document.getElementById("content")
    const pageContent = document.querySelector('.page-content')
    // content.appendChild(pageContent)
    if(pageContent){
        content.removeChild(pageContent)
    }
}

export default createtabs