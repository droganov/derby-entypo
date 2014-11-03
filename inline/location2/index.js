module.exports = EntypoLocation2;
function EntypoLocation2(){}
EntypoLocation2.prototype.view = __dirname;
EntypoLocation2.prototype.init = function(model) {
	model.setNull("size", 20);
}