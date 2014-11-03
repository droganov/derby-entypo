module.exports = EntypoFlag;
function EntypoFlag(){}
EntypoFlag.prototype.view = __dirname;
EntypoFlag.prototype.init = function(model) {
	model.setNull("size", 20);
}