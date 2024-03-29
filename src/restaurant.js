const createRestaurantHomePage =()=>{
    const content = document.getElementById("content")
    const pageContent = document.createElement('div')
    pageContent.classList.add("page-content")

    const headline = document.createElement('h1')
    headline.textContent = "Welcome To THE Restaurant"
    pageContent.appendChild(headline)

    const image = document.createElement('img')
    image.src="https://media-cdn.tripadvisor.com/media/photo-s/27/9f/45/bc/restaurant.jpg"
    image.height= "300"
    pageContent.appendChild(image)


    const para = document.createElement('p')
    para.textContent = "We are the BEST ever"
    pageContent.appendChild(para)
    content.appendChild(pageContent)

    
}

export default createRestaurantHomePage