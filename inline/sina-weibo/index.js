module.exports = EntypoSinaWeibo;
function EntypoSinaWeibo(){}
EntypoSinaWeibo.prototype.view = __dirname;
EntypoSinaWeibo.prototype.init = function(model) {
	model.setNull("size", 20);
}