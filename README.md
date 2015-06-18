# derby-entypo
[Entypo](http://entypo.com/) svg pictorgams for [Derby](http://github.com/codeparty/derby) framework

## Installation
```sh
npm install derby-entypo
```

## Usage
Connect styles
```coffeescript
app.use require "derby-entypo"
```

Connect pictograms (each individually)
```coffeescript
app.component require "derby-entypo/entypo/air"
app.component require "derby-entypo/social/youtube"
```

Use pictograms within templates: 
```html
<view is="md-air" size="60" />
<view is="md-youtube" size="60" />
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

---
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/droganov/derby-entypo?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)