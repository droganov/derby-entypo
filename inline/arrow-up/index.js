module.exports = EntypoArrowUp;
function EntypoArrowUp(){}
EntypoArrowUp.prototype.view = __dirname;
EntypoArrowUp.prototype.init = function(model) {
	model.setNull("size", 20);
}