module.exports = EntypoText2;
function EntypoText2(){}
EntypoText2.prototype.view = __dirname;
EntypoText2.prototype.init = function(model) {
	model.setNull("size", 20);
}