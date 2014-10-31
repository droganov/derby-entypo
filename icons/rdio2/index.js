module.exports = EntypoRdio2;
function EntypoRdio2(){}
EntypoRdio2.prototype.view = __dirname;
EntypoRdio2.prototype.init = function(model) {
	model.setNull("size", 20);
}