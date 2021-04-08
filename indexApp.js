document.addEventListener("DOMContentLoaded", () => {
    
    //make cover disappear after animation ends
    setTimeout(() => {
        document.querySelector("#cover").style.display = "none" 
    }, 4100) 

    let projectNames = ['sleep', 'veracity', 'snowball', 'weather', 'two', 'tetris']

    //scroll animations
    window.onscroll = function() {
        let scrollB = 400 //offset where first project appears
        let scrollM
        if (window.innerWidth > 900) {
            scrollM = 450 //how much offset is added each time
        } else {
            scrollM = 750
        }
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

        //project nav bar
        if (window.pageYOffset < 350 || window.pageYOffset > 700 + scrollM * (projectNames.length - 1)) {
            //document.querySelector('#menu-side').style.left = '-20%' 
            document.querySelector('#menu-side').style.opacity = '0%' 
        } else {
            //document.querySelector('#menu-side').style.left = '2%'
            document.querySelector('#menu-side').style.opacity = '100%'  
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
        if (window.pageYOffset < scrollB) {
            //scroll pov above
            document.querySelector(`#${projectNames[0]}PC`).style.top = '400px'
            document.querySelector(`#${projectNames[0]}PC`).style.opacity = '0%'
            document.querySelector(`#${projectNames[0]}-link`).classList.remove('faded')
            document.querySelector(`#${projectNames[0]}-link`).style.fontWeight = '600'
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

        //last project
        if (window.pageYOffset > scrollB + scrollM * projectNames.length - 100) {
            document.querySelector(`#${projectNames[projectNames.length - 1]}PC`).style.top = '-200px'
            document.querySelector(`#${projectNames[projectNames.length - 1]}PC`).style.opacity = '0%'
            document.querySelector(`#${projectNames[projectNames.length - 1]}-link`).classList.add('faded')
            document.querySelector(`#${projectNames[projectNames.length - 1]}-link`).style.fontWeight = '400'
        }

        //contact bottom
        if (window.pageYOffset < scrollB + scrollM * projectNames.length - 100) {
            document.querySelector('#footer-title').style.top = '220px'
            document.querySelector('#footer-title').style.opacity = '0%'
            let links = document.getElementsByClassName('contact-bottom');
            for (let i = 0; i < links.length; i++) {
                links[i].style.opacity = '0%';
                links[i].style.left = '300px';
            }
            document.querySelector('#bottom-text').style.opacity = '0%'
            document.querySelector('#svg-container').style.opacity = '0%'
        } else {
            document.querySelector('#footer-title').style.top = '0px'
            document.querySelector('#footer-title').style.opacity = '100%'
            let links = document.getElementsByClassName('contact-bottom');
            for (let i = 0; i < links.length; i++) {
                links[i].style.opacity = '100%';
                links[i].style.left = '0px';
            }
            document.querySelector('#bottom-text').style.opacity = '100%'
            document.querySelector('#svg-container').style.opacity = '100%'
        }

        //svg placement
        document.querySelector('#svg-container').style.top = `${scrollB + projectNames.length * scrollM + 100}px`
    }
    
    //contact
    document.querySelector("#contact-btn").addEventListener("click", (e) => {
        document.querySelector("#c3").className = "circle-hover" 
        document.querySelector("#contact3").style.display = "grid" 
        a.style.borderColor = "rgb(134, 173, 255)" 
    }) 
    document.querySelector("#contactBtn2").addEventListener("click", (e) => {
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

    //click on bottom lettuce
    document.querySelector('#lettuce-bottom').addEventListener('click', () => {
    })

    
    let d = 'M 403.2 310.5 Q 408.2 315.5, 398.2 310.5 T 403.2 310.5 T 408.2 315.5 T 403.2 310.5 T 402.7 310.25 T 402.2 310 T 401.7 311.25 T 401.2 309.5 T 405.7 311.75 T 406.2 312 T 406.7 308.75 T 399.2 308.5 T 398.7 312.75 T 408.2 308 T 397.7 313.25 T 409.2 307.5 T 409.7 313.75 T 396.2 314 T 410.7 306.75 T 411.2 306.5 T 394.7 314.75 T 394.2 315 T 393.7 305.75 T 413.2 305.5 T 392.7 305.25 T 414.2 316 T 391.7 304.75 T 415.2 316.5 T 415.7 304.25 T 390.2 317 T 416.7 303.75 T 389.2 317.5 T 388.7 317.75 T 418.2 303 T 387.7 318.25 T 387.2 302.5 T 419.7 302.25 T 420.2 319 T 385.7 301.75 T 385.2 301.5 T 384.7 301.25 T 422.2 301 T 422.7 320.25 T 383.2 320.5 T 382.7 320.75 T 382.2 321 T 424.7 299.75 T 381.2 299.5 T 425.7 321.75 T 426.2 299 T 379.7 322.25 T 379.2 298.5 T 378.7 322.75 T 378.2 298 T 428.7 323.25 T 377.2 297.5 T 429.7 323.75 T 376.2 324 T 430.7 324.25 T 431.2 324.5 T 374.7 296.25 T 432.2 296 T 432.7 295.75 T 433.2 325.5 T 372.7 295.25 T 372.2 326 T 371.7 294.75 T 371.2 294.5 T 435.7 294.25 T 436.2 327 T 436.7 293.75 T 437.2 327.5 T 368.7 327.75 T 368.2 328 T 403.2 310.5 T 408.2 315.5 T 403.2 310.5 T 403.7 310.25 T 404.2 311 T 404.7 311.25 T 401.2 311.5 T 400.7 309.25 T 400.2 309 T 399.7 312.25 T 399.2 312.5 T 407.7 312.75 T 398.2 308 T 397.7 307.75 T 397.2 307.5 T 396.7 307.25 T 396.2 307 T 395.7 314.25 T 395.2 306.5 T 411.7 306.25 T 412.2 315 T 412.7 305.75 T 413.2 315.5 T 392.7 305.25 T 414.2 316 T 414.7 304.75 T 415.2 316.5 T 415.7 316.75 T 390.2 317 T 389.7 303.75 T 417.2 317.5 T 417.7 303.25 T 418.2 303 T 387.7 318.25 T 419.2 302.5 T 419.7 318.75 T 386.2 319 T 420.7 301.75 T 421.2 319.5 T 384.7 319.75 T 384.2 301 T 422.7 300.75 T 423.2 320.5 T 382.7 320.75 T 382.2 300 T 424.7 299.75 T 381.2 299.5 T 425.7 299.25 T 426.2 299 T 426.7 298.75 T 379.2 322.5 T 427.7 322.75 T 378.2 323 T 377.7 297.75 T 429.2 323.5 T 429.7 323.75 T 376.2 297 T 375.7 324.25 T 431.2 324.5 T 431.7 296.25 T 374.2 296 T 432.7 325.25 T 373.2 295.5 T 372.7 295.25 T 372.2 326 T 434.7 294.75 T 371.2 326.5 T 435.7 294.25 T 370.2 327 T 436.7 293.75 T 369.2 327.5 T 437.7 293.25 T 438.2 328'
    let d2 = 'M 375.3 310.5 Q 380.3 315.5, 370.3 310.5 T 375.3 310.5 T 380.3 315.5 T 375.3 310.5 T 375.6333333333333 310.1666666666667 T 374.6333333333333 311.1666666666667 T 374.3 311.5 T 376.6333333333333 311.8333333333333 T 373.6333333333333 308.8333333333333 T 377.3 312.5 T 377.6333333333333 308.1666666666667 T 377.9666666666667 313.1666666666667 T 378.3 307.5 T 371.9666666666667 313.8333333333333 T 378.9666666666667 314.1666666666667 T 371.3 314.5 T 379.6333333333333 314.8333333333333 T 370.6333333333333 305.8333333333333 T 380.3 305.5 T 369.9666666666667 315.8333333333333 T 369.6333333333333 304.8333333333333 T 369.3 316.5 T 381.6333333333333 304.1666666666667 T 381.9666666666667 303.8333333333333 T 368.3 317.5 T 382.6333333333333 317.8333333333333 T 382.9666666666667 302.8333333333333 T 383.3 302.5 T 383.6333333333333 318.8333333333333 T 366.6333333333333 301.8333333333333 T 384.3 301.5 T 365.9666666666667 301.1666666666667 T 384.9666666666667 320.1666666666667 T 385.3 320.5 T 364.9666666666667 320.8333333333333 T 364.6333333333333 299.8333333333333 T 364.3 299.5 T 386.6333333333333 321.8333333333333 T 363.6333333333333 298.8333333333333 T 363.3 298.5 T 362.9666666666667 298.1666666666667 T 362.6333333333333 297.8333333333333 T 388.3 323.5 T 361.9666666666667 323.8333333333333 T 361.6333333333333 296.8333333333333 T 361.3 296.5 T 360.9666666666667 296.1666666666667 T 360.6333333333333 295.8333333333333 T 390.3 295.5 T 390.6333333333333 325.8333333333333 T 359.6333333333333 294.8333333333333 T 391.3 294.5 T 358.9666666666667 294.1666666666667 T 358.6333333333333 293.8333333333333 T 358.3 293.5 T 392.6333333333333 327.8333333333333 T 392.9666666666667 328.1666666666667 T 393.3 292.5 T 393.6333333333333 328.8333333333333 T 356.6333333333333 291.8333333333333 T 394.3 291.5 T 394.6333333333333 291.1666666666667 T 394.9666666666667 330.1666666666667 T 395.3 290.5 T 395.6333333333333 290.1666666666667 T 395.9666666666667 331.1666666666667 T 396.3 289.5 T 396.6333333333333 331.8333333333333 T 353.6333333333333 288.8333333333333 T 397.3 288.5 T 397.6333333333333 288.1666666666667 T 352.6333333333333 333.1666666666667 T 352.3 287.5 T 398.6333333333333 287.1666666666667 T 375.3 310.5 T 380.3 315.5 T 375.3 310.5 T 374.9666666666667 310.1666666666667 T 375.9666666666667 309.8333333333333 T 374.3 309.5 T 373.9666666666667 309.1666666666667 T 376.9666666666667 308.8333333333333 T 373.3 308.5 T 372.9666666666667 308.1666666666667 T 372.6333333333333 313.1666666666667 T 372.3 313.5 T 378.6333333333333 313.8333333333333 T 371.6333333333333 306.8333333333333 T 371.3 306.5 T 379.6333333333333 306.1666666666667 T 370.6333333333333 315.1666666666667 T 380.3 305.5 T 380.6333333333333 305.1666666666667 T 380.9666666666667 316.1666666666667 T 381.3 304.5 T 368.9666666666667 304.1666666666667 T 381.9666666666667 317.1666666666667 T 382.3 303.5 T 382.6333333333333 317.8333333333333 T 382.9666666666667 302.8333333333333 T 383.3 318.5 T 383.6333333333333 318.8333333333333 T 366.6333333333333 301.8333333333333 T 384.3 301.5 T 384.6333333333333 319.8333333333333 T 365.6333333333333 320.1666666666667 T 365.3 300.5 T 364.9666666666667 300.1666666666667 T 385.9666666666667 321.1666666666667 T 386.3 299.5 T 363.9666666666667 321.8333333333333 T 363.6333333333333 322.1666666666667 T 363.3 298.5 T 362.9666666666667 298.1666666666667 T 387.9666666666667 323.1666666666667 T 362.3 323.5 T 388.6333333333333 323.8333333333333 T 361.6333333333333 324.1666666666667 T 361.3 296.5 T 389.6333333333333 296.1666666666667 T 389.9666666666667 325.1666666666667 T 390.3 295.5 T 359.9666666666667 295.1666666666667 T 390.9666666666667 326.1666666666667 T 359.3 294.5 T 391.6333333333333 326.8333333333333 T 391.9666666666667 327.1666666666667 T 392.3 327.5 T 357.9666666666667 293.1666666666667 T 392.9666666666667 328.1666666666667 T 393.3 292.5 T 393.6333333333333 292.1666666666667 T 393.9666666666667 329.1666666666667 T 394.3 291.5 T 355.9666666666667 291.1666666666667 T 355.6333333333333 290.8333333333333 T 355.3 290.5 T 354.9666666666667 290.1666666666667 T 354.6333333333333 331.1666666666667 T 354.3 289.5 T 353.9666666666667 331.8333333333333 T 396.9666666666667 288.8333333333333 T 353.3 332.5 T 352.9666666666667 332.8333333333333 T 397.9666666666667 333.1666666666667 T 398.3 287.5 T 351.9666666666667 333.8333333333333'
    let d3 = 'M 326.7 310.5 Q 331.7 315.5, 321.7 310.5 T 326.7 310.5 T 331.7 315.5 T 326.7 310.5 T 327.0333333333333 310.8333333333333 T 327.3666666666667 309.8333333333333 T 327.7 311.5 T 328.0333333333333 309.1666666666667 T 325.0333333333333 312.1666666666667 T 328.7 308.5 T 329.0333333333333 308.1666666666667 T 324.0333333333333 307.8333333333333 T 323.7 313.5 T 323.3666666666667 307.1666666666667 T 330.3666666666667 306.8333333333333 T 322.7 306.5 T 322.3666666666667 306.1666666666667 T 331.3666666666667 305.8333333333333 T 331.7 315.5 T 332.0333333333333 305.1666666666667 T 321.0333333333333 304.8333333333333 T 320.7 304.5 T 320.3666666666667 316.8333333333333 T 320.0333333333333 317.1666666666667 T 333.7 303.5 T 334.0333333333333 303.1666666666667 T 319.0333333333333 302.8333333333333 T 318.7 318.5 T 318.3666666666667 302.1666666666667 T 318.0333333333333 319.1666666666667 T 335.7 319.5 T 317.3666666666667 301.1666666666667 T 317.0333333333333 320.1666666666667 T 316.7 300.5 T 316.3666666666667 320.8333333333333 T 316.0333333333333 299.8333333333333 T 337.7 299.5 T 338.0333333333333 299.1666666666667 T 315.0333333333333 298.8333333333333 T 314.7 322.5 T 339.0333333333333 298.1666666666667 T 339.3666666666667 297.8333333333333 T 313.7 297.5 T 313.3666666666667 323.8333333333333 T 340.3666666666667 296.8333333333333 T 312.7 324.5 T 341.0333333333333 324.8333333333333 T 312.0333333333333 325.1666666666667 T 311.7 325.5 T 311.3666666666667 325.8333333333333 T 311.0333333333333 326.1666666666667 T 342.7 294.5 T 343.0333333333333 326.8333333333333 T 343.3666666666667 293.8333333333333 T 309.7 293.5 T 309.3666666666667 327.8333333333333 T 309.0333333333333 328.1666666666667 T 344.7 328.5 T 308.3666666666667 292.1666666666667 T 308.0333333333333 329.1666666666667 T 345.7 291.5 T 346.0333333333333 329.8333333333333 T 346.3666666666667 330.1666666666667 T 346.7 290.5 T 306.3666666666667 330.8333333333333 T 347.3666666666667 331.1666666666667 T 347.7 331.5 T 348.0333333333333 289.1666666666667 T 305.0333333333333 288.8333333333333 T 304.7 332.5 T 304.3666666666667 288.1666666666667 T 349.3666666666667 287.8333333333333 T 303.7 287.5 T 303.3666666666667 287.1666666666667 T 326.7 310.5 T 331.7 315.5 T 326.7 310.5 T 327.0333333333333 310.8333333333333 T 327.3666666666667 311.1666666666667 T 325.7 309.5 T 325.3666666666667 309.1666666666667 T 325.0333333333333 308.8333333333333 T 324.7 308.5 T 329.0333333333333 308.1666666666667 T 324.0333333333333 313.1666666666667 T 323.7 307.5 T 330.0333333333333 307.1666666666667 T 323.0333333333333 306.8333333333333 T 330.7 314.5 T 322.3666666666667 306.1666666666667 T 322.0333333333333 305.8333333333333 T 321.7 305.5 T 321.3666666666667 305.1666666666667 T 321.0333333333333 316.1666666666667 T 320.7 316.5 T 320.3666666666667 316.8333333333333 T 320.0333333333333 317.1666666666667 T 333.7 303.5 T 334.0333333333333 317.8333333333333 T 334.3666666666667 318.1666666666667 T 318.7 318.5 T 335.0333333333333 302.1666666666667 T 318.0333333333333 301.8333333333333 T 317.7 301.5 T 336.0333333333333 319.8333333333333 T 317.0333333333333 320.1666666666667 T 336.7 320.5 T 337.0333333333333 300.1666666666667 T 316.0333333333333 321.1666666666667 T 337.7 299.5 T 338.0333333333333 299.1666666666667 T 315.0333333333333 322.1666666666667 T 338.7 298.5 T 339.0333333333333 322.8333333333333 T 339.3666666666667 323.1666666666667 T 339.7 297.5 T 313.3666666666667 297.1666666666667 T 340.3666666666667 324.1666666666667 T 312.7 296.5 T 312.3666666666667 324.8333333333333 T 341.3666666666667 325.1666666666667 T 311.7 295.5 T 342.0333333333333 325.8333333333333 T 311.0333333333333 326.1666666666667 T 342.7 294.5 T 310.3666666666667 294.1666666666667 T 343.3666666666667 293.8333333333333 T 343.7 327.5 T 309.3666666666667 293.1666666666667 T 344.3666666666667 328.1666666666667 T 344.7 292.5 T 345.0333333333333 292.1666666666667 T 308.0333333333333 291.8333333333333 T 345.7 329.5 T 346.0333333333333 329.8333333333333 T 307.0333333333333 330.1666666666667 T 306.7 290.5 T 306.3666666666667 290.1666666666667 T 347.3666666666667 331.1666666666667 T 305.7 289.5 T 348.0333333333333 331.8333333333333 T 348.3666666666667 332.1666666666667 T 304.7 288.5 T 304.3666666666667 332.8333333333333 T 304.0333333333333 333.1666666666667 T 303.7 287.5 T 350.0333333333333 333.8333333333333'
    let d4 = 'M 403.2 310.5 Q 408.2 315.5, 398.2 310.5 T 403.2 310.5 T 408.2 315.5 T 403.2 310.5 T 403.45 310.25 T 403.7 311 T 402.45 309.75 T 404.2 309.5 T 404.45 309.25 T 404.7 309 T 404.95 308.75 T 401.2 312.5 T 400.95 312.75 T 400.7 313 T 400.45 307.75 T 400.2 313.5 T 399.95 313.75 T 406.7 307 T 399.45 306.75 T 399.2 306.5 T 398.95 314.75 T 398.7 315 T 407.95 315.25 T 408.2 315.5 T 397.95 305.25 T 397.7 316 T 397.45 304.75 T 397.2 316.5 T 396.95 316.75 T 396.7 317 T 409.95 317.25 T 410.2 303.5 T 395.95 303.25 T 410.7 303 T 410.95 302.75 T 411.2 302.5 T 394.95 318.75 T 394.7 319 T 411.95 301.75 T 394.2 319.5 T 393.95 319.75 T 412.7 301 T 412.95 320.25 T 413.2 320.5 T 392.95 320.75 T 413.7 300 T 392.45 321.25 T 392.2 299.5 T 414.45 321.75 T 414.7 322 T 391.45 298.75 T 391.2 298.5 T 415.45 322.75 T 390.7 323 T 390.45 323.25 T 416.2 323.5 T 389.95 323.75 T 389.7 297 T 389.45 296.75 T 389.2 324.5 T 417.45 324.75 T 388.7 296 T 388.45 325.25 T 418.2 325.5 T 418.45 325.75 T 418.7 326 T 418.95 326.25 T 419.2 326.5 T 386.95 294.25 T 419.7 327 T 386.45 327.25 T 386.2 327.5 T 385.95 293.25 T 385.7 293 T 403.2 310.5 T 408.2 315.5 T 403.2 310.5 T 403.45 310.25 T 403.7 310 T 402.45 309.75 T 404.2 309.5 T 404.45 311.75 T 404.7 312 T 401.45 312.25 T 405.2 308.5 T 400.95 308.25 T 405.7 313 T 405.95 307.75 T 406.2 313.5 T 406.45 307.25 T 406.7 307 T 399.45 314.25 T 399.2 306.5 T 398.95 306.25 T 407.7 306 T 398.45 305.75 T 398.2 315.5 T 408.45 315.75 T 408.7 305 T 408.95 316.25 T 397.2 316.5 T 396.95 316.75 T 396.7 304 T 409.95 303.75 T 396.2 317.5 T 395.95 317.75 T 395.7 303 T 410.95 318.25 T 395.2 318.5 T 394.95 318.75 T 411.7 319 T 394.45 301.75 T 412.2 319.5 T 393.95 319.75 T 412.7 301 T 412.95 320.25 T 413.2 320.5 T 392.95 320.75 T 413.7 321 T 392.45 299.75 T 414.2 321.5 T 414.45 321.75 T 414.7 322 T 391.45 322.25 T 415.2 322.5 T 415.45 298.25 T 415.7 323 T 415.95 297.75 T 416.2 323.5 T 416.45 323.75 T 416.7 297 T 416.95 296.75 T 417.2 296.5 T 388.95 296.25 T 388.7 296 T 388.45 325.25 T 418.2 295.5 T 387.95 325.75 T 387.7 295 T 387.45 326.25 T 419.2 326.5 T 419.45 326.75 T 419.7 327 T 419.95 293.75 T 386.2 327.5 T 420.45 327.75 T 385.7 328'
    let d5 = 'M 403.2 310.5 Q 408.2 315.5, 398.2 310.5 T 403.2 310.5 T 408.2 315.5 T 403.2 310.5 T 402.95 310.75 T 402.7 310 T 403.95 309.75 T 404.2 309.5 T 401.95 309.25 T 401.7 312 T 404.95 308.75 T 405.2 312.5 T 400.95 312.75 T 400.7 308 T 400.45 313.25 T 406.2 307.5 T 406.45 313.75 T 406.7 314 T 399.45 314.25 T 407.2 306.5 T 398.95 314.75 T 407.7 315 T 398.45 305.75 T 408.2 305.5 T 397.95 315.75 T 408.7 305 T 397.45 316.25 T 409.2 316.5 T 396.95 304.25 T 396.7 304 T 409.95 317.25 T 396.2 317.5 T 395.95 303.25 T 410.7 303 T 410.95 318.25 T 411.2 318.5 T 394.95 318.75 T 394.7 319 T 411.95 319.25 T 412.2 319.5 T 412.45 319.75 T 412.7 320 T 412.95 300.75 T 413.2 320.5 T 392.95 320.75 T 392.7 321 T 413.95 321.25 T 392.2 299.5 T 391.95 299.25 T 414.7 322 T 414.95 322.25 T 415.2 322.5 T 415.45 322.75 T 415.7 298 T 415.95 323.25 T 390.2 297.5 T 389.95 323.75 T 416.7 324 T 389.45 324.25 T 389.2 324.5 T 417.45 296.25 T 388.7 325 T 388.45 325.25 T 388.2 325.5 T 387.95 295.25 T 387.7 295 T 418.95 294.75 T 419.2 294.5 T 386.95 294.25 T 386.7 327 T 386.45 327.25 T 386.2 327.5 T 420.45 327.75 T 420.7 293 T 403.2 310.5 T 408.2 315.5 T 403.2 310.5 T 402.95 310.25 T 403.7 311 T 402.45 311.25 T 404.2 309.5 T 401.95 311.75 T 404.7 312 T 404.95 312.25 T 405.2 308.5 T 405.45 308.25 T 405.7 313 T 400.45 307.75 T 406.2 313.5 T 399.95 313.75 T 406.7 307 T 399.45 306.75 T 399.2 306.5 T 407.45 314.75 T 407.7 306 T 407.95 305.75 T 408.2 315.5 T 408.45 315.75 T 408.7 305 T 397.45 304.75 T 397.2 304.5 T 409.45 316.75 T 409.7 304 T 396.45 303.75 T 410.2 303.5 T 395.95 317.75 T 410.7 303 T 395.45 302.75 T 395.2 302.5 T 411.45 318.75 T 411.7 319 T 394.45 319.25 T 412.2 301.5 T 393.95 301.25 T 393.7 301 T 412.95 320.25 T 413.2 300.5 T 392.95 320.75 T 392.7 300 T 413.95 299.75 T 392.2 299.5 T 414.45 299.25 T 391.7 322 T 414.95 322.25 T 391.2 298.5 T 390.95 322.75 T 415.7 298 T 415.95 323.25 T 390.2 323.5 T 416.45 297.25 T 416.7 297 T 416.95 296.75 T 417.2 296.5 T 388.95 296.25 T 417.7 296 T 417.95 295.75 T 418.2 325.5 T 387.95 295.25 T 418.7 295 T 418.95 294.75 T 387.2 294.5 T 419.45 326.75 T 386.7 294 T 386.45 293.75 T 386.2 293.5 T 420.45 327.75 T 420.7 293 '
    let d6 = 'M 403.2 310.5 Q 408.2 315.5, 398.2 310.5 T 403.2 310.5 T 408.2 315.5 T 403.2 310.5 T 403.45 310.25 T 402.7 310 T 403.95 311.25 T 402.2 311.5 T 404.45 311.75 T 404.7 312 T 401.45 312.25 T 401.2 308.5 T 405.45 308.25 T 405.7 313 T 400.45 313.25 T 400.2 307.5 T 406.45 313.75 T 406.7 314 T 406.95 314.25 T 399.2 314.5 T 407.45 306.25 T 398.7 306 T 407.95 315.25 T 408.2 315.5 T 397.95 305.25 T 408.7 316 T 397.45 316.25 T 409.2 304.5 T 396.95 304.25 T 396.7 304 T 409.95 303.75 T 410.2 317.5 T 410.45 317.75 T 395.7 303 T 410.95 318.25 T 395.2 302.5 T 411.45 302.25 T 394.7 319 T 411.95 319.25 T 412.2 319.5 T 412.45 301.25 T 393.7 320 T 412.95 300.75 T 393.2 320.5 T 392.95 320.75 T 392.7 300 T 413.95 299.75 T 414.2 299.5 T 414.45 299.25 T 414.7 322 T 391.45 298.75 T 415.2 298.5 T 390.95 298.25 T 390.7 323 T 390.45 297.75 T 416.2 297.5 T 389.95 297.25 T 389.7 297 T 389.45 296.75 T 389.2 296.5 T 388.95 296.25 T 417.7 296 T 417.95 325.25 T 388.2 325.5 T 387.95 325.75 T 418.7 326 T 387.45 326.25 T 419.2 326.5 T 386.95 326.75 T 386.7 294 T 419.95 327.25 T 420.2 293.5 T 420.45 293.25 T 420.7 328 T 403.2 310.5 T 408.2 315.5 T 403.2 310.5 T 402.95 310.75 T 403.7 310 T 402.45 309.75 T 404.2 309.5 T 401.95 309.25 T 401.7 309 T 404.95 312.25 T 401.2 308.5 T 405.45 312.75 T 405.7 308 T 405.95 313.25 T 406.2 307.5 T 399.95 307.25 T 406.7 307 T 406.95 314.25 T 399.2 314.5 T 407.45 306.25 T 407.7 315 T 407.95 315.25 T 398.2 315.5 T 408.45 305.25 T 397.7 305 T 408.95 304.75 T 409.2 316.5 T 409.45 316.75 T 409.7 317 T 396.45 303.75 T 396.2 303.5 T 395.95 303.25 T 410.7 318 T 395.45 302.75 T 395.2 318.5 T 394.95 318.75 T 411.7 319 T 394.45 319.25 T 394.2 301.5 T 393.95 301.25 T 412.7 301 T 393.45 300.75 T 413.2 300.5 T 392.95 320.75 T 413.7 300 T 413.95 299.75 T 414.2 321.5 T 414.45 321.75 T 414.7 299 T 414.95 298.75 T 415.2 322.5 T 415.45 322.75 T 415.7 298 T 415.95 323.25 T 416.2 297.5 T 389.95 297.25 T 389.7 297 T 416.95 296.75 T 389.2 296.5 T 417.45 296.25 T 388.7 325 T 388.45 325.25 T 388.2 325.5 T 387.95 325.75 T 418.7 326 T 418.95 294.75 T 419.2 294.5 T 419.45 294.25 T 386.7 327 T 386.45 327.25 T 420.2 293.5 T 420.45 293.25 T 420.7 328 '
    
    document.querySelector('#scribble-path').setAttribute('d', d)
    document.querySelector('#scribble-path2').setAttribute('d', d4)
    document.querySelector('#scribble-path3').setAttribute('d', d5)
    document.querySelector('#scribble-path4').setAttribute('d', d6)

  



}) 