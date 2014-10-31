module.exports = EntypoFacebook3;
function EntypoFacebook3(){}
EntypoFacebook3.prototype.view = __dirname;
EntypoFacebook3.prototype.init = function(model) {
	model.setNull("size", 20);
}