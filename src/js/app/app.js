/**
 * Created by hellsigner on 4/30/15.
 */

define(['marionette', './options', 'underscore'], function(Marionette, Options, _) {
   var App = Marionette.Application.extend({

   });

    window.app = new App();
    app.options = Options;

    return app;
});
