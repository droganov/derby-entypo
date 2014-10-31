module.exports = EntypoArrowDown;
function EntypoArrowDown(){}
EntypoArrowDown.prototype.view = __dirname;
EntypoArrowDown.prototype.init = function(model) {
	model.setNull("size", 20);
}