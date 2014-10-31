module.exports = EntypoMenu;
function EntypoMenu(){}
EntypoMenu.prototype.view = __dirname;
EntypoMenu.prototype.init = function(model) {
	model.setNull("size", 20);
}