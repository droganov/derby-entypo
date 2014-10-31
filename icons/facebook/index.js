module.exports = EntypoFacebook;
function EntypoFacebook(){}
EntypoFacebook.prototype.view = __dirname;
EntypoFacebook.prototype.init = function(model) {
	model.setNull("size", 20);
}