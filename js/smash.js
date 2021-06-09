canvas.onclick = (event) => {
    let clickedX = event.clientX;
    let clickedY = event.clientY;


    //Need to fix not in terms of x and y but whole diameter
    for (let i = 0; i < ants.length; i++) {
        let ant = ants[i];
        // console.log("x" + "" + ant.x + " " + "y" + " " + ant.y)
        if (clickedX >= ant.x &&
            clickedX <= (ant.x + (RADIUS * 2) + 20) &&
            clickedY >= ant.y &&
            clickedY <= (ant.y + (RADIUS * 2) + 20)
        ) {
            ants.splice(i, 1);
        }
    }

    console.log(clickedX, clickedY)


}