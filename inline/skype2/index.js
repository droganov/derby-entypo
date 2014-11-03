module.exports = EntypoSkype2;
function EntypoSkype2(){}
EntypoSkype2.prototype.view = __dirname;
EntypoSkype2.prototype.init = function(model) {
	model.setNull("size", 20);
}