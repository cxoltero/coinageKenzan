'use strict';

/**
 * @ngdoc function
 * @name kenzanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kenzanApp
 */
angular.module('kenzanApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.newChange = {};
	$scope.coins = [
		{
			crown: 2,
			amount: 5
		}
	];

    $scope.makeChange = function(){

	   	// This function will check for the pennies letter and remove it
    	// this is going to give a fixed number 
    	if($scope.newChange.amount[$scope.newChange.amount.length-1] === "p"){
    		$scope.newChange.amount =$scope.newChange.amount.slice(0, -1);

			// Check is there is a £ sign 
		   if($scope.newChange.amount[0]=== "£"){
	    		$scope.newChange.amount = $scope.newChange.amount.substr(1);
	    		$scope.newChange.amount *= 100;
	    	}
	    	$scope.newChange.amount *=1;
	    	$scope.newChange.amount= $scope.newChange.amount.toFixed(2);
	    	console.log("the value at check for p is :");
	    	console.log($scope.newChange.amount);
    	}
    	    	// first we have to check for invalid entries
    	if(isNaN($scope.newChange.amount)){
        	var errorMsg = 'Please enter a valid number';
	   		window.alert(errorMsg);
	   		return;
	   	}
    }


  });
