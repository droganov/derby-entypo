# derby-entypo
[Entypo](http://entypo.com/) svg pictorgams for [Derby](http://github.com/codeparty/derby) frammework

## Usage
There is two usage strategies:

1. Sprite — when it's OK to 200KB (65 zipped) to derby bundle
2. Inline — when it's OK to `require` each icon manualy

### 1 Sprite
Connect the component
```
app.use require "derby-entypo/sprite"
```

Include the sprite
```
<Body:>
	<entypo-sprite />
```

Use pictograms within templates: `<entypo icon="air" size="60" />` or `<entypo icon="brush" />`

Default pictogram size is 20×20px. You can find pictogram names in demo/demo.html 


---
The job is in progress


## In your app
```javascript
// Use component published as module
app.component(require('d-entypo'));
```

## In your template
```html
<view name="d-entypo"></view>
```

## see also:
- [Official Components Guide](https://github.com/codeparty/derby/blob/master/docs/guides/components.md)
- [Derby 0.6: Introduction to components](https://github.com/dmapper/derby-tutorials/blob/master/derby4.md)
- [d-barchart](http://github.com/codeparty/d-barchart)
- [d-d3-barchart](http://github.com/codeparty/d-d3-barchart)
- [d-barchart-vanilla](http://github.com/codeparty/d-barchart-vanilla)