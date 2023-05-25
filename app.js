(function (){
'use strict';
	
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
	
LunchCheckController.$inject = ['$scope'];
	
	
	
function LunchCheckController($scope){	
		
	$scope.alarma = "";
	$scope.numberOfDishes = 0;
	$scope.listDishes = function(){
		
	if ($scope.list == undefined){
		$scope.alarma ="PLEASE, INSERT DATA FIRST";
	}	
			
	var listCount = $scope.list.split(",");
	$scope.numberOfDishes = listCount.length;
		
	if (listCount.length <=3){			
		$scope.alarma = "GREAT! ENJOY";
	} else {			
		$scope.alarma = "TOO MUCH!";
	}
};
	
	
}


	
})();