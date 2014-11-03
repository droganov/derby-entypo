module.exports = EntypoArrow2;
function EntypoArrow2(){}
EntypoArrow2.prototype.view = __dirname;
EntypoArrow2.prototype.init = function(model) {
	model.setNull("size", 20);
}