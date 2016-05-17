## Resources

1. [Ionic CSS Components](http://ionicframework.com/docs/components/)
2. [Ionic JavaScript UI Library](http://ionicframework.com/docs/api)
3. [Ionicons](http://ionicframework.com/docs/components/#icons)
4. [Dynamic Templates](http://ionicframework.com/docs/platform-customization/dynamic-templates.html)
5. [Ionic Books](http://ionicframework.com/docs/guide/)

# Syllabus

## Day 1

1. Introduction to Ionic Framework
2. Ionic Development Environment Installation & Configuration
3. Introduction to Ionic Components
4. UI Development with Ionic Creator

## Day 2

1. Introduction to AngularJs
2. Ionic app.js, route.js & templates
3. Ionic controllers.js
4. Ionic services.js

## Day 3

1. Ionic ngCordova
2. Basic API Development
3. Ionic & API Integration

## Day 4

1. Build Ionic App for Android

# Notes

## Ionic Commands ##

0. Display Availble Ionic Commands - `ionic`
1. Create project - `ionic start project-name template`
	- template: `blank`, `tabs`, `sidemenu`
2. To serve ionic app for local development using web browser - `ionic serve`
3. Login to Ionic Creator account - `ionic login`

## Test Your Applications ##

1. Via Web Browser(highly recommended using Google Chrome) - `ionic serve`
2. Via Ionic View Application
	- [Play Store](https://play.google.com/store/apps/details?id=com.ionic.viewapp)
	- [App Store](https://itunes.apple.com/us/app/ionic-view/id849930087?mt=8)
3. Directly to Device - `ionic run android`
	- Make sure to install Android SDK Tools before you're able to test your applications on devices

### Day 1 ###

1. [Installation & Configuration](http://bit.ly/cc-ionic-installation)
2. Ionic Creator
	- [Sign Up] (https://creator.ionic.io/app/signup)
	- Design
	- Export

### Day 2 ###

1. Ionic Structure
	- hooks - scripts used to customize cordova commands
	- plugins - ngCordova plugins
	- platforms - target devices (ios,android,bb,windows)
	- resources - splashscreens, icons
	- scss - you may include other scss if required
	- www - working directory
		- img - all our images
		- js
			- app.js - main js file, application's JavaScript
			- controllers.js - handle request in & out
			- directives.js - manipulate DOM / elements / attributes
			- routes.js - define signboard / signage: route name, url, template, controller
			- services.js - define external services want to use, can be service / factory.
		- lib - external libraries such as ngCordova, Swiper, etc. Installation via bower
		- templates - our views
2. Introduction to AngularJs
	- Attributes
		- Read each item in list using `ng-repeat`
		- Call functions in AngularJs `$scope` using `ng-click`
		- Define our AngularJs application by using `ng-app`
		- Bind our input(view) to the model using - `ng-model`
	- Methods
		- Echo - `{{ }}`
	- Scope
		- Local Scope: `$scope`
			- Accessible to the particular Controller only
		- Global Scope: `$rootScope`
			- Accessible in any location in our application
3. `app.js`
4. Your application need signboards! Use `route.js`!
	- Setup Route(route.js) to accept parameters `url: '/profile/:id'`
	- Generate URL to profile page by adding ui-sref attribute to the element `ui-sref="profile({id:value})"`
	- Accept Parameters in Controller by injecting `$stateParams` - `function($scope, $stateParams){}()`
	- Accessing parameters `$stateParams.parameter, eg. $stateParams.id`
	- More URL Format [URLMatcher](http://angular-ui.github.io/ui-router/site/#/api/ui.router.util.type:UrlMatcher)
	- More tips - [Scotch - 3 Simple Tips for Using UI Route](https://scotch.io/tutorials/3-simple-tips-for-using-ui-router)
5. `controller.js`
6. `services.js`

### Day 3 ###

1. Introduction to ngCordova
	- Installation
		- One Time Setup
			- Bower - `npm install bower -g`
		- Repeated Setup
			- Once for each project
				- Install ngCordova for the project - `bower install ngCordova`
				- Include the following in `index.html`
				```
				<script src="lib/ngCordova/dist/ng-cordova.js"></script>
				<script src="cordova.js"></script>
				```
				- Inject as Angular Dependency
				```
				angular.module('myApp', ['ngCordova'])
				```
			- Add ngCordova Plugin - `cordova plugin add plugin-name`
			- Remove ngCordova Plugin - `cordova plugin remove plugin-name`
			- Each ngCordova usage
				- Wrap with `deviceready` event
				```
				document.addEventListener("deviceready", function () {
				  $cordovaPlugin.someFunction().then(success, error);
				}, false);

				// OR with IONIC

				$ionicPlatform.ready(function() {
				  $cordovaPlugin.someFunction().then(success, error);
				})
				```
	- [ngCordova Plugins](http://ngcordova.com/docs/plugins/)

# Saving Information

## Depends on applications requirement, you may choose which level to save your data ##

1. Level 0 - Local Scope - $scope.tasks
	
2. Level 1 - Root Scope - $rootScope.tasks

3. Level 2 - LocalStorage (ngStorage) = `$storage.tasks`
	- Install `ngStorage` -	`bower install ngstorage`
	- Include `ngStorage.min.js` in `index.html`, before `cordova.js`
	```<script src="lib/ngstorage/ngStorage.min.js"></script>```
	- Inject `ngStorage` on application level - `'ngStorage'` (required)
	- Inject `$localStorage` / `$sessionStorage` on controller level (optional)

4. Level 3 - SQLite

5. Level 4 - API - SyncTaskService




















