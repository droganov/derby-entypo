module.exports = EntypoSuitcase;
function EntypoSuitcase(){}
EntypoSuitcase.prototype.view = __dirname;
EntypoSuitcase.prototype.init = function(model) {
	model.setNull("size", 20);
}