
const burst = new mojs.Burst({
  radius: {0: 130},
  count: 20,
  children: {
    shape: 'cross',
    stroke: 'teal',
    strokeWidth: {6: 0},
    duration: 3000,
    radius: {30: 5},
    angle: {360: 0}
}
});

const burst2 = new mojs.Burst({
  radius: {0: 200},
  count: 16,
  children: {
    shape: 'zigzag',
    points: 8,
    stroke: {'magenta': 'pink'},
    fill: 'none',
    strokeWidth: {6: 0},
    duration: 3000,
    radius: {30: 10},
    angle: {'-360': 0}
}
});

const burst3 = new mojs.Burst({
  radius: {0: 200},
  count: 6,
  children: {
    fill: 'cyan',
    opacity: {1: 0},
    duration: 3200,
    radius: {15: 5},
    angle: {'-360': 0}
}
});

const circle_obj = {
  radius: {0: 200},
  fill: 'none',
  stroke: 'yellow',
  opacity: {1: 0},
  duration: 3500
};


const circle = new mojs.Shape({
    radius: {0: 200},
    fill: 'none',
    stroke: 'yellow',
    opacity: {1: 0},
    duration: 3500
});

const circle2 = new mojs.Shape({
    radius: {0: 200},
    fill: 'none',
    stroke: 'yellow',
    opacity: {1: 0},
    duration: 3500,
    delay: 400
});

const timeline = new mojs.Timeline({
  repeat: 999
}).add(burst, burst2, circle, circle2, burst3).play();
