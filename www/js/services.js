angular.module('app.services', [])

.service('AuthService', function($http, $localStorage, $ionicLoading, ApiEndpoint, $location, TaskService){
	// need to find out how to work with $http.post()...
	// this part is temporary solution
	return {
		login : function(data) {
			$ionicLoading.show();
			// should use post
			$http.get(ApiEndpoint.url + 'auth/login/?username=' + data.username + '&password=' + data.password).then(
				function(response) {
					$ionicLoading.hide();
					if(response.status == false)  {
						alert(response.message);
					} else {
						$localStorage.token = response.data.data;
						$localStorage.loggedin = true;

						// redirect to app task list once success logged in
						$location.path('/list');

						// get tasks
						TaskService.getTasks();
					}
				},
				function(e) {
					$ionicLoading.hide();
					console.error(e);
				}
			);
		},
		register : function(data) {
			// should use post..
			$http.get(ApiEndpoint.url + 'auth/register/?username=' + data.username + '&password=' + data.password).then(
				function(response) {
					if(response.status == false)  {
						alert(response.message);
					} else {
						$location.path('/login');
					}
				},
				function(e) {
					console.error(e);
				}
			);
		},
		logout : function() {
			$localStorage.loggedin = false;
			delete $localStorage.token;
			delete $localStorage.tasks;
			$location.path('/login');
		}
	}
})



.service('TaskService', function($localStorage, $http, ApiEndpoint) {

	var api = ApiEndpoint.url;

	return {
		// dapatkan senarai tugasan
		getTasks : function() {

			// call an API using method = GET
			return $http.get(api + '/tasks.php?token=' + $localStorage.token)
				.then(
					function(response) {
						var data = response.data.data;
						$localStorage.tasks = data;
					},
					function(e) {
						console.log(e);
					}
				);

		},

		// dapatkan tugasan berdasarkan id
		getTaskById : function(id) {
			$http.get(api + '/tasks-details.php?token=' + token + '&id=' + id)
                .then(function(response){
                	var data = response.data.data;
                    $localStorage.task = data;
                }, function(e){
                    console.log(e);
                });
		},

		// tambah tugasan
		add : function(data) {
			data.token = token;

			// call an API using method = POST
			$http.post(api + '/tasks-add.php', data)
				.success(function (data, status, headers, config) {
            		console.log(data);
            	})
            	.error(function (data, status, header, config) {
            		console.log(data);
            	});
		},
		delete : function(id) {
			// todo
		},
		update : function(params) {
			// todo
		}
	}
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

