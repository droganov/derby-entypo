module.exports = EntypoCcShare2;
function EntypoCcShare2(){}
EntypoCcShare2.prototype.view = __dirname;
EntypoCcShare2.prototype.init = function(model) {
	model.setNull("size", 20);
}