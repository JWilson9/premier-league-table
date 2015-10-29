app.factory('table', ['$http', function($http) {
return $http.get('http://api.football-data.org/alpha/soccerseasons/398/leagueTable', { headers: { 'X-Auth-Token': 'cb570f60643543a5b79b83998a5b0be7' }})
		.success(function(data) {
			return data;
		}).error(function(err) {
			return err;
		})
}]);