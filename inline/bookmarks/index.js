module.exports = EntypoBookmarks;
function EntypoBookmarks(){}
EntypoBookmarks.prototype.view = __dirname;
EntypoBookmarks.prototype.init = function(model) {
	model.setNull("size", 20);
}