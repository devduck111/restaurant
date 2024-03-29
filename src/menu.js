const menu =()=>{
    const content = document.getElementById("content")

    const pageContent = document.createElement('div')
    pageContent.classList.add("page-content")
    
        const headline = document.createElement('h1')
        headline.textContent = "Our Menu"
        pageContent.appendChild(headline)

    const image = document.createElement('img')
    image.src="https://static.wixstatic.com/media/32bc72_9e3628e7e5774053890d1d10dc2e02e1~mv2.jpg/v1/fill/w_640,h_544,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Drink-%26-Dessert-Menu-1%20(1).jpg"
    image.height= "300"
    pageContent.appendChild(image)

    const para = document.createElement('p')
    para.textContent = "We are the BEST ever"
    pageContent.appendChild(para)
    content.appendChild(pageContent)

    
}

export default menu