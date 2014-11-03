module.exports = EntypoStar;
function EntypoStar(){}
EntypoStar.prototype.view = __dirname;
EntypoStar.prototype.init = function(model) {
	model.setNull("size", 20);
}