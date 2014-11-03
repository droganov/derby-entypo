module.exports = EntypoRss;
function EntypoRss(){}
EntypoRss.prototype.view = __dirname;
EntypoRss.prototype.init = function(model) {
	model.setNull("size", 20);
}