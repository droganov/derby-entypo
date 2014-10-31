module.exports = EntypoCreditcard;
function EntypoCreditcard(){}
EntypoCreditcard.prototype.view = __dirname;
EntypoCreditcard.prototype.init = function(model) {
	model.setNull("size", 20);
}