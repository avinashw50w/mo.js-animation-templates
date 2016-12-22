
const outer_circ1 = new mojs.Shape({
    shape: 'circle',
    radius: {0 : 290},
    fill: 'none',
    stroke: 'yellow',
    opacity: {1 : 0},
    duration: 4000
});

const outer_circ2 = new mojs.Shape({
    shape: 'circle',
    radius: {0 : 290},
    fill: 'none',
    stroke: 'yellow',
    opacity: {1 : 0},
    duration: 4000,
    delay: 200
});

// const burst = new mojs.Burst({
//       radius: {0: 300},
//       count: 20,
//       children: {
//         shape: 'circle',
//         fill: 'teal',
//         radius: {15: 5},
//         angle: {360: 0},
//         duration: 4000
//       }
// });

const rec = new mojs.Shape({
    shape: 'rect',
    radius: {0: 200},
    fill: 'none',
    stroke: 'magenta',
    angle: {360 : 0},
    opacity: {1: 0},
    duration: 4000
});

const rec1 = new mojs.Shape({
    shape: 'rect',
    radius: {0: 200},
    fill: 'none',
    stroke: 'cyan',
    angle: {0 : 360},
    opacity: {1: 0},
    duration: 4000
});

const circ = new mojs.Shape({
    shape: 'circle',
    radius: {0 : 140},
    fill: 'none',
    stroke: {'red' : 'yellow'},
    opacity: {1 : 0},
    duration: 4000
});

const rec2 = new mojs.Shape({
    shape: 'rect',
    radius: {0: 140},
    fill: 'none',
    stroke: 'magenta',
    angle: {'-360' : 90},
    opacity: {1: 0},
    duration: 4000
});

const rec3 = new mojs.Shape({
    shape: 'rect',
    radius: {0: 140},
    fill: 'none',
    stroke: 'cyan',
    angle: {90 : '-360'},
    opacity: {1: 0},
    duration: 4000
});

const circ2 = new mojs.Shape({
    shape: 'circle',
    radius: {0 : 80},
    fill: 'none',
    stroke: 'yellow',
    opacity: {1 : 0},
    duration: 4000
});

const rec4 = new mojs.Shape({
    shape: 'rect',
    radius: {0: 80},
    fill: 'none',
    stroke: 'magenta',
    angle: {360 : '-180'},
    opacity: {1: 0},
    duration: 4000
});

const rec5 = new mojs.Shape({
    shape: 'rect',
    radius: {0: 80},
    fill: 'none',
    stroke: 'cyan',
    angle: {'-180' : 360},
    opacity: {1: 0},
    duration: 4000
});

const circ3 = new mojs.Shape({
    shape: 'circle',
    radius: {0 : 40},
    fill: 'none',
    stroke: 'yellow',
    opacity: {1 : 0},
    duration: 4000,
    delay: 500
});

const circ4 = new mojs.Shape({
    shape: 'circle',
    radius: {0 : 20},
    fill: 'cyan',
    opacity: {1 : 0},
    duration: 4000,
    delay : 500
});

const timeline = new mojs.Timeline({
    repeat: 20
})
    .add(outer_circ1, outer_circ2, rec, rec1, circ, 
        rec2, rec3, circ2, rec4, rec5, circ3, circ4)
    .play();