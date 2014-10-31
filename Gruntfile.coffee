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

	grunt.registerTask "default", ->
		che 			= cheerio.load grunt.file.read("demo/demo.html")
		symbols			= che "symbol"

		tjs 			= 'module.exports = <%= className %>;\n
function <%= className %>(){}\n
<%= className %>.prototype.view = __dirname;\n
<%= className %>.prototype.init = function(model) {\n
	model.setNull("size", 20);\n
}'
		thtml			= '<index: element="entypo-<%= name %>">\n
	<figure class="entypo" style="width:{{size}}px; height:{{size}}px">\n
		<svg class="entypo-icon entypo-<%= name %>" viewBox="0 0 1024 1024">\n
			<path d="<%= path %>" />\n
		</svg>\n
	</figure>'

		grunt.file.delete "icons"
		grunt.file.mkdir "icons"

		arr = []

		for s in symbols
			el 			= cheerio(s)

			name 		= el.attr("id").replace "icon-", ""
			d 			=
				name 		: name
				path 		: el.find("path").attr "d"
				className 	: "Entypo" + toTitleCase(name.replace(/\-/g, " ")).split(" ").join("")

			dirName 	= "./icons/" + d.name
			grunt.file.mkdir dirName

			fjs 		= grunt.template.process tjs, {data: d}
			fhtml 		= grunt.template.process thtml, {data: d}

			grunt.file.write dirName + "/index.js", fjs
			grunt.file.write dirName + "/index.html", fhtml

			arr.push name

		grunt.file.write "./icons/_list.js", "module.exports = " + JSON.stringify(arr)
		console.log "done"
	
	grunt.registerTask "release", (type) ->
		type = "patch" if not type?
		grunt.task.run "bumpup:" + type
		grunt.task.run "tagrelease"