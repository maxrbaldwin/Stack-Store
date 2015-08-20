app.factory('SearchFactory', function($http){
	return {
		title: function(title) {
			return $http.get('/api/search/title?q=' + title)	
		}
	}
});