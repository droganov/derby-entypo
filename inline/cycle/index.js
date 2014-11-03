module.exports = EntypoCycle;
function EntypoCycle(){}
EntypoCycle.prototype.view = __dirname;
EntypoCycle.prototype.init = function(model) {
	model.setNull("size", 20);
}