module.exports = EntypoArrow;
function EntypoArrow(){}
EntypoArrow.prototype.view = __dirname;
EntypoArrow.prototype.init = function(model) {
	model.setNull("size", 20);
}