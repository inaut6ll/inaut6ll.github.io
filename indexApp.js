document.addEventListener("DOMContentLoaded", () => {
    
    //make cover disappear after animation ends
    setTimeout(() => {
        document.querySelector("#cover").style.display = "none" 
    }, 4100) 

    let projectNames = ['sleep', 'veracity', 'snowball', 'weather', 'two', 'tetris']
    let scrollB = 400 //offset where first project appears
    let scrollM = 450 //how much offset is added each time
    let offsets = [scrollB + 200]

    //fill offsets array
    for (let i = 1; i < projectNames.length; i++) {
        offsets.push(scrollB + 200 + scrollM * i)
    }

    //add functionality to project anchors (normal linking doesn't work correctly)
    for (let i = 0; i < projectNames.length; i++) {
        document.querySelector(`#${projectNames[i]}-link`).addEventListener('click', () => {
            window.scrollTo(0, offsets[i])
        })
    }

    //scroll animations
    window.onscroll = function() {
        //project nav bar
        if (window.pageYOffset < 350 || window.pageYOffset > 700 + scrollM * (projectNames.length - 1)) {
            //document.querySelector('#menu-bottom').style.left = '-20%' 
            document.querySelector('#menu-bottom').style.opacity = '0%' 
        } else {
            //document.querySelector('#menu-bottom').style.left = '2%'
            document.querySelector('#menu-bottom').style.opacity = '100%'  
        }
        //project title
        if (window.pageYOffset < 200) {
            document.querySelector('#projects-title').style.top = '200px'
            document.querySelector('#projects-title').style.opacity = '0%'
        } else {
            document.querySelector('#projects-title').style.top = '-20px'
            document.querySelector('#projects-title').style.opacity = '100%'
        }

        //first project
        if (window.pageYOffset < scrollM) {
            //scroll pov above
            document.querySelector(`#${projectNames[0]}PC`).style.top = '400px'
            document.querySelector(`#${projectNames[0]}PC`).style.opacity = '0%'
            document.querySelector(`#${projectNames[0]}-link`).classList.add('faded')
            document.querySelector(`#${projectNames[0]}-link`).style.fontWeight = '400'
        } else if (window.pageYOffset > scrollB + scrollM) {
            //scroll pov below
            document.querySelector(`#${projectNames[0]}PC`).style.top = '-200px'
            document.querySelector(`#${projectNames[0]}PC`).style.opacity = '0%'
            document.querySelector(`#${projectNames[0]}-link`).classList.add('faded')
            document.querySelector(`#${projectNames[0]}-link`).style.fontWeight = '400'
        } else {
            //scroll pov seen
            document.querySelector(`#${projectNames[0]}PC`).style.top = '-20px'
            document.querySelector(`#${projectNames[0]}PC`).style.opacity = '100%'
            document.querySelector(`#${projectNames[0]}-link`).classList.remove('faded')
            document.querySelector(`#${projectNames[0]}-link`).style.fontWeight = '600'
        }

        //projects after the first one
        for (let i = 1; i < projectNames.length; i++) {
            if (window.pageYOffset < scrollB + scrollM * i) {
                //scroll pov above
                document.querySelector(`#${projectNames[i]}PC`).style.top = '400px'
                document.querySelector(`#${projectNames[i]}PC`).style.opacity = '0%'
                document.querySelector(`#${projectNames[i]}-link`).classList.add('faded')
                document.querySelector(`#${projectNames[i]}-link`).style.fontWeight = '400'
            } else if (window.pageYOffset > scrollB + scrollM * (i + 1)) {
                //scroll pov below
                document.querySelector(`#${projectNames[i]}PC`).style.top = '-200px'
                document.querySelector(`#${projectNames[i]}PC`).style.opacity = '0%'
                document.querySelector(`#${projectNames[i]}-link`).classList.add('faded')
                document.querySelector(`#${projectNames[i]}-link`).style.fontWeight = '400'
            } else {
                //scroll pov seen
                document.querySelector(`#${projectNames[i]}PC`).style.top = '-20px'
                document.querySelector(`#${projectNames[i]}PC`).style.opacity = '100%'
                document.querySelector(`#${projectNames[i]}-link`).classList.remove('faded')
                document.querySelector(`#${projectNames[i]}-link`).style.fontWeight = '600'
            }
        }
    }
    
    //contact
    document.querySelector("#contact-btn").addEventListener("click", (e) => {
        document.querySelector("#c3").className = "circle-hover" 
        document.querySelector("#contact3").style.display = "grid" 
        a.style.borderColor = "rgb(134, 173, 255)" 
    }) 

    //onclick functions for circles
    let elements = [...document.querySelectorAll(".circle")] 
    elements.forEach(element => {
        element.addEventListener("click", (e) => {
            let a = e.target 
            let contact1 = document.querySelector('#contact1')
            let contact2 = document.querySelector('#contact2')
            let contact3 = document.querySelector('#contact3')
            if (a.className == "circle-hover"){
                a.className = "circle" 
                if (a.id == "c2") {
                    a.style.borderColor = "black" 
                    contact2.style.display = "none" 
                } else if (a.id == "c3") {
                    a.style.borderColor = "tomato" 
                    contact3.style.display = "none" 
                } else{
                    a.style.borderColor = "black" 
                    contact1.style.display = "none" 
                }
            } else if (a.className.includes("circle")){
                a.className = "circle-hover" 
                if (a.id == "c2") {
                    a.style.borderColor = "rgb(134, 173, 255)" 
                    contact2.style.display = "flex" 
                } else if (a.id == "c3") {
                    a.style.borderColor = "tomato" 
                    contact3.style.display = "grid" 
                } else {
                    a.style.borderColor = "orange" 
                    contact1.style.display = "flex" 
                }
            }
        }) 
    }) 

    //data for each project container
    let projects = {
        sleep: {
            color: "orange",
            currentDotNum: 1,
        },
        veracity: {
            color: "rgb(106, 208, 255)",
            currentDotNum: 1,
        },
        snowball: {
            color: "rgb(86, 40, 255)",
            currentDotNum: 1
        },
        weather: {
            color: "black",
            currentDotNum: 1
        },
        two: {
            color: "orange",
            currentDotNum: 1
        },
        tetris: {
            color: "rgb(103, 219, 151)",
            currentDotNum: 1
        }
    }

    //add functionality to all images (snowball is exception)
    let allImages = document.querySelectorAll(".white-hover") 
    let imageArr = [...allImages] 
    imageArr.forEach(element => element.addEventListener("click", (e) => {
        const ID = e.target.id 
        let p 
        if (ID == 'sleep-hover') {
            p = 'chamomile'
        } else if (ID == "veracity-hover"){
            p = "veracity" 
        } else if (ID == "snowball-hover"){
            window.open("https://devpost.com/software/dodoplier", "_blank") 
            return 
        } else if (ID == "weather-hover"){
            p = "weather" 
        } else if (ID == "two-hover"){
            p = "2048" 
        } else {
            p = "tetris" 
        }
        window.open(`https://lilianzlettuce.github.io/${p}`, "_blank") 
    })) 


    function getNextDotNum(current) {
        if (current == 3) {
            current = 0 
        }
        let arr = [1, 2, 3] 
        return arr[current] 
    }

    //add functionality to all right arrows
    let allArrows = document.querySelectorAll(".right-arrow") 
    let arrowArr = [...allArrows] 
    arrowArr.forEach(element => element.addEventListener("click", (e) => {
        let id = e.target.id 
        let p 
        if (id == 'sleep-icon') {
            p = 'sleep'
        } else if (id == "veracity-icon"){
            p = "veracity" 
        } else if (id == "snowball-icon"){
            p = "snowball" 
        } else if (id == "weather-icon"){
            p = "weather" 
        } else if (id == "two-icon"){
            p = "two" 
        } else {
            p = "tetris" 
        }
        let color 
        let currentDotNum 
        eval("color = projects." + p + ".color ") 
        eval("currentDotNum = projects." + p + ".currentDotNum ") 

        let currentDot 
        let nextDot 
        let pic2 = document.querySelector(`#${p}2`) 
        let pic3 = document.querySelector(`#${p}3`) 

        if(currentDotNum === 1) {
            currentDot = document.querySelector(`#${p}-dot1`) 
            nextDot = document.querySelector(`#${p}-dot2`) 
            pic2.style.opacity = "100%" 
        } else if(currentDotNum === 2) {
            currentDot = document.querySelector(`#${p}-dot2`) 
            nextDot = document.querySelector(`#${p}-dot3`) 
            pic3.style.opacity = "100%" 
        } else {
            currentDot = document.querySelector(`#${p}-dot3`) 
            nextDot = document.querySelector(`#${p}-dot1`) 
            pic2.style.opacity = "0%" 
            pic3.style.opacity = "0%" 
        } 
        currentDot.style.backgroundColor = "white" 
        currentDot.style.border = "1px solid black" 
        nextDot.style.backgroundColor = color 
        nextDot.style.border = "none" 
        eval("projects." + p + `.currentDotNum = ${getNextDotNum(currentDotNum)} `) 
    })) 

    //add functionality to all dots
    let allDots = document.querySelectorAll(".dot") 
    let dotsArr = [...allDots] 
    dotsArr.forEach(element => element.addEventListener("click", (e) => {
        let id = e.target.id 
        let p 
        if (id.includes("sleep")){
            p = "sleep" 
        } else if (id.includes("veracity")){
            p = "veracity" 
        } else if (id.includes("snowball")){
            p = "snowball" 
        } else if (id.includes("weather")){
            p = "weather" 
        } else if (id.includes("two")){
            p = "two" 
        } else {
            p = "tetris" 
        }
        let color 
        let currentDotNum 
        eval("color = projects." + p + ".color ") 
        eval("currentDotNum = projects." + p + ".currentDotNum ") 

        let pic2 = document.querySelector(`#${p}2`) 
        let pic3 = document.querySelector(`#${p}3`) 

        let currentDot = document.querySelector(`#${p}-dot${currentDotNum}`) 
        currentDot.style.backgroundColor = "white" 
        currentDot.style.border = "1px solid black" 

        let nextDot = document.querySelector(`#${id}`) 
        nextDot.style.backgroundColor = color 
        nextDot.style.border = "none" 

        let allClasses = e.target.classList 
        let classArr = [...allClasses] 
        let changeTo 
        if (classArr.includes("dot2")){
            changeTo = 2 
            pic2.style.opacity = "100%" 
            setTimeout(function(){pic3.style.opacity = "0%" }, 100) 
        } else if (classArr.includes("dot3")){
            changeTo = 3 
            pic3.style.opacity = "100%" 
        } else {
            changeTo = 1 
            pic2.style.opacity = "0%" 
            pic3.style.opacity = "0%" 
        }
        eval("projects." + p + `.currentDotNum = ${changeTo} `) 
    })) 

}) 