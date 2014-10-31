module.exports = EntypoAirplane;
function EntypoAirplane(){}
EntypoAirplane.prototype.view = __dirname;
EntypoAirplane.prototype.init = function(model) {
	model.setNull("size", 20);
}