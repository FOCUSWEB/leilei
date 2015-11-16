/**
 * Created by focus on 2015/11/16.
 */
"use strict";
var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('frontend', {
            url: '/',
            templateUrl: "index.html"
        })
        .state('frontend.home', {
            url: "/home",
            templateUrl: "templates/frontend.html"
        })
        .state('frontend.price', {
            url: "/price",
            templateUrl: "templates/partials/price.html"
        })
    ;
});