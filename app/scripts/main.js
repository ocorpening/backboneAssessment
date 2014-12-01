/*global require*/
'use strict';

require.config({
    baseUrl: "/scripts",
    shim: {
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash'
    }
});

require([
    'backbone',
    'underscore',
    'models/cityWeatherModel',
    'views/singleCityView',
    'views/summaryView',
    'routes/weatherBVtestRouter',
    'collections/citiesCollection'
], function (Backbone, _, cityWeatherModel, singleCityView, summaryView, weatherBVtestRouter, citiesCollection) {
    window.backboneApp = {
        Models: {"weather": cityWeatherModel},
        Collections: {"cities": citiesCollection},
        Views: {"overall": summaryView, "particularCity": singleCityView},
        Routers: {"router": weatherBVtestRouter},
        init: function () {
            window.backboneApp.Routers.router = new weatherBVtestRouter();
            Backbone.history.start();
        }
    };

    $(document).ready(function () {
        backboneApp.init();
    });
});
