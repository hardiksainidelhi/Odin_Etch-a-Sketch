const container = document.querySelector('#container')
const GRID_SIDE_LENGTH = 200
const startButton = document.querySelector('#start')

startButton.addEventListener('click',drawGrid)

function drawGrid() {
    
    container.innerHTML = ''
    const squarePerSide = +prompt('enter no. of squares per side (atmost 100): ')

    if (squarePerSide > 100){
        alert('sides must be atmost 100 ')
        return
    }

    // create base canvas matrix
    function createGrid(squarePerSide) {

        const gridContainerDiv = document.createElement('div')
        gridContainerDiv.classList.add('grid')

        for (let i = 0; i < squarePerSide; i++) {
            const parentRowDiv = document.createElement('div')
            for (let j = 0; j < squarePerSide; j++) {

                const childColumnDiv = document.createElement('div')
                childColumnDiv.style.opacity = 1

                parentRowDiv.appendChild(childColumnDiv)
            }
            gridContainerDiv.appendChild(parentRowDiv)
        }

        gridContainerDiv.style.height = `${GRID_SIDE_LENGTH}px`
        gridContainerDiv.style.width = `${GRID_SIDE_LENGTH}px`

        return gridContainerDiv
    }
    
    // generate random color
    function createColor() {
        const randomNumber = () => Math.floor(Math.random()*255)
        return `rgb(${randomNumber()} ${randomNumber()} ${randomNumber()})`
    }

    function reduceOpacity(element) {
        if (element.style.opacity > 0){
            element.style.opacity -= 0.1
        }
    }

    container.appendChild(createGrid(squarePerSide))

    const gridElements = document.querySelectorAll('.grid > div > div')

    gridElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = createColor()
            reduceOpacity(element)
            
        })
    })
}



