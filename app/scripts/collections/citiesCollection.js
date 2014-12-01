/*global define*/

define([
    'underscore',
    'backbone',
    'models/cityWeatherModel'
], function (_, Backbone, CitiesModel) {
    'use strict';

    var CitiesCollection = Backbone.Collection.extend({
        model: CitiesModel
    });

    return CitiesCollection;
});
