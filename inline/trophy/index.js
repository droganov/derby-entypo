module.exports = EntypoTrophy;
function EntypoTrophy(){}
EntypoTrophy.prototype.view = __dirname;
EntypoTrophy.prototype.init = function(model) {
	model.setNull("size", 20);
}