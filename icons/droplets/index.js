module.exports = EntypoDroplets;
function EntypoDroplets(){}
EntypoDroplets.prototype.view = __dirname;
EntypoDroplets.prototype.init = function(model) {
	model.setNull("size", 20);
}