app.controller('SearchCtrl', function($scope, SearchFactory){
	$scope.lookup = function(query) {
		console.log(query)
		SearchFactory.title(query)
			.then(function(result) {
				console.log(result)
			});
	}
});