module.exports = EntypoProgress2;
function EntypoProgress2(){}
EntypoProgress2.prototype.view = __dirname;
EntypoProgress2.prototype.init = function(model) {
	model.setNull("size", 20);
}