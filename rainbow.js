const header = document.querySelector("header")

const colorChange = (color1, color2, num) => {
    color1 = color1.match(/\d+/g)
    color2 = color2.match(/\d+/g)
    const colorArr = []
    let r = Number(color1[0]);
    let g = Number(color1[1]);
    let b = Number(color1[2]);
    const rRate = (color1[0] - color2[0]) / num;
    const gRate = (color1[1] - color2[1]) / num;
    const bRate = (color1[2] - color2[2]) / num;

    for(var i=0; i<num; i++) {
      r-= Math.floor(rRate)
      g-= Math.floor(gRate)
      b -= Math.floor(bRate)
      let color = `rgb(${r}, ${g}, ${b})`
      colorArr.push(color)
    }
    
    return colorArr
}

const colors = colorChange('rgb(100, 0, 0)', 'rgb(50, 100, 0)', 220)

for(let i=0; i<220; i++){
    let tile = document.createElement("div")
    tile.className = "tile"
    let front = document.createElement("div")
    front.className = "front"
    let back = document.createElement("div")
    console.log(colors[i])
    back.style.backgroundColor = colors[i]
    back.className = "back"
    tile.appendChild(front)
    tile.appendChild(back)
    header.appendChild(tile)
    $(".tile").flip({axis: 'y', trigger: 'hover'})
}

