module.exports = EntypoClock;
function EntypoClock(){}
EntypoClock.prototype.view = __dirname;
EntypoClock.prototype.init = function(model) {
	model.setNull("size", 20);
}