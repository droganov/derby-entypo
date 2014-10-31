module.exports = EntypoCircles;
function EntypoCircles(){}
EntypoCircles.prototype.view = __dirname;
EntypoCircles.prototype.init = function(model) {
	model.setNull("size", 20);
}