const circle = new mojs.Shape({
    radius: {0: 200},
    fill: 'none',
    stroke: 'yellow',
    opacity: {1: 0},
    duration: 1500
});

const circle2 = new mojs.Shape({
    radius: {0: 200},
    fill: 'none',
    stroke: 'yellow',
    opacity: {1: 0},
    duration: 1500,
    delay: 500
});

const circle3 = new mojs.Shape({
    radius: {0: 200},
    fill: 'none',
    stroke: 'yellow',
    opacity: {1: 0},
    duration: 1500,
    delay: 1000
});

const circle4 = new mojs.Shape({
    radius: {0: 200},
    fill: 'none',
    stroke: 'yellow',
    opacity: {1: 0},
    duration: 1500,
    delay: 1500
});

const timeline = new mojs.Timeline({
    repeat: 1500
}).add(circle, circle2, circle3, circle4).play();
