module.exports = EntypoCcSa;
function EntypoCcSa(){}
EntypoCcSa.prototype.view = __dirname;
EntypoCcSa.prototype.init = function(model) {
	model.setNull("size", 20);
}