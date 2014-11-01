module.exports = Entypo;
function Entypo(){};
Entypo.prototype.view = __dirname;
Entypo.prototype.init = function(model) {
	model.setNull("size", 20);
	model.setNull("icon", "blocked");
};