module.exports = EntypoThermometer;
function EntypoThermometer(){}
EntypoThermometer.prototype.view = __dirname;
EntypoThermometer.prototype.init = function(model) {
	model.setNull("size", 20);
}