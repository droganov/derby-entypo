module.exports = EntypoHourglass;
function EntypoHourglass(){}
EntypoHourglass.prototype.view = __dirname;
EntypoHourglass.prototype.init = function(model) {
	model.setNull("size", 20);
}