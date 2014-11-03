module.exports = EntypoBox;
function EntypoBox(){}
EntypoBox.prototype.view = __dirname;
EntypoBox.prototype.init = function(model) {
	model.setNull("size", 20);
}