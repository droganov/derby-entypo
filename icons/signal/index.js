module.exports = EntypoSignal;
function EntypoSignal(){}
EntypoSignal.prototype.view = __dirname;
EntypoSignal.prototype.init = function(model) {
	model.setNull("size", 20);
}