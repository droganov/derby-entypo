module.exports = EntypoGithub;
function EntypoGithub(){}
EntypoGithub.prototype.view = __dirname;
EntypoGithub.prototype.init = function(model) {
	model.setNull("size", 20);
}