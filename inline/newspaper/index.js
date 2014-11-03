module.exports = EntypoNewspaper;
function EntypoNewspaper(){}
EntypoNewspaper.prototype.view = __dirname;
EntypoNewspaper.prototype.init = function(model) {
	model.setNull("size", 20);
}