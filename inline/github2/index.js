module.exports = EntypoGithub2;
function EntypoGithub2(){}
EntypoGithub2.prototype.view = __dirname;
EntypoGithub2.prototype.init = function(model) {
	model.setNull("size", 20);
}