// script.js


    // create the module and name it myApp
        // also include ngRoute for all our routing needs
    var myApp = angular.module('myApp', ['ngRoute','ngAnimate']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the skills page
            .when('/skills', {
                templateUrl : 'pages/skills.html',
                controller  : 'skillsController'
            })
			
			// route for the projects page
            .when('/project', {
                templateUrl : 'pages/project.html',
                controller  : 'projectController'
            })
			
			// route for the experience page
            .when('/experience', {
                templateUrl : 'pages/experience.html',
                controller  : 'experienceController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
			
			
    });

    // create the controller and inject Angular's $scope
    myApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Software Developer';
    });

    myApp.controller('skillsController', function($scope) {
        $scope.message = 'These are my skills';
		
    });

    myApp.controller('contactController', function($scope) {
        $scope.phoneNum = "Phone: 314-520-5468";
		$scope.email = "Email: sean.gammage@yahoo.com";
		$scope.linkedin = "https://www.linkedin.com/in/seangammage/";
    });
	
	
	 myApp.controller('projectController', function($scope) {
        $scope.message = 'This will have my contact info';
		
    });
	
	myApp.controller('experienceController', function($scope) {
        $scope.message = 'My experiences';
		$scope.showDiv = function(myE) {
		
		
    }
		
    });
	
	//change active state of navbar
	function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}
	
	
	
	
	
	
	
	
	
	
	
	
	
