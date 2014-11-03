module.exports = EntypoSkype;
function EntypoSkype(){}
EntypoSkype.prototype.view = __dirname;
EntypoSkype.prototype.init = function(model) {
	model.setNull("size", 20);
}