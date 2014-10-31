module.exports = EntypoHouse;
function EntypoHouse(){}
EntypoHouse.prototype.view = __dirname;
EntypoHouse.prototype.init = function(model) {
	model.setNull("size", 20);
}