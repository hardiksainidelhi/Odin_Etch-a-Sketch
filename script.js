const container = document.querySelector('#container')
const rowCount = 16
const colCount = 16

function createGrid(rowCount,colCount){
    const gridContainerDiv = document.createElement('div')
    for (let i = 0; i < rowCount; i++){
        const parentRowDiv = document.createElement('div')
        for (let j = 0; j < colCount;j++){
            const childColumnDiv = document.createElement('div')
            parentRowDiv.appendChild(childColumnDiv)
        }
        gridContainerDiv.appendChild(parentRowDiv)
    }

    return gridContainerDiv
}

container.appendChild(createGrid(rowCount,colCount))