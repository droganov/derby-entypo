module.exports = function(app, options) {
	app.component(require( "./sprite"));
	app.component(require( "./entypo"));
	app.loadStyles( __dirname + "/../index.css" );
};