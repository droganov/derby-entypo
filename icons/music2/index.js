module.exports = EntypoMusic2;
function EntypoMusic2(){}
EntypoMusic2.prototype.view = __dirname;
EntypoMusic2.prototype.init = function(model) {
	model.setNull("size", 20);
}