module.exports = EntypoMoon;
function EntypoMoon(){}
EntypoMoon.prototype.view = __dirname;
EntypoMoon.prototype.init = function(model) {
	model.setNull("size", 20);
}