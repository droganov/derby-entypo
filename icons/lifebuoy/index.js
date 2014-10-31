module.exports = EntypoLifebuoy;
function EntypoLifebuoy(){}
EntypoLifebuoy.prototype.view = __dirname;
EntypoLifebuoy.prototype.init = function(model) {
	model.setNull("size", 20);
}