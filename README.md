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

### Download the script

* [backbone.static.js](https://raw.github.com/garethadavies/backbone.static/master/backbone.static.js)
* [backbone.static.min.js](https://raw.github.com/garethadavies/backbone.static/master/backbone.static.min.js)

### Reference the script

This script requires jQuery, Backbone and Underscore, so make sure you add it after those files.

```js
<script src="path/to/file/backbone.static.min.js"></script>
```

### Extend Crudder
You can extend Crudder and define what you want to happen when the callbacks are fired.

```js
_.extend(Backbone.Crudder.prototype, {

  beforeSend: function() {

    // What you want to happen before send

  },

  onComplete: function() {

    // What you want to happen on complete

  },

  onSuccess: function(options) {

    // What you want to happen on success

  },

  onError: function(options) {

    // What you want to happen on error

  }

});
```

### Initialise Crudder
When you intialise static, you can state which of the callbacks you wish to be fired.

```js
Backbone.Crudder.initialize({

  beforeSendActivated: true,
  onCompleteActivated: true,
  onSuccessActivated: true,
  onErrorActivated: true

});
```

### Example Fetch

```js
Backbone.Crudder.reading({

  entity: this.collection,
  errorMessage: 'Error accessing user data'

}, function(options) {

  // Callback function
  // Do whatever you require to do here

  // Has the request been successful?
  if (options.success) {

  }

});
```

### Example Save

```js
Backbone.Crudder.creatingUpdating({

  entity: this.model,
  entityData: {

    name: 'Gareth',
    email: 'gareth@me.com'

  },
  wait: true, // Do we want to wait for a server response?
  successMessage: 'The user has been saved',
  errorMessage: 'Unable to save the user'

}, function(options) {

  // Callback function
  // Do whatever you require to do here

  // Has the request been successful?
  if (options.success) {

  }

});
```

### Example Delete

```js
Backbone.Crudder.deleting({

  entity: this.model,
  wait: true, // Do we want to wait for a server response?
  successMessage: 'The user has been removed',
  errorMessage: 'Unable to remove the user'

}, function(options) {

  // Callback function
  // Do whatever you require to do here

  // Has the request beed successful?
  if (options.success) {

  }

});
```

Changelog
---------

### Version 0.2.0

* Simplified the initialisation process
* Refactored all the code

### Version 0.1.0

* Initial commit