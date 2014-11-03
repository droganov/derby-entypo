module.exports = EntypoUpload;
function EntypoUpload(){}
EntypoUpload.prototype.view = __dirname;
EntypoUpload.prototype.init = function(model) {
	model.setNull("size", 20);
}