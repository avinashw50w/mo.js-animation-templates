'use strict';

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

var OPTS = {
  fill: 'none',
  radius: {0: 50},
  strokeWidth: { 30: 0 },
  angle: { 'rand(-35, -70)': 0 },
  duration: 800,
  left: 0, top: 0,
  easing: 'cubic.out'
};

var circle1 = new mojs.Shape(_extends({}, OPTS, {
  stroke: 'cyan'
}));

var circle2 = new mojs.Shape(_extends({}, OPTS, {
  radius: { 0: 30 },
  strokeWidth: { 15: 0 },
  stroke: 'magenta',
  delay: 'rand(75, 150)'
}));

document.addEventListener('click', function (e) {

  circle1.tune({ x: e.pageX, y: e.pageY }).replay();

  circle2.tune({ x: e.pageX, y: e.pageY }).replay();
});

