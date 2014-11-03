module.exports = EntypoCog;
function EntypoCog(){}
EntypoCog.prototype.view = __dirname;
EntypoCog.prototype.init = function(model) {
	model.setNull("size", 20);
}