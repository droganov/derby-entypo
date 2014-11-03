module.exports = EntypoFlickr;
function EntypoFlickr(){}
EntypoFlickr.prototype.view = __dirname;
EntypoFlickr.prototype.init = function(model) {
	model.setNull("size", 20);
}