module.exports = EntypoDirections;
function EntypoDirections(){}
EntypoDirections.prototype.view = __dirname;
EntypoDirections.prototype.init = function(model) {
	model.setNull("size", 20);
}