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

				DrinkQuestion1: "Do you like your drinks served hot or cold?",
				DrinkAnswer1: "Answer 1",
				DrinkQuestion2: "How sweet do you like your drinks?",
				DrinkAnswer2: "Answer 2",
				DrinkQuestion3: "What size do you normally order?",
				DrinkAnswer3: "Answer 3",

				FoodQuestion1: "What is your favorite food to order?",
				FoodAnswer1: "Answer 1",
				FoodQuestion2: "How often do you order food when you get boba?",
				FoodAnswer2: "Answer 2",
				FoodQuestion3: "How important are food options when visiting a boba place?",
				FoodAnswer3: "Answer 3",

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