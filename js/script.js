// declare a module
var myAppModule = angular.module('app', []);

// configure the module.
// in this example we will create a greeting filter
myAppModule.filter('greet', function() {
 return function(name) {
    return 'Hello, ' + name + '!';
  };
});


myAppModule.controller('ToDo', ['$scope', function ToDo($scope){
	
	$scope.displayName = 'NameValue';

	// define the items array
	var items = [
		{text: 'Task A', done: false},
		{text: 'Task B', done: true}
	];


	// publish it on the scope object for use in angular
	$scope.items = items;

	$scope.add = function(str) {
		var item = {text: str, done: false};
		items.push(item);
		$scope.newItem = '';
	};


}]);
