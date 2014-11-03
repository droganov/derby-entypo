module.exports = EntypoBattery;
function EntypoBattery(){}
EntypoBattery.prototype.view = __dirname;
EntypoBattery.prototype.init = function(model) {
	model.setNull("size", 20);
}