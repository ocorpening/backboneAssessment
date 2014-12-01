define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/cityWeatherModel'
], function ($, _, Backbone, JST, cityWeatherModel)
{
    'use strict';

    var singleCityView = Backbone.View.extend(
    {
        template: JST['app/scripts/templates/cityWeatherTemplate.ejs'],
        tagName: 'div',
        id: '',
        className: '',
        events: {'click': "returnToOverview"},

        initialize: function()
        {
        },

        render: function () {
            var compiledTemplate = this.template({model: this.model});
            this.$el.appendTo('#viewWrapper');
            this.$el.html(compiledTemplate);
        },

        /**
         * Returns promise that model is loaded.
         * @param modelName
         * @param templateName
         * @returns {*}
         */
        load: function(modelName, templateName)
        {
            // Read in the data using backbone
            var that = this;
            var weatherModel = new cityWeatherModel();
            weatherModel.url = modelName;
            return weatherModel.fetch(
            {
                success: function (model, response, options)
                {
                    that.model = model;
                    that.template = JST[templateName];
                    that.listenTo(that.model, 'change', that.render);
                    //that.render();
                },
                error: function (model, response, options)
                {
                    console.log("Failure to fetch model: ");
                }
            });
        },

        returnToOverview: function()
        {
            Backbone.history.navigate('/', {trigger: true});
        }
    });

    return singleCityView;
});
