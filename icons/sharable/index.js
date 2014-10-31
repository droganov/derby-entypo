module.exports = EntypoSharable;
function EntypoSharable(){}
EntypoSharable.prototype.view = __dirname;
EntypoSharable.prototype.init = function(model) {
	model.setNull("size", 20);
}