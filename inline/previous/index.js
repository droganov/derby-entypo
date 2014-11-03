module.exports = EntypoPrevious;
function EntypoPrevious(){}
EntypoPrevious.prototype.view = __dirname;
EntypoPrevious.prototype.init = function(model) {
	model.setNull("size", 20);
}