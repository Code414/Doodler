var s = function (sketch) {
    let col = "Black";
    sketch.setup = function () {
        document.body.style['userSelect'] = 'none';
        let h = document.body.clientHeight;
        let c = sketch.createCanvas(sketch.windowWidth, h);
        c.position(0, 0);
        c.style('pointer-events', 'none');
        sketch.clear();
    }

    sketch.draw = function () {
        sketch.stroke(col);
        sketch.strokeWeight(4);
        if (sketch.mouseIsPressed)
            sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
    sketch.keyPressed = function () {
        if (sketch.key == 'e')
            sketch.clear();
        else if (sketch.key == 'r')
            col = "Red";
        else if (sketch.key == 'b')
            col = "Blue";
        else if (sketch.key == 'g')
            col = "Green";
        else if (sketch.key == 'z')
            col = "Black";
    }
}

var myp5 = new p5(s);