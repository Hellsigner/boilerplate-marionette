/**
 * Created by hellsigner on 4/30/15.
 */

require.config({
    baseUrl: (function(){
        if(typeof window != 'undefined') {
            return 'src/js/libs/vendor';
        }
        return 'js/libs/vendor';
    })(),
    paths: {
        // plugins
        'tpl': '../../app/component/tpl',
        'text': 'requirejs-text/text',
        'domReady': 'requirejs-domready/domReady',
        // better than shims
        'backbone': '../../app/component/backbone-legacy',
        'jquery': '../../app/component/jquery-legacy',
        'underscore': 'lodash/lodash',
        'lodash': 'lodash/lodash',
        // libs
        'marionette': 'marionette/lib/backbone.marionette',
        // root paths
        'app': '../../app'
    },
    shim: {
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },
        'backbone-associations': ['backbone'],
        'backbone-undo': ['backbone']
    }
});

requirejs(['jquery', 'app/app', 'domReady!'], function($, app) {

    app.start();
    $('#loader-screen').removeClass('loading');

});
