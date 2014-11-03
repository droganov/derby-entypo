module.exports = EntypoFolder;
function EntypoFolder(){}
EntypoFolder.prototype.view = __dirname;
EntypoFolder.prototype.init = function(model) {
	model.setNull("size", 20);
}