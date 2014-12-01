/*global define*/

// named after exercise "bv-test"

define([
    'jquery',
    'backbone',
    'views/summaryView',
    'views/singleCityView'
], function ($, Backbone, summaryView, singleCityView) {
    'use strict';

    var WeatherbvtestRouter = Backbone.Router.extend({
        currentView: null,
        routes: {
            '': 'home',
            ':city': 'loadCity'
        },

        initialize: function()
        {
        },

        changeView: function(view)
        {
            if(null != this.currentView)
            {
                this.currentView.undelegateEvents();
                this.currentView.remove();
            }
            this.currentView = view;
            this.currentView.render();
        },

        home: function()
        {
            var mainView = new summaryView();
            var loadingPromise = mainView.load('../services/all-cities.json', 'app/scripts/templates/overviewCitiesTemplate.ejs');
            var that = this;
            loadingPromise.then( function()
            {
                that.changeView(mainView);
            });
        },

        loadCity: function(cityJson)
        {
            var mainView = new singleCityView();
            var loadingPromise = mainView.load("../services/" + cityJson, 'app/scripts/templates/cityWeatherTemplate.ejs');
            var that = this;
            loadingPromise.then( function()
            {
                that.changeView(mainView);
            });
        }
    });

    return WeatherbvtestRouter;
});
