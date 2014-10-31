module.exports = EntypoLightBulb;
function EntypoLightBulb(){}
EntypoLightBulb.prototype.view = __dirname;
EntypoLightBulb.prototype.init = function(model) {
	model.setNull("size", 20);
}