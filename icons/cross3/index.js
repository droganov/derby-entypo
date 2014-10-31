module.exports = EntypoCross3;
function EntypoCross3(){}
EntypoCross3.prototype.view = __dirname;
EntypoCross3.prototype.init = function(model) {
	model.setNull("size", 20);
}