module.exports = EntypoArrowRight;
function EntypoArrowRight(){}
EntypoArrowRight.prototype.view = __dirname;
EntypoArrowRight.prototype.init = function(model) {
	model.setNull("size", 20);
}