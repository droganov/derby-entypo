module.exports = EntypoCw;
function EntypoCw(){}
EntypoCw.prototype.view = __dirname;
EntypoCw.prototype.init = function(model) {
	model.setNull("size", 20);
}