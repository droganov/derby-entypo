var def = require("./icons/_list");

module.exports = function(app, options) {

	var icons = ((typeof options !== "undefined" && options !== null ? options.list : void 0) != null) || def;
	if ( typeof icons == "string"){
		icons = icons.split(",");
	};

	app.component(require( "./icons/air"));


	// for (var i = icons.length - 1; i >= 0; i--) {
	// 	app.component(require( "./icons/" + icons[i]));
	// };
	app.loadStyles( __dirname );
};