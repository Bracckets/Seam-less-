posts =
    [
        {
            src: "icons/chronometer.png",
            title: "Complications Made Seamless.",
            brief: 'You know what they say, "Time is money". With Seamless, we plan to revolutionize concepts of timetables and task distribution. Take your business to a whole new levelusing the finest technologies in pattern recognition and machine learning.'
        },
        {
            src: "icons/Enterprise icon.png",
            title: "For Enterprise",
            brief: 'You know what they say, "Time is money". With Seamless, we plan to revolutionize concepts of timetables and task distribution. Take your business to a whole new levelusing the finest technologies in pattern recognition and machine learning.',
            link: "#",
            btntext: "Learn More",
            btnsrc: "icons/icn arrow-right .icn-xs.png",
            btnloc: "about.html"
        },
        {
            src: "icons/individual.png",
            title: "For individuals",
            brief: "Take your business to a whole new level using our finest technologies in pattern recognition and machine learning. With Seam[less], Creating and dividing tasks to your employees has never been easier.",
            link: "#",
            btntext: "Learn More",
            btnsrc: "icons/icn arrow-right .icn-xs.png",
            btnloc: "about.html"
        },
    ]

for (post of posts) {
    console.log(post)
    let article = document.createElement("article")
    article.classList.add("article-block")
    
    let title = document.createElement("h3")
    title.classList.add("paragraph-title")
    
    let paragraph = document.createElement("p")
    paragraph.classList.add("paragraph")
    
    let img = document.createElement("img")
    
    console.log(post.img)
    
    img.src = post.src
    img.alt = "Sample Image"
    
    title.textContent = post.title
    
    paragraph.textContent = post.brief
    
    article.appendChild(img)
    article.appendChild(title)
    article.appendChild(paragraph)

    
    if (post.link != null) {
        let button = document.createElement("button")
        button.textContent = post.btntext
        button.addEventListener("click", function() {
            window.location.href = post.btnloc
        })
        let img = document.createElement("img")
        img.style.width = "12px"
        img.style.height = "16px"
        img.src = post.btnsrc
        button.appendChild(img)
        article.appendChild(button)
    }
    
    document.querySelector("#card-content").appendChild(article)
        
    function goto(pagelink) {
        window.location.href = pagelink
    }
}









