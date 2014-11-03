module.exports = EntypoThunder;
function EntypoThunder(){}
EntypoThunder.prototype.view = __dirname;
EntypoThunder.prototype.init = function(model) {
	model.setNull("size", 20);
}