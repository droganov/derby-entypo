module.exports = EntypoPalette;
function EntypoPalette(){}
EntypoPalette.prototype.view = __dirname;
EntypoPalette.prototype.init = function(model) {
	model.setNull("size", 20);
}