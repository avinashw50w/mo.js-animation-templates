document.addEventListener('click', function(e) {

    const burst = new mojs.Burst({
        radius: {0: 300},
        count: 25,
        children: {
            shape: 'circle',
            fill: 'teal',
            radius: {15: 5},
            duration: 3000
        }
    }).play();

    const burst1 = new mojs.Burst({
        radius: {0: 300},
        count: 20,
        children: {
            shape: 'cross',
            fill: 'none',
            stroke: 'magenta',
            strokeWidth: {6: 0},
            radius: {30: 5},
            angle: {360: 0},
            duration: 2500
        }
    }).play();

    const burst2 = new mojs.Burst({
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
    }).play();


    const circle = new mojs.Shape({
        radius: {0: 200},
        fill: 'none',
        stroke: 'yellow',
        strokeWidth: {6: 0},
        opacity: {1: 0},
        duration: 1500
    }).play();


    const circle2 = new mojs.Shape({
        radius: {0: 200},
        fill: 'none',
        stroke: 'yellow',
        strokeWidth: {6: 0},
        opacity: {1: 0},
        duration: 1500,
        delay: 200
    }).play();

    const circle3 = new mojs.Shape({
        radius: {0: 200},
        fill: 'none',
        stroke: 'yellow',
        strokeWidth: {6: 0},
        opacity: {1: 0},
        duration: 1500,
        delay: 500
    }).play();

    const circle4 = new mojs.Shape({
        radius: {0: 200},
        fill: 'none',
        stroke: 'yellow',
        strokeWidth: {6: 0},
        opacity: {1: 0},
        duration: 1500,
        delay: 900
    }).play();

});
