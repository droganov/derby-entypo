module.exports = function(app, options) {
	app.component(require( "./com/sprite"));
	app.component(require( "./com/entypo"));
	app.loadStyles( __dirname + "/index.css" );
};