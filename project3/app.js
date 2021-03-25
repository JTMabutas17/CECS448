angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Personas = {		
				Name: "Pepe",
				Photo: "feelsgoodman.jpg",
				Age: "59-69",
				Occupation: "BTTV/FFZ on twitch.tv",
				Income: "$10-20k / yr.",
				SpendingBudget: "$2k / mo.",
				PersonalityTraits: [
					{ Name: "Socialable", Value: 35 },
					{ Name: "Generosity", Value: 15 },
					{ Name: "Credibility", Value: 60 },
					{ Name: "Passive/Active", Value: 50 }
				], 
				Bio: "Includes personal hobbies and interests.",
				Drink_pref: [
					"Unsweet",
					"Lightly Sweet",
					"Cold/iced"
				], 
				Food_pref: [
					"Cajun Fries",
					"Popcorn Chicken"
				], 
				Ideal_atmos: [
					{ Name: "Quiet", Value: 75 },
					{ Name: "Music", Value: 80 },
					{ Name: "Bustling", Value: 35 },
					{ Name: "Clean", Value: 90 },
					{ Name: "Fragrant", Value: 25 },
					{ Name: "Bright", Value: 40 },
					{ Name: "Dim", Value: 50 }
				], 
				Pet_Peeves: "Lines are a pain.",
			};
		$scope.model = $scope.Personas;
	}])