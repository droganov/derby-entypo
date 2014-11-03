module.exports = EntypoFlickr2;
function EntypoFlickr2(){}
EntypoFlickr2.prototype.view = __dirname;
EntypoFlickr2.prototype.init = function(model) {
	model.setNull("size", 20);
}