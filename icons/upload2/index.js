module.exports = EntypoUpload2;
function EntypoUpload2(){}
EntypoUpload2.prototype.view = __dirname;
EntypoUpload2.prototype.init = function(model) {
	model.setNull("size", 20);
}