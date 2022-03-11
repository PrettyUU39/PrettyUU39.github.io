(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(factory);
    } else if (typeof exports === 'object') {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like enviroments that support module.exports,
            // like Node.
            module.exports = factory();
    } else {
            // Browser globals (root is window)
            root.imu = factory();
}
}(this, function () {
var measurements = {
            ax: null,
            ay: null,
            az: null,
            wx: null,
            wy: null,
            wz: null,
            delta_t: null,
            alpha: null,
            beta: null,
            gamma: null
        },
        interval = null;

var imu = {};

/**
 * @public
 */
imu.frequency = 10; //ms

imu.startTracking = function(callback) {
    interval = setInterval(function() {
        callback(measurements);
    }, imu.frequency);
};

imu.stopTracking = function() {
    clearInterval(interval);
};

/**
 * @private
 */
// it doesn't make sense to depend on a "window" module
// since deviceorientation & devicemotion make just sense in the browser
// so old school test used.
if (window && window.addEventListener) {
    function setupListeners() {
        function deviceMotionListener (e) {
            e.target.removeEventListener('devicemotion', deviceMotionListener, true);

            e.target.addEventListener('devicemotion', function(e) {
                measurements.ax = e.accelerationIncludingGravity.x;
                measurements.ay = e.accelerationIncludingGravity.y;
                measurements.az = e.accelerationIncludingGravity.z;
                measurements.wx = e.rotationRate.alpha * Math.PI / 180;
                measurements.wy = e.rotationRate.beta * Math.PI / 180;
                measurements.wz = e.rotationRate.gamma * Math.PI / 180;
                measurements.delta_t = e.interval;
            }, true);
        }
        function deviceOrientationListener (e) {
            e.target.removeEventListener('deviceorientation', deviceOrientationListener, true);

            e.target.addEventListener('deviceorientation', function(e) {
                measurements.alpha = e.alpha;
                measurements.beta = e.beta;
                measurements.gamma = e.gamma;
            }, true);
        }

        window.addEventListener('devicemotion', deviceMotionListener, true);
        window.addEventListener('deviceorientation', deviceOrientationListener, true);
    }
    setupListeners();
}

return imu;
}));