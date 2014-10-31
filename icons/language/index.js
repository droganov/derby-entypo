module.exports = EntypoLanguage;
function EntypoLanguage(){}
EntypoLanguage.prototype.view = __dirname;
EntypoLanguage.prototype.init = function(model) {
	model.setNull("size", 20);
}