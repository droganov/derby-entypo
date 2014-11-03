module.exports = EntypoCcNc;
function EntypoCcNc(){}
EntypoCcNc.prototype.view = __dirname;
EntypoCcNc.prototype.init = function(model) {
	model.setNull("size", 20);
}