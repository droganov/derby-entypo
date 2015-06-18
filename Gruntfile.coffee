cheerio = require "cheerio"
path = require "path"

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
	grunt.registerTask "test", ->
		# шаблоны
		tjs = 'module.exports = <%= className %>;\n
function <%= className %>(){};\n
<%= className %>.prototype.view = __filename.replace(/\.[^\.]+$/, "");\n'

		thtml = '<index:>\n
<svg class="md-icon md-icon-<%= name %>" viewBox="<%= viewbox %>" width="{{ @size || 20 }}" height="{{ @size || 20}}" x="<%= x %>" y="<%= y %>"><path d="<%= path %>" /></svg>'

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
			newDirPath = newDirName + "/" + d.name

			grunt.file.mkdir newDirPath

			grunt.file.write newDirPath + "/" + d.name + ".js", filejs
			grunt.file.write newDirPath + "/" + d.name + ".html", filehtml


		console.log "done"



	grunt.registerTask "default", ->
		che 				= cheerio.load grunt.file.read("demo/demo.html")
		symbols				= che "symbol"

		csprite 	=
			scope 			: "text.html - source - meta.tag, punctuation.definition.tag.begin"
			completions 	: []
		cinline 		=
			scope 			: "text.html - source - meta.tag, punctuation.definition.tag.begin"
			completions 	: []

		try
			grunt.file.delete "inline"
		catch e
		grunt.file.mkdir "inline"

		tjs 			= 'module.exports = <%= className %>;\n
function <%= className %>(){}\n
<%= className %>.prototype.view = __dirname;\n
<%= className %>.prototype.init = function(model) {\n
	model.setNull("size", 20);\n
}'
		thtml			= '<index: element="entypo-<%= name %>">\n
	<svg class="entypo entypo-<%= name %>" viewBox="0 0 1024 1024" width="{{size}}" height="{{size}}">\n
		<path d="<%= path %>" />\n
	</svg>'

		for s in symbols
			el 			= cheerio(s)
			name 		= el.attr("id").replace "icon-", ""

			d 			=
				name 		: name
				trigger 	: name.replace /\-/g, ""
				path 		: el.find("path").attr "d"
				className 	: "Entypo" + toTitleCase(name.replace(/\-/g, " ")).split(" ").join("")

			csprite.completions.push
				trigger: "entypo|" + d.trigger
				contents: '<entypo icon="' + d.name + '"${1: size="${2:20}"} />$0'
			cinline.completions.push
				trigger: "entypo|" + d.trigger
				contents: '<entypo-' + d.name + '"${1: size="${2:20}"} />$0'

			grunt.file.write "./sublime-completions/entypo-sprite.sublime-completions", JSON.stringify csprite
			grunt.file.write "./sublime-completions/entypo-inline.sublime-completions", JSON.stringify cinline

			# inline
			dirName 	= "./inline/" + d.name
			grunt.file.mkdir dirName

			fjs 		= grunt.template.process tjs, {data: d}
			fhtml 		= grunt.template.process thtml, {data: d}

			grunt.file.write dirName + "/index.js", fjs
			grunt.file.write dirName + "/index.html", fhtml


		console.log "done"
	
	grunt.registerTask "release", (type) ->
		type = "patch" if not type?
		grunt.task.run "bumpup:" + type
		grunt.task.run "tagrelease"
