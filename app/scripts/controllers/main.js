'use strict';

angular.module('kenzanApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.newChange = {};
	$scope.coins = [];
	$scope.totalAmount =0;

	$scope.checkValues = function(){
		if(typeof $scope.newChange.amount === 'undefined'){
    		window.alert("Please enter a valid number");
    		return;
		};
		// This function will check for the pennies letter and remove it
    	// this is going to give a fixed number 
    	if($scope.newChange.amount[$scope.newChange.amount.length-1] === "p"){
    		$scope.newChange.amount =$scope.newChange.amount.slice(0, -1);

			// Check is there is a £ sign at the same time as p
		   if($scope.newChange.amount[0]=== "£"){
	    		$scope.newChange.amount = $scope.newChange.amount.substr(1);
	    		$scope.newChange.amount *= 100;
	    	}
	    	// i get a string back, so i need to turn it into a number
	    	$scope.newChange.amount *=1;
	    	$scope.newChange.amount= $scope.newChange.amount.toFixed(2);
	    	console.log("the value at check for p is :");
	    	console.log($scope.newChange.amount);
	    	return;
    	}
    	//check for the value to be a just a number, or to see if it includes the £ symbol and return a whole number of pennies.
    	if($scope.newChange.amount[0]=== "£"){
    		$scope.newChange.amount = $scope.newChange.amount.substr(1);
    		$scope.newChange.amount =Math.round($scope.newChange.amount*100);
    	}
    	if(isNaN($scope.newChange.amount)){
    		window.alert("Please enter a valid number");
    		return;
		};
		// as of here we get an array as a return, now we have to check if there is a decimal point.

		if($scope.newChange.amount.indexOf(".")!== -1){
			$scope.newChange.amount = Math.round($scope.newChange.amount*100);
		};
		$scope.totalAmount = $scope.newChange.amount;
	};


    $scope.makeChange = function(){

    	while($scope.newChange.amount > 0){
    		var TwoPound = Math.floor($scope.newChange.amount/200);
			$scope.newChange.amount %= 200;
			var pound = Math.floor($scope.newChange.amount/100);
			$scope.newChange.amount %= 100;
			var fiftyPence = Math.floor($scope.newChange.amount/50);
			$scope.newChange.amount %= 50;
			var twenty =  Math.floor($scope.newChange.amount/20);
			$scope.newChange.amount %= 20;
			var twoPence =  Math.floor($scope.newChange.amount/2);
			$scope.newChange.amount %= 2;
			var penny =  Math.floor($scope.newChange.amount/1);
			$scope.newChange.amount %= 1;
			
			if(TwoPound){$scope.newChange.TwoPound= TwoPound;}
	   	 	if(pound){$scope.newChange.pound= pound;}
	   	 	if(fiftyPence){$scope.newChange.fiftyPence= fiftyPence;}
	   	 	if(twenty){$scope.newChange.twenty= twenty;}
	   	 	if(twoPence){$scope.newChange.twoPence= twoPence;}
	   	 	if(penny){$scope.newChange.penny= penny;}
	   	}


	   	// at the end the value of amount will always be 0, so no need to print it
	   	delete $scope.newChange.amount;
	   	console.log($scope.newChange);
	   	$scope.coins.push($scope.newChange);
    	$scope.newChange ={};
    };


  });

