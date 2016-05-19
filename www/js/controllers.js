angular.module('app.controllers', [])

.run(function($rootScope, $localStorage){
	// $localStorage.user = user;
	/*$localStorage.title = 'ToDo App';
	$localStorage.tasks = [
		{
			id: 1,
			name: 'Task 1',
			description: 'Lorem Ipsum',
			status: 'New'
		},
		{
			id: 2,
			name: 'Task 2',
			description: 'Lorem Ipsum',
			status: 'New'
		},
		{
			id: 3,
			name: 'Task 3',
			description: 'Lorem Ipsum',
			status: 'New'
		}
	];*/

	/*
	Documentation: https://github.com/gsklee/ngStorage#read-and-write--demo
	*/
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
			value:'Documentation'
		}
	];
	$rootScope.$storage = $localStorage;
	if($rootScope.$storage.tasks == undefined) {
		$rootScope.$storage.tasks = [];
	}
})

.controller('toDoAppCtrl', function($scope, $localStorage) {

	//$scope.tajuk = "my todo app listing";

	/*$scope.tasks = [
		{
			id: 1,
			name: 'Task 1',
			description: 'Lorem Ipsum',
			status: 'New'
		},
		{
			id: 2,
			name: 'Task 2',
			description: 'Lorem Ipsum',
			status: 'New'
		},
		{
			id: 3,
			name: 'Task 3',
			description: 'Lorem Ipsum',
			status: 'New'
		}
	];*/
	$scope.removeTask = function(task) {
		if(confirm('Are you sure want to delete this task?')) {
          $scope.$storage.tasks.splice($scope.$storage.tasks.indexOf(task), 1);
      	}
	}
})
   
.controller('newTaskCtrl', function($scope, $state, $localStorage) {
	$scope.simpan = function() {

		// save new task
		$localStorage.tasks.unshift(
			{
				id: Math.floor((Math.random() * 10000) + 1),
				name: $scope.name,
				description: $scope.description,
				status: 'New'
			}
		);

		// redirect to listing page
		$state.go('toDoApp');
	}
})
   
.controller('editTaskCtrl', function($scope, $stateParams) {
	$scope.task = $scope.$storage.tasks.reduce(function(carry, task){
				        if($stateParams.id == task.id)
				            carry = task;
				        return carry;
				    }, {});

	$scope.save = function() {
		// do update here
	}
})
   
.controller('taskDetailsCtrl', function($scope, $stateParams) {
	$scope.task = $scope.$storage.tasks.reduce(function(carry, task){
				        if($stateParams.id == task.id)
				            carry = task;
				        return carry;
				    }, {});
})
 