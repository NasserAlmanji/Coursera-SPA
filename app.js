(function() {
'use strict';

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i].trim() == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  console.log(this.toString());
  return this;
};

angular.module('LunchCheckerApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.list = '';
	$scope.message = '';
	$scope.check = function() {
		if ($scope.list == '') {
			$scope.message =  "Please enter data first";
			$scope.color = 'red';
			return;
		}
		var items = $scope.list.split(',');
		items.clean('');
		if (items.length > 3) {
			$scope.message =  "Too much!";
			$scope.color = 'green'
		} else {
			$scope.message = "Enjoy!";
			$scope.color = 'green'
		}
	}

}
})();