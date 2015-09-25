var angular = require('angular'),
	cvModule = require('./cv');

angular.module('eb.cv', [cvModule])
.controller('entryPage', function ($scope, CVData) {
	$scope.model = CVData;
})
.directive('cvAccordian', function  () {
	return {
		restrict: 'A',
		controller: function  () {

			var that = this;

			this.$contentEl = null;
			this.$triggerEl = null;

			this.init = function  () {
				that.$triggerEl.removeClass('cv-opened');
				that.$triggerEl.addClass('cv-closed');
				that.$contentEl.addClass('cv-hidden');
			};

			this.toggle = function () {
				if ( that.$triggerEl.hasClass('cv-opened') ) {
					that.$triggerEl.removeClass('cv-opened');
					that.$contentEl.removeClass('cv-visible');

					that.$triggerEl.addClass('cv-closed');
					that.$contentEl.addClass('cv-hidden');
				} else {
					that.$triggerEl.removeClass('cv-closed');
					that.$contentEl.removeClass('cv-hidden');

					that.$triggerEl.addClass('cv-opened');
					that.$contentEl.addClass('cv-visible');
				}
			}
		},
		link: {
			post: function  (scope, el, attr, ctrl) {
				ctrl.init();
			}
		}
	}
})
.directive('cvAccordianTrigger', function () {
	return {
		restrict: 'A',
		require: '^^cvAccordian',
		link: function  (scope, el, attr, ctrl) {

			ctrl.$triggerEl = el;

			el.on('click', function () {
				ctrl.toggle()
			});
		}
	}
})
.directive('cvAccordianContent', function () {
	return {
		restrict: 'A',
		require: '^^cvAccordian',
		link: function (scope, el, attr, ctrl) {

			ctrl.$contentEl = el;
		}
	}
});