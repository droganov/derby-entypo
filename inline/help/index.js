module.exports = EntypoHelp;
function EntypoHelp(){}
EntypoHelp.prototype.view = __dirname;
EntypoHelp.prototype.init = function(model) {
	model.setNull("size", 20);
}