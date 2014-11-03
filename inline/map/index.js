module.exports = EntypoMap;
function EntypoMap(){}
EntypoMap.prototype.view = __dirname;
EntypoMap.prototype.init = function(model) {
	model.setNull("size", 20);
}