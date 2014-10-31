module.exports = EntypoProgress3;
function EntypoProgress3(){}
EntypoProgress3.prototype.view = __dirname;
EntypoProgress3.prototype.init = function(model) {
	model.setNull("size", 20);
}