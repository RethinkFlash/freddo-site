'use strict';

angular.module('FreddoApp',[])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/admin', {
				templateUrl: 'views/admin.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
