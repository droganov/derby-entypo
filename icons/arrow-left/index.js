module.exports = EntypoArrowLeft;
function EntypoArrowLeft(){}
EntypoArrowLeft.prototype.view = __dirname;
EntypoArrowLeft.prototype.init = function(model) {
	model.setNull("size", 20);
}