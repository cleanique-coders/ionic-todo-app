angular.module('app.controllers', [])

.run(function($rootScope, $localStorage, AuthService){
	/*
		Documentation: https://github.com/gsklee/ngStorage#read-and-write--demo
	*/
	$rootScope.$storage = $localStorage;

	// Check if token already exist
	if($rootScope.$storage.token == undefined) {
		$rootScope.$storage.loggedin = false;
	} else {
		if($rootScope.$storage.token && $rootScope.$storage.token != '') {
			$rootScope.$storage.loggedin = true;
		} else {
			$rootScope.$storage.loggedin = false;
		}
	}

	// define $storage.tasks if not exist
	if($rootScope.$storage.tasks == undefined) {
		$rootScope.$storage.tasks = [];
	}

	/* Default Task Status */
	$rootScope.statuses = [
		{
			name:'New',
			value:'New'
		},
		{
			name:'In Progress',
			value:'In Progress'
		},
		{
			name:'Done',
			value:'Done'
		}
	];

	$rootScope.logout = function() {
		AuthService.logout();
	}
})

.controller('loginCtrl', function($scope, $state, AuthService) {
	if($scope.$storage.token && $scope.$storage.token != '') {
		$state.go('toDoApp');
	}

	$scope.login = function() {
		var data = {
			username: $scope.username,
			password: $scope.password
		}
		AuthService.login(data);
	};
})

.controller('registerCtrl', function($scope, AuthService) {
	$scope.register = function() {
		var data = {
			username: $scope.username,
			password: $scope.password
		}
		AuthService.register(data);
	}
})

.controller('toDoAppCtrl', function($scope, $ionicNavBarDelegate, TaskService) {	
	$ionicNavBarDelegate.showBackButton(false);

	$scope.refreshList = function() {
		TaskService.getTasks().then(function(){
			$scope.$broadcast('scroll.refreshComplete');
		});
	}

	$scope.removeTask = function(task) {
		if(confirm('Are you sure want to delete this task?')) {
          $scope.$storage.tasks.splice($scope.$storage.tasks.indexOf(task), 1);
      	}
	}
})
   
.controller('newTaskCtrl', function($scope, $state, $ionicNavBarDelegate, TaskService) {
	$ionicNavBarDelegate.showBackButton(true);
	$scope.simpan = function() {
		var task = {
			name: $scope.name,
			description: $scope.description
		};
		TaskService.add(task);

		// redirect to listing page
		$state.go('toDoApp');
	}
})
   
.controller('editTaskCtrl', function($scope, $stateParams, $ionicNavBarDelegate, TaskService) {
	$ionicNavBarDelegate.showBackButton(true);
	// An example using Service
	$scope.task = TaskService.getTaskById($stateParams.id);

	$scope.save = function() {
		var task = {
			id: id,
			name: $scope.name,
			description: $scope.description
		};
		TaskService.update(task);
	}
})
   
.controller('taskDetailsCtrl', function($scope, $stateParams, $ionicNavBarDelegate, TaskService) {
	$ionicNavBarDelegate.showBackButton(true);
	// An example using Service
	TaskService.getTaskById($stateParams.id);
})
 