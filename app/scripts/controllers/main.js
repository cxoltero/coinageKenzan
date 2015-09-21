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
	$scope.coins = [];
	$scope.totalAmount =0;


    $scope.makeChange = function(){

	   	// This function will check for the pennies letter and remove it
    	// this is going to give a fixed number 
    	if($scope.newChange.amount[$scope.newChange.amount.length-1] === "p"){
    		$scope.newChange.amount =$scope.newChange.amount.slice(0, -1);

			// Check is there is a £ sign at the same time as p
		   if($scope.newChange.amount[0]=== "£"){
	    		$scope.newChange.amount = $scope.newChange.amount.substr(1);
	    		$scope.newChange.amount *= 100;
	    	}
	    	$scope.newChange.amount *=1;
	    	$scope.newChange.amount= $scope.newChange.amount.toFixed(2);
	    	console.log("the value at check for p is :");
	    	console.log($scope.newChange.amount);
    	}

    	//check for the value to be a just a number, or to see if it includes the £ symbol and return a whole number of pennies.
    	if($scope.newChange.amount[0]=== "£"){
    		$scope.newChange.amount = $scope.newChange.amount.substr(1);
    		$scope.newChange.amount =Math.round($scope.newChange.amount*100);
    	}

    	// first we have to check for invalid entries
    	if(isNaN($scope.newChange.amount)){
        	var errorMsg = 'Please enter a valid number';
	   		window.alert(errorMsg);
	   		return;
	   	}

		$scope.totalAmount = $scope.newChange.amount;

	   	while($scope.newChange.amount > 0){
			var pound = Math.floor($scope.newChange.amount/100);
			$scope.newChange.amount %= 100;
			var fiftyPence = Math.floor($scope.newChange.amount/50);
			$scope.newChange.amount %= 50;
			var crown =  Math.floor($scope.newChange.amount/25);
			$scope.newChange.amount %= 25;
			var tenPence =  Math.floor($scope.newChange.amount/10);
			$scope.newChange.amount %= 10;
			var fivePence =  Math.floor($scope.newChange.amount/5);
			$scope.newChange.amount %= 5;
			var twoPence =  Math.floor($scope.newChange.amount/2);
			$scope.newChange.amount %= 2;
			var penny =  Math.floor($scope.newChange.amount/1);
			$scope.newChange.amount %= 1;
			
	   	 	if(pound){$scope.newChange.pound= pound;}
	   	 	if(fiftyPence){$scope.newChange.fiftyPence= fiftyPence;}
	   	 	if(crown){$scope.newChange.crown= crown;}
	   	 	if(tenPence){$scope.newChange.tenPence= tenPence;}
	   	 	if(fivePence){$scope.newChange.fivePence= fivePence;}
	   	 	if(twoPence){$scope.newChange.twoPence= twoPence;}
	   	 	if(penny){$scope.newChange.penny= penny;}
	   	}

	   	delete $scope.newChange.amount;
	   	console.log($scope.newChange);
	   	$scope.coins.push($scope.newChange);
    	$scope.newChange ={};
    }


  });
