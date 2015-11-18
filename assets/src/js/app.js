/**
 * Created by focus on 2015/11/16.
 */
"use strict";
var app = angular.module('app', ['ngAnimate', 'ngMaterial', 'ui.router']);

/*
 Route
 */
app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('frontend', {
			url: "/",
			templateUrl: "templates/frontend.html"
		})
		.state('frontend.home', {
			url: "home",
			views: {
				"content": {
					templateUrl: "templates/partials/home.html"
				}
			}
		})
		.state('frontend.price', {
			url: "price",
			views: {
				"content": {
					templateUrl: "templates/partials/price.html"
				}
			}
		})
		.state("login", {
			url: "/login",
			templateUrl: "templates/login.html"
		});
});