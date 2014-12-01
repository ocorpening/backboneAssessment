define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/cityWeatherModel'
], function ($, _, Backbone, JST, cityWeatherModel)
{
    'use strict';

    var summaryView = Backbone.View.extend(
    {
        template: JST['app/scripts/templates/overviewCitiesTemplate.ejs'],
        tagName: 'div',
        id: '',
        className: '',
        events: {"click table": "goToCity"},

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

        goToCity: function(e)
        {
            // read model name from last TD in selection ('this' is the selected table DOM elements)
            var tds = $("td", $(e.currentTarget)[0].innerHTML);
            var modelFullName = tds[tds.length - 1].innerHTML;

            // for modelName = "/services/aus.json"
            // '/' + modelName.split("/")[2] will evaluate to "/aus.json"
            var jsonFileName = modelFullName.split("/")[2];
            Backbone.history.navigate(jsonFileName, {trigger: true});
        }
    });

    return summaryView;
});
