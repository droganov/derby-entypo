module.exports = EntypoFirst;
function EntypoFirst(){}
EntypoFirst.prototype.view = __dirname;
EntypoFirst.prototype.init = function(model) {
	model.setNull("size", 20);
}