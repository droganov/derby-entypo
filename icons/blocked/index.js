module.exports = EntypoBlocked;
function EntypoBlocked(){}
EntypoBlocked.prototype.view = __dirname;
EntypoBlocked.prototype.init = function(model) {
	model.setNull("size", 20);
}