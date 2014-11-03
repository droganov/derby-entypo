module.exports = EntypoTools;
function EntypoTools(){}
EntypoTools.prototype.view = __dirname;
EntypoTools.prototype.init = function(model) {
	model.setNull("size", 20);
}