const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const main = document.querySelector(".main__div")


for(let i=0; i<map.length; i++) {
    let mainDiv = document.createElement("div")
    let subDiv = document.createElement("div")
    let subClone

    for(let j=0; j<map[i].length; j++) {
        if (map[i][j] === " ") {
            subDiv.classList.add("blank")
            subDiv.classList.remove("wall")
            subDiv.classList.remove("start")
            subDiv.classList.remove("finish")
            subClone = subDiv.cloneNode()
            mainDiv.appendChild(subClone)
            mainDiv.classList.add("sub__div")

        } else if (map[i][j] === "W") {
            subDiv.classList.add("wall")
            subDiv.classList.remove("blank")
            subDiv.classList.remove("finish")
            subDiv.classList.remove("start")
            subClone = subDiv.cloneNode()
            mainDiv.appendChild(subClone)
            mainDiv.classList.add("sub__div")

        } else if (map[i][j] === "S") {
            subDiv.classList.add("start")
            subDiv.classList.remove("blank")
            subDiv.classList.remove("wall")
            subDiv.classList.remove("finish")
            subClone = subDiv.cloneNode()
            mainDiv.appendChild(subClone)
            subDiv.classList.add("blank")
            subDiv.classList.remove("start")
            subClone = subDiv.cloneNode()
            mainDiv.insertBefore(subClone, mainDiv.firstChild)
            mainDiv.classList.add("sub__div")

        } else if (map[i][j] === "F") {

            subDiv.classList.add("finish")
            subDiv.classList.remove("blank")
            subDiv.classList.remove("wall")
            subDiv.classList.remove("start")
            subClone = subDiv.cloneNode()
            mainDiv.appendChild(subClone)
            mainDiv.classList.add("sub__div")
        }
    }
    mainDiv.style.width = 50*map[1].length + "px"
    main.appendChild(mainDiv)
}

function FindS() {

    for(let k=0; k<map.length; k++){
        for(let l=0; l<map[k].length; l++){
            if (map[k][l] === "S") {
                return [k, l]
            }
        }
    }
}

const player = document.querySelector(".start")
const btn = document.querySelector(".victory__button")
const victoryScreen = document.querySelector(".victory")
let start = FindS()
let walkUpDown = 0
let walkLeftRight = 0

document.addEventListener("keydown", (evt) => {
    const keyPress = evt.key

     if (keyPress === "ArrowUp") {
        if (map[start[0]-1][start[1]] === "W") {
            player.classList.add("error")
            setTimeout(() => {
                player.classList.remove("error")
            }, 150)
        } else if (start[0-1] < 0) {
            player.classList.add("error")
            setTimeout(() => {
                player.classList.remove("error")
            }, 150)
    
        } else if (map[start[0]-1][start[1]] === "F") {
            main.classList.add("hidden")
            victoryScreen.classList.remove("hidden")
        } else {
            walkUpDown -= 50
            player.style.transform = `translate(${walkLeftRight}px, ${walkUpDown}px)`
            start[0] -=1
        }

    } else if (keyPress === "ArrowDown") {
        if (map[start[0]+1][start[1]] === "W") {
            player.classList.add("error")
            setTimeout(() => {
                player.classList.remove("error")
            }, 150)
        } else if (start[0]+1 > map.length) {
            player.classList.add("error")
            setTimeout(() => {
                player.classList.remove("error")
            }, 150)
    
        } else if (map[start[0]+1][start[1]] === "F") {
            main.classList.add("hidden")
            victoryScreen.classList.remove("hidden")
        } else {
            walkUpDown += 50
            player.style.transform = `translate(${walkLeftRight}px, ${walkUpDown}px)`
            start[0] +=1
        }

    } else if (keyPress === "ArrowLeft") {
        if (map[start[0]][start[1]-1] === "W") {
            player.classList.add("error")
            setTimeout(() => {
                player.classList.remove("error")
            }, 150)
        } else if (start[1]-1 <0) {
            player.classList.add("error")
            setTimeout(() => {
                player.classList.remove("error")
            }, 150)
    
        } else if (map[start[0]][start[1]-1] === "F") {
            main.classList.add("hidden")
            victoryScreen.classList.remove("hidden")
        } else {
            walkLeftRight -= 50
            player.style.transform = `translate(${walkLeftRight}px, ${walkUpDown}px)`
            start[1] -=1
        }

    } else if (keyPress === "ArrowRight") {
        if (map[start[0]][start[1]+1] === "W") {
            player.classList.add("error")
            setTimeout(() => {
                player.classList.remove("error")
            }, 150)
        } else if (start[1]+1 > map[start[0]].length) {
            player.classList.add("error")
            setTimeout(() => {
                player.classList.remove("error")
            }, 150)
    
        } else if (map[start[0]][start[1]+1] === "F") {
            main.classList.add("hidden")
            victoryScreen.classList.remove("hidden")
        } else {
            walkLeftRight += 50
            player.style.transform = `translate(${walkLeftRight}px, ${walkUpDown}px)`
            start[1] +=1
        }

    }
})

btn.addEventListener("click", () => {
    location.reload()
})