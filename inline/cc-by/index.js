module.exports = EntypoCcBy;
function EntypoCcBy(){}
EntypoCcBy.prototype.view = __dirname;
EntypoCcBy.prototype.init = function(model) {
	model.setNull("size", 20);
}