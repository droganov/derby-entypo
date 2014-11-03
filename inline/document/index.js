module.exports = EntypoDocument;
function EntypoDocument(){}
EntypoDocument.prototype.view = __dirname;
EntypoDocument.prototype.init = function(model) {
	model.setNull("size", 20);
}