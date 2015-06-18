cheerio = require "cheerio"
path = require "path"

toTitleCase = (str) ->
	str.replace /(?:^|\s)\w/g, (match) -> match.toUpperCase()

module.exports = (grunt) ->
	grunt.file.defaultEncoding = "utf8"
	grunt.initConfig
		pkg: grunt.file.readJSON "package.json"
		release: 
			options:
				additionalFiles: ["package.json"]

	# plugins
	grunt.loadNpmTasks "grunt-release"

	# консоль, опубликовать релиз: grunt release

	# tasks
	grunt.registerTask "default", ->
		# шаблоны
		tjs = 'module.exports = <%= className %>;\n
function <%= className %>(){};\n
<%= className %>.prototype.view = __dirname;\n'

		thtml = '<index:>\n
	<svg class="md-icon md-icon-<%= name %>" viewBox="<%= viewbox %>" class="{{ @class }}" width="{{ @size || 20 }}" height="{{ @size || 20}}" x="<%= x %>" y="<%= y %>"><path d="<%= path %>" /></svg>'

		# чистим
		try
			grunt.file.delete "entypo"
		catch e
		grunt.file.mkdir "entypo"

		try
			grunt.file.delete "social"
		catch e
		grunt.file.mkdir "social"

		# считывем файлы с исходниками
		for file in grunt.file.expand ["src/**/*.svg"]
			fileContent 	= grunt.file.read file
			fileName		= path.basename file, ".svg"
			che 			= cheerio.load fileContent
			svgObj 			= che "svg"
			pathObj 		= che "path"

			d 				=
				className	: "MD" + toTitleCase(fileName.replace(/\-/g, " ")).split(" ").join("")
				viewbox 	: svgObj.attr "viewbox"
				path 		: pathObj.attr "d"
				name 		: fileName.split(" ").join("-")
				x 			: svgObj.attr "x"
				y 			: svgObj.attr "y"


			filejs 			= grunt.template.process tjs, {data: d}
			filehtml 		= grunt.template.process thtml, {data: d}

			newDirName = if file.indexOf("Entypo+ Social Extension") is -1 then "entypo" else "social"
			newDirPath = newDirName + "/md-icon-" + d.name

			grunt.file.mkdir newDirPath

			grunt.file.write newDirPath + "/index.js", filejs
			grunt.file.write newDirPath + "/index.html", filehtml


		console.log "done"