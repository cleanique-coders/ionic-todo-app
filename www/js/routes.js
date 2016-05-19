angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('toDoApp', {
    url: '/list',
    templateUrl: 'templates/toDoApp.html',
    controller: 'toDoAppCtrl'
  })

  .state('newTask', {
    url: '/new-task',
    templateUrl: 'templates/newTask.html',
    controller: 'newTaskCtrl'
  })

  .state('editTask', {
    url: '/edit-task/:id',
    templateUrl: 'templates/editTask.html',
    controller: 'editTaskCtrl'
  })

  .state('taskDetails', {
    url: '/task-details/:id',
    templateUrl: 'templates/taskDetails.html',
    controller: 'taskDetailsCtrl'
  })

$urlRouterProvider.otherwise('/list')

  

});