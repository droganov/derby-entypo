module.exports = EntypoCd;
function EntypoCd(){}
EntypoCd.prototype.view = __dirname;
EntypoCd.prototype.init = function(model) {
	model.setNull("size", 20);
}