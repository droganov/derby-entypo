module.exports = EntypoBook2;
function EntypoBook2(){}
EntypoBook2.prototype.view = __dirname;
EntypoBook2.prototype.init = function(model) {
	model.setNull("size", 20);
}