# derby-entypo
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/droganov/derby-entypo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[Entypo](http://entypo.com/) svg pictorgams for [Derby](http://github.com/codeparty/derby) framework

## Usage
There is two usage strategies:

1. Sprite — when it's OK to add 200KB (65 zipped) to the bundle
2. Inline — when it's OK to `require` each icon manualy

### 1 Sprite
Connect the component
```coffeescript
app.use require "derby-entypo/sprite"
```

Include the sprite
```html
<Body:>
	<entypo-sprite />
```

Use pictograms within templates: 
```html
<entypo icon="air" size="60" />
```

or
```html
<entypo icon="brush" />
```


Default pictogram size is 20×20px. You can find pictogram names in demo/demo.html 


### 2 Inline
Connect styles
```coffeescript
app.use require "derby-entypo"
```

Connect pictograms (each individually)
```coffeescript
app.component require "derby-entypo/inline/air"
app.component require "derby-entypo/inline/airplane"
```

Use pictograms within templates: 
```html
<entypo-air size="60" />
<entypo-airplane />
```

## see also:
- [Official Components Guide](https://github.com/codeparty/derby/blob/master/docs/guides/components.md)
- [Derby 0.6: Introduction to components](https://github.com/dmapper/derby-tutorials/blob/master/derby4.md)
- [d-barchart](http://github.com/codeparty/d-barchart)
- [d-d3-barchart](http://github.com/codeparty/d-d3-barchart)
- [d-barchart-vanilla](http://github.com/codeparty/d-barchart-vanilla)

## Copyright information
- Pictorgam design [Daniel Bruce](//entypo.com/)
- Component coding [Serge Droganov](//droganov.ru)
- Demo [Iconmoon](//icomoon.io)