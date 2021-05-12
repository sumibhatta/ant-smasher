canvas.onclick = (event) => {
    // console.log('clicked')
    let clickedX = event.clientX;
    let clickedY = event.clientY;

    clickedX -= canvas.offsetLeft;
    clickedY -= canvas.offsetTop;
    // console.log(clickedX, clickedY)

    for (let i = 0; i < ants.length; i++) {
        d1 = ants[i].x - clickedX;
        // console.log(d1)
        // console.log(ants[1].x, ants[1].y)
        d2 = ants[i].y - clickedY;
        // console.log(d1, d2)
        d = Math.sqrt(d1**2+ d2**2);
        // console.log(RADIUS-d)
        // console.log(d)
        if (d < RADIUS) {
            // console.log(ants)
            ants.splice(i, 1);
            // console.log(ants)
        }
    }

}

