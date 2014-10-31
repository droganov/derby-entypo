module.exports = EntypoCcPd;
function EntypoCcPd(){}
EntypoCcPd.prototype.view = __dirname;
EntypoCcPd.prototype.init = function(model) {
	model.setNull("size", 20);
}