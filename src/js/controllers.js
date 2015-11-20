/**
 * Created by focus on 2015/11/20.
 */
app.controller("MainCtrl", function ($scope) {
	var _this = this;
	var pageHeight = $(document).height();
	_this.fullPageOptions = {
		navigation: true,
		sectionsColor: ["#109652", "#999"],
		afterLoad: function () {
			$('.desc-group h1').animate({top: pageHeight / 2 - 100 + 'px'}, 500);
			$('.desc-group p.p1').animate({bottom: pageHeight / 2 - 50 + 'px', opacity: 1}, 1000);
			$('.desc-group p.p2').delay(500).animate({bottom: pageHeight / 2 - 80 + 'px', opacity: 1}, 1000);
		}
	};
});