module.exports = EntypoFacebook2;
function EntypoFacebook2(){}
EntypoFacebook2.prototype.view = __dirname;
EntypoFacebook2.prototype.init = function(model) {
	model.setNull("size", 20);
}