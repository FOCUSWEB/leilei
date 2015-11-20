/**
 * Created by focus on 2015/11/20.
 */
var app = angular.module("app", ["ui.router","fullPage.js"]);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "pages/home.html"
		});
});