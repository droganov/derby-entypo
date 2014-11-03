module.exports = EntypoArchive;
function EntypoArchive(){}
EntypoArchive.prototype.view = __dirname;
EntypoArchive.prototype.init = function(model) {
	model.setNull("size", 20);
}