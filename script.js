let c = document.querySelector('#can');
let ctx = c.getContext("2d");
let lineColor
let lineWidth = 25
const form = document.getElementById('clear');
form.addEventListener('click', clearF);

function clearF() {
    ctx.clearRect(0, 0, 300, 300);
}

document.querySelector('#vol').oninput = function () {
    lineWidth = this.value
}

document.querySelector('#color').oninput = function () {
    lineColor = this.value
}

c.onmousedown = function (event) {
    c.onmousemove = function (event) {
        let x = event.offsetX
        let y = event.offsetY
        ctx.fillStyle = lineColor
        ctx.fillRect(x - 5, y - 5, lineWidth, lineWidth)
        ctx.fill()
    }
    c.onmouseup = function () {
        c.onmousemove = null
    }
}
