app.controller('MainController', ['$scope', 'table', function($scope, table) {
	table.success(function(data) {
		$scope.teams = data;
	})
}])