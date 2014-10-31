module.exports = EntypoCcNcEu;
function EntypoCcNcEu(){}
EntypoCcNcEu.prototype.view = __dirname;
EntypoCcNcEu.prototype.init = function(model) {
	model.setNull("size", 20);
}