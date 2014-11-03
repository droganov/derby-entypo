module.exports = EntypoCross2;
function EntypoCross2(){}
EntypoCross2.prototype.view = __dirname;
EntypoCross2.prototype.init = function(model) {
	model.setNull("size", 20);
}