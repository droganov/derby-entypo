module.exports = EntypoBehance;
function EntypoBehance(){}
EntypoBehance.prototype.view = __dirname;
EntypoBehance.prototype.init = function(model) {
	model.setNull("size", 20);
}