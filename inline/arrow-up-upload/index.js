module.exports = EntypoArrowUpUpload;
function EntypoArrowUpUpload(){}
EntypoArrowUpUpload.prototype.view = __dirname;
EntypoArrowUpUpload.prototype.init = function(model) {
	model.setNull("size", 20);
}