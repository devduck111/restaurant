const contact =()=>{
    const content = document.getElementById("content")
    const pageContent = document.createElement('div')
    pageContent.classList.add("page-content")
    // const pageContent = document.querySelector(".page-content")

    const headline = document.createElement('h1')
    headline.textContent = "Contact Us"
    pageContent.appendChild(headline)

    const image = document.createElement('img')
    image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYz-VjzAWRAOVCh4LUU2gn1neDKPYoU0RF-pk4WxEcQ&s"
    image.height= "300"
    pageContent.appendChild(image)


    const para = document.createElement('p')
    para.textContent = "We are the BEST ever"
    pageContent.appendChild(para)
    content.appendChild(pageContent)

    
}

export default contact