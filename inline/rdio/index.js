module.exports = EntypoRdio;
function EntypoRdio(){}
EntypoRdio.prototype.view = __dirname;
EntypoRdio.prototype.init = function(model) {
	model.setNull("size", 20);
}