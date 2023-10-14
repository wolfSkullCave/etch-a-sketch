// create a 16x16 grid
const container = document.querySelector('#container')

// crate 16 rows each with 16 div block in them
rowLoop:
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div')
    container.appendChild(row)

    columnLoop:
    for (let j = 1; j <= 16; j++) {
        // crate div
        const div = document.createElement('div')
        div.setAttribute('class', 'item')
        // div.textContent = j
        // add div to container
        row.appendChild(div)
    }
}


// trigger event on click
const pixels = document.querySelectorAll('.item')

pixels.forEach((pixel) => {
    pixel.onclick = () => pixel.style.cssText = "background: black;"

    pixel.addEventListener('mouseout', function(){
        this.style.cssText = "background: black"
    })
})


// eraser button
const eraser = document.querySelector('#eraser')
eraser.addEventListener('click', function(){
    pixels.forEach( (pixel) => {
        pixel.style.cssText = "background: lightgrey"
    })
})

function testFunction() {
    console.log('test')
}


