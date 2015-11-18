/**
 * Created by focus on 2015/11/16.
 */
app.controller('MainCtrl', function ($scope) {
	$scope.menu = [{
		"label": "首页",
		"ui-sref": "frontend.home",
		"icon": "icon-home"
	}, {
		"label": "价格",
		"ui-sref": "frontend.price",
		"icon": "icon-price"
	}, {
		"label": "登录",
		"ui-sref": "login",
		"icon": "icon-login"
	}];
});