module.exports = EntypoCc;
function EntypoCc(){}
EntypoCc.prototype.view = __dirname;
EntypoCc.prototype.init = function(model) {
	model.setNull("size", 20);
}