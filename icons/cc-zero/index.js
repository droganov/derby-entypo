module.exports = EntypoCcZero;
function EntypoCcZero(){}
EntypoCcZero.prototype.view = __dirname;
EntypoCcZero.prototype.init = function(model) {
	model.setNull("size", 20);
}