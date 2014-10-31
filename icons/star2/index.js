module.exports = EntypoStar2;
function EntypoStar2(){}
EntypoStar2.prototype.view = __dirname;
EntypoStar2.prototype.init = function(model) {
	model.setNull("size", 20);
}