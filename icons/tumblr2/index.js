module.exports = EntypoTumblr2;
function EntypoTumblr2(){}
EntypoTumblr2.prototype.view = __dirname;
EntypoTumblr2.prototype.init = function(model) {
	model.setNull("size", 20);
}