module.exports = EntypoCross;
function EntypoCross(){}
EntypoCross.prototype.view = __dirname;
EntypoCross.prototype.init = function(model) {
	model.setNull("size", 20);
}