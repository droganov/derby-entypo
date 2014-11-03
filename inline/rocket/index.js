module.exports = EntypoRocket;
function EntypoRocket(){}
EntypoRocket.prototype.view = __dirname;
EntypoRocket.prototype.init = function(model) {
	model.setNull("size", 20);
}