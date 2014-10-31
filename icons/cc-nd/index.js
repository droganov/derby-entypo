module.exports = EntypoCcNd;
function EntypoCcNd(){}
EntypoCcNd.prototype.view = __dirname;
EntypoCcNd.prototype.init = function(model) {
	model.setNull("size", 20);
}