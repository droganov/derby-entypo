module.exports = EntypoPause;
function EntypoPause(){}
EntypoPause.prototype.view = __dirname;
EntypoPause.prototype.init = function(model) {
	model.setNull("size", 20);
}