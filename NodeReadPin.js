var gpio = require('./node_modules/rpi-gpio/rpi-gpio');

gpio.setMode(gpio.MODE_RPI);
gpio.setup(40, gpio.DIR_IN, readInput);

function readInput() {
		gpio.read(40, function(err, value) {
			console.log('Pin 40 value: ' + value)
		});
	}