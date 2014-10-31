module.exports = EntypoAdjust;
function EntypoAdjust(){}
EntypoAdjust.prototype.view = __dirname;
EntypoAdjust.prototype.init = function(model) {
	model.setNull("size", 20);
}