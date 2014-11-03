module.exports = EntypoMail;
function EntypoMail(){}
EntypoMail.prototype.view = __dirname;
EntypoMail.prototype.init = function(model) {
	model.setNull("size", 20);
}