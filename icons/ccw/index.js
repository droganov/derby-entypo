module.exports = EntypoCcw;
function EntypoCcw(){}
EntypoCcw.prototype.view = __dirname;
EntypoCcw.prototype.init = function(model) {
	model.setNull("size", 20);
}