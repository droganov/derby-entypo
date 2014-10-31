module.exports = EntypoMouse;
function EntypoMouse(){}
EntypoMouse.prototype.view = __dirname;
EntypoMouse.prototype.init = function(model) {
	model.setNull("size", 20);
}