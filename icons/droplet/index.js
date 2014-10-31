module.exports = EntypoDroplet;
function EntypoDroplet(){}
EntypoDroplet.prototype.view = __dirname;
EntypoDroplet.prototype.init = function(model) {
	model.setNull("size", 20);
}