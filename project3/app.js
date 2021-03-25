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
				Core_needs: "Includes personal hobbies and interests.",

				DrinkQuestion1: "Do you like your drinks served hot or cold?",
				DrinkAnswer1: "Cold.",
				DrinkQuestion2: "How sweet do you like your drinks?",
				DrinkAnswer2: "None or lightly sweetened.",
				DrinkQuestion3: "How often do you go out to get boba?",
				DrinkAnswer3: "Very seldomly, only when there are people to go with.",

				FoodQuestion1: "What is your favorite food to order?",
				FoodAnswer1: "Cajun Fries.",
				FoodQuestion2: "How often do you order food when you get boba?",
				FoodAnswer2: "Almost every time.",
				FoodQuestion3: "How important are food options when visiting a boba place?",
				FoodAnswer3: "Important. Sometimes the snacks are what you go there for and they go well with the drinks.",

				Ideal_atmos: [
					{ Name: "Quiet", Value: 75 },
					{ Name: "Music", Value: 80 },
					{ Name: "Bustling", Value: 35 },
					{ Name: "Clean", Value: 90 },
					{ Name: "Fragrant", Value: 25 },
					{ Name: "Bright", Value: 40 },
					{ Name: "Dim", Value: 50 }
				], 
				Pet_Peeves: "Waiting in line is a pain during orders. Some orders take too long to finish thus the food ends up cold.",

				ThemeColor1: "background-color: #10508D; color: #D3C6A5;",
				ThemeColor2: "background-color: #D3C6A5; color: #10508D;",
				
			};
		$scope.model = $scope.Personas;
	}])