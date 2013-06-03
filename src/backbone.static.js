/*
Backbone Static View
*/

/*
Requires:
  * Backbone
  * jQuery
Author(s):
  * Gareth Davies @garethadavies
Thanks:
	* Derick Bailey (Marionette dude)
*/

;(function(window, document, $, Backbone, undefined) {

	Backbone.Static = function(options) {

	  this.options = options || {};
	
	};

	_.extend(Backbone.Static.prototype, Backbone.Events, {

		show: function() {

			var
			that = this,
			container = $(this.container);

			/*
			Close Current View
			*/
			if (Backbone.Static.currentView) {

				this.closeCurrentView(Backbone.Static.currentView);

			}

			/*
			Extend the normal Backbone view
		  */
		  BackboneView = Backbone.View.extend({

				initialize: function() {

			    // Set the template for the view
			    this.template = $(that.options.staticTemplate).text();

				},

				render: function() {

					// Add out static template to the view
					this.$el.html(this.template);

					return this;

				}

			});

		  /*
		  Get a new View
		  */
		  var view = new BackboneView();

		  /*
		  Set the current view
		  */
		  Backbone.Static.currentView = view;

		  /*
		  Display the static template
			*/
			container.html(view.render().el);

		},

		closeCurrentView: function(view) {

			/*
			Remove and unbind the view
			*/
			view.remove();
			view.unbind();

			return false;

		}

	});

	// Copy the 'extend' function used by Backbone's classes
	Backbone.Static.extend = Backbone.View.extend;

})(this, document, $, Backbone);