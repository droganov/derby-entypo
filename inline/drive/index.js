module.exports = EntypoDrive;
function EntypoDrive(){}
EntypoDrive.prototype.view = __dirname;
EntypoDrive.prototype.init = function(model) {
	model.setNull("size", 20);
}