const dodger = document.getElementById('dodger')
document.addEventListener('keydown', e => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
})
 
function moveDodgerLeft (event) {
    let position = parseInt(dodger.style.left, 10)
    if (position > 0) {
        position = position - 10;
        dodger.style.left = `${position}px`
    }
}

function moveDodgerRight() {
    let position = parseInt(dodger.style.left, 10)
    if (position < 360) {
        position = position + 10;
        dodger.style.left = `${position}px`
    }
}
    
