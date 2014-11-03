module.exports = EntypoDropbox;
function EntypoDropbox(){}
EntypoDropbox.prototype.view = __dirname;
EntypoDropbox.prototype.init = function(model) {
	model.setNull("size", 20);
}