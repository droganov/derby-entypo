module.exports = EntypoCcNcJp;
function EntypoCcNcJp(){}
EntypoCcNcJp.prototype.view = __dirname;
EntypoCcNcJp.prototype.init = function(model) {
	model.setNull("size", 20);
}