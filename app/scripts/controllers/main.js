'use strict';

angular.module('FreddoApp')
	.controller('MainCtrl', function ($scope,$http) {
		$scope.albumData = [];

		$scope.fetchAlbumData = function(modelURL) {
			$http.get(modelURL)
				.success(function(data,status,headers) {
					console.log(status);
					$scope.albumData = data;
				})
				.error(function() {
					console.log('error');
				});
		};

		$scope.fetchAlbumData('model/album_data.json');
	});
