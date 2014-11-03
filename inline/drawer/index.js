module.exports = EntypoDrawer;
function EntypoDrawer(){}
EntypoDrawer.prototype.view = __dirname;
EntypoDrawer.prototype.init = function(model) {
	model.setNull("size", 20);
}