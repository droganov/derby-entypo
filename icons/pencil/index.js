module.exports = EntypoPencil;
function EntypoPencil(){}
EntypoPencil.prototype.view = __dirname;
EntypoPencil.prototype.init = function(model) {
	model.setNull("size", 20);
}