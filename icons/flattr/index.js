module.exports = EntypoFlattr;
function EntypoFlattr(){}
EntypoFlattr.prototype.view = __dirname;
EntypoFlattr.prototype.init = function(model) {
	model.setNull("size", 20);
}