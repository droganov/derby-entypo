module.exports = EntypoCcShare;
function EntypoCcShare(){}
EntypoCcShare.prototype.view = __dirname;
EntypoCcShare.prototype.init = function(model) {
	model.setNull("size", 20);
}