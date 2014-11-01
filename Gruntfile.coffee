cheerio = require "cheerio"

toTitleCase = (str) ->
	str.replace /(?:^|\s)\w/g, (match) -> match.toUpperCase()

module.exports = (grunt) ->
	grunt.file.defaultEncoding = "utf8"
	grunt.initConfig
		pkg: grunt.file.readJSON "package.json"
		bumpup: "package.json"
		tagrelease: "package.json"

	# plugins
	grunt.loadNpmTasks "grunt-bumpup"
	grunt.loadNpmTasks "grunt-tagrelease"

	# tasks
	grunt.registerTask "default", ->
		che 				= cheerio.load grunt.file.read("demo/demo.html")
		symbols				= che "symbol"

		csprite 	=
			scope 			: "text.html - source - meta.tag, punctuation.definition.tag.begin"
			completions 	: []

		for s in symbols
			el 			= cheerio(s)
			name 		= el.attr("id").replace "icon-", ""

			d 			=
				name 		: name
				trigger 	: name.replace /\-/g, ""

			csprite.completions.push
				trigger: "entypo|" + d.trigger
				contents: '<entypo icon="' + d.name + '"${1: size="${2:20}"}${3: title="$4"} />$0'

			grunt.file.write "./sublime-completions/entypo-sprite.sublime-completions", JSON.stringify csprite
		console.log "done"
	
	grunt.registerTask "release", (type) ->
		type = "patch" if not type?
		grunt.task.run "bumpup:" + type
		grunt.task.run "tagrelease"