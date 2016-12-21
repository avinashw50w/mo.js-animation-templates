const circ = document.addEventListener('click', function(e) {
    const circle = new mojs.Shape({
        radius: {0: 200},
        fill: 'none',
        stroke: 'yellow',
        opacity: {1: 0},
        duration: 1500
    }).play();

    const circle2 = new mojs.Shape({
        radius: {0: 200},
        fill: 'none',
        stroke: 'yellow',
        opacity: {1: 0},
        duration: 1500,
        delay: 500
    }).play();

    const circle3 = new mojs.Shape({
        radius: {0: 200},
        fill: 'none',
        stroke: 'yellow',
        opacity: {1: 0},
        duration: 1500,
        delay: 1000
    }).play();

    const circle4 = new mojs.Shape({
        radius: {0: 200},
        fill: 'none',
        stroke: 'yellow',
        opacity: {1: 0},
        duration: 1500,
        delay: 1500
    }).play();

});
