// grid function
function createGrid(blocks) {
    const grid = document.querySelector('.grid')

<<<<<<< HEAD
// crate 16 rows each with 16 div block in them
let grid = 16

rowLoop:
for (let i = 0; i < grid; i++) {
    const row = document.createElement('div')
    container.appendChild(row)

    columnLoop:
    for (let j = 1; j <= grid; j++) {
        // crate div
        const div = document.createElement('div')
        div.setAttribute('class', 'item')
        // div.textContent = j
        // add div to container
        row.appendChild(div)
=======
    for (let i = 0; i < blocks; i++) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row')
        grid.appendChild(row)

        for (let j = 0; j < blocks; j++) {
            const cell = document.createElement('div')
            cell.setAttribute('class', 'cell')
            // cell.textContent = 'cell' + j

            row.appendChild(cell)
        }

>>>>>>> dynamic-pixels
    }
}


function removeGrid(){
    const rows = document.querySelectorAll('.row')
    rows.forEach((row) => {
        row.remove()
    })
}

function setGrid(){
    let grid = prompt('set grid')

<<<<<<< HEAD
rowLoop:
for (let i = 0; i < grid; i++) {
    const row = document.createElement('div')
    container.appendChild(row)

    columnLoop:
    for (let j = 1; j <= grid; j++) {
        // crate div
        const div = document.createElement('div')
        div.setAttribute('class', 'item')
        // div.textContent = j
        // add div to container
        row.appendChild(div)
    }
}
}
=======
function draw() {
    const cell = document.querySelectorAll('.cell')
    cell.forEach((cells) => {
        cells.addEventListener('mouseover', () => {
            cells.setAttribute("style", "background-color: black;")

        })
    })
}

function eraseCells() {
    const cell = document.querySelectorAll('.cell')
    cell.forEach((cells) => {
        cells.setAttribute("style", "background-color: lightgrey;")
    })
}

// genereate grid 16x16
createGrid(16)


// get grid number
const max = 64

const grid = document.querySelector('#gridBtn')
grid.onclick = () => {
    let gridCells = prompt('Enter a grid number (max 64):')

    // genereate new grid max 64
    if (gridCells > 64) {
        removeGrid()
        createGrid(64)
        draw()

    } else {
        removeGrid()
        createGrid(gridCells)
        draw()

    }

}

// cell click event
draw()

// eraser button
const eraserBtn = document.querySelector('#eraserBtn')
eraserBtn.onclick = eraseCells
>>>>>>> dynamic-pixels
