module.exports = EntypoLinkedin;
function EntypoLinkedin(){}
EntypoLinkedin.prototype.view = __dirname;
EntypoLinkedin.prototype.init = function(model) {
	model.setNull("size", 20);
}