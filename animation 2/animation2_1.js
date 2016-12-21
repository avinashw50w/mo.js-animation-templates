const burst = new mojs.Burst({
    left: 0, top: 0,
    radius: {0: 300},
    count: 25,
    children: {
        shape: 'circle',
        fill: 'teal',
        radius: {15: 5},
        duration: 3000
    }
});

const burst1 = new mojs.Burst({
    left: 0, top: 0,
    radius: {0: 300},
    angle: 45,
    count: 20,
    children: {
        shape: 'cross',
        fill: 'none',
        stroke: 'magenta',
        strokeWidth: {6: 0},
        radius: {30: 5},
        duration: 2500
    }
});

const burst2 = new mojs.Burst({
    left: 0, top: 0,
    radius: {0: 300},
    count: 20,
    children: {
        shape: 'circle',
        fill: 'none',
        stroke: 'orange',
        strokeWidth : {4: 0},
        radius: {20: 5},
        duration: 4000
    }
});


const circle = new mojs.Shape({
    radius: {0: 200},
    fill: 'none',
    stroke: 'yellow',
    strokeWidth: {6: 0},
    opacity: {1: 0},
    left: 0, top: 0,
    duration: 1500
});


const circle2 = new mojs.Shape({
    radius: {0: 200},
    fill: 'none',
    stroke: 'yellow',
    strokeWidth: {6: 0},
    opacity: {1: 0},
    duration: 1500,
    left: 0, top: 0,
    delay: 200
});

const circle3 = new mojs.Shape({
    radius: {0: 200},
    fill: 'none',
    stroke: 'yellow',
    strokeWidth: {6: 0},
    opacity: {1: 0},
    duration: 1500,
    left: 0, top: 0,
    delay: 500
});

const circle4 = new mojs.Shape({
    radius: {0: 200},
    fill: 'none',
    stroke: 'yellow',
    strokeWidth: {6: 0},
    opacity: {1: 0},
    duration: 1500,
    left: 0, top: 0,
    delay: 900
});

const timeline = new mojs.Timeline({ speed: 1.5 });

timeline.add( burst, circle, burst1, circle2, burst2, circle3, circle4);

document.addEventListener('click', function(e) {

    const coord = { x: e.pageX, y: e.pageY };
    circle.tune(coord);
    circle2.tune(coord);
    circle3.tune(coord);
    circle4.tune(coord);
    burst.tune(coord);
    burst1.tune(coord);
    burst2.tune(coord);
    timeline.replay();
});
