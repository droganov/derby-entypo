module.exports = EntypoLinkedin2;
function EntypoLinkedin2(){}
EntypoLinkedin2.prototype.view = __dirname;
EntypoLinkedin2.prototype.init = function(model) {
	model.setNull("size", 20);
}