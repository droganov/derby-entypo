module.exports = EntypoBookmark;
function EntypoBookmark(){}
EntypoBookmark.prototype.view = __dirname;
EntypoBookmark.prototype.init = function(model) {
	model.setNull("size", 20);
}