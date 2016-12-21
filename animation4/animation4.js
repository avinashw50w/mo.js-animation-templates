'use strict';

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    } return target;
};

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value, enumerable: true, configurable: true, writable: true
        });
    }
    else {
        obj[key] = value;
    }
    return obj;
}

var OPTS = {
  fill: 'none',
  radius: 30,
  strokeWidth: { 50: 0 },
  scale: { 0: 1 },
  duration: 500,
  left: 0, top: 0,
  easing: 'cubic.out'
};

var mainCircle = new mojs.Shape(_extends({}, OPTS, {
  stroke: 'cyan'
}));

var smallCircles = [];
var colors = ['deeppink', 'magenta', 'yellow', 'orange', 'red'];

for (var i = 0; i < 5; i++) {
  smallCircles.push(new mojs.Shape(_extends({}, OPTS, _defineProperty({
    parent: mainCircle.el,
    radius: { 0: 40 },
    strokeWidth: { 30: 0 },
    left: '50%', top: '50%',
    stroke: colors[i % colors.length],
    delay: 'rand(0, 350)',
    x: 'rand(-50, 50)',
    y: 'rand(-50, 50)'
  }, 'radius', 'rand(5, 20)'))));
}

document.addEventListener('click', function (e) {

  mainCircle.tune({ x: e.pageX, y: e.pageY }).replay();

  for (var _i = 0; _i < smallCircles.length; _i++) {
    smallCircles[_i].generate().replay();
  }
});
