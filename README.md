Backbone Static
===============

This backbone plugin allows you to quickly and easily display static content views within your application.

Feel free to use and change this plugin as you wish as it has been developed to suit my own application, but maybe not yours. Fill your boots!

Current version: **0.2.0**

Requirements
------------

* jQuery (1.8.3) - http://jquery.com
* Backbone (1.0.0) - http://backbonejs.org

Getting up and running
----------------------

### Download the components

If you want to try the example, you will need to download the required components via bower.

Find out how via [http://bower.io](http://bower.io)

### Download the script

* [backbone.static.js](https://raw.github.com/garethadavies/backbone.static/master/src/backbone.static.js)
* [backbone.static.min.js](https://raw.github.com/garethadavies/backbone.static/master/src/backbone.static.min.js)

### Reference the script

This script requires jQuery and Backbone, so make sure you add it after those files.

```js
<script src="path/to/file/backbone.static.min.js"></script>
```

### Extend
You can extend a static view and define the container element for the templates to be inserted into.

```js
StaticView = Backbone.Static.extend({

  container: '#example'

});
```

### Create a static view

```js
var MyStaticView = new StaticView({

  staticTemplate: '#template-example'

});        
```

### Show the view

```js
MyStaticView.show();
```

Changelog
---------

### Version 0.1.0

* Initial commit