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
		txml 			= '<snippet>\n
	<content><![CDATA[\n
<entypo icon="<%= name %>"${1: size="${2:20}"} />$0\n
]]></content>\n
	<tabTrigger>entypo</tabTrigger>\n
	<scope>text.html</scope>\n
</snippet>'

		try
			grunt.file.delete "sublime-snippets"
		catch e
				
		grunt.file.mkdir "sublime-snippets"

		for s in symbols
			el 			= cheerio(s)
			name 		= el.attr("id").replace "icon-", ""
			d =
				name: name
			snippet 	= grunt.template.process txml, {data: d}
			dirName 	= "./sublime-snippets/"
			grunt.file.write dirName + "/" + name + ".sublime-snippet", snippet
		console.log "done"
	
	grunt.registerTask "release", (type) ->
		type = "patch" if not type?
		grunt.task.run "bumpup:" + type
		grunt.task.run "tagrelease"