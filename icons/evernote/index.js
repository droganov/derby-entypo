module.exports = EntypoEvernote;
function EntypoEvernote(){}
EntypoEvernote.prototype.view = __dirname;
EntypoEvernote.prototype.init = function(model) {
	model.setNull("size", 20);
}