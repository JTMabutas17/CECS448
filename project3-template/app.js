angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Personas = {		
				Title: "Persona Template",
				Name: "Example Persona",
				Photo: "profile_pic.png",
				Age: "18-28",
				Occupation: "Example Occupation",
				Income: "$10-20k / yr.",
				SpendingBudget: "$5.50 per visit.",
				PersonalityTraits: [
					{ Name: "Socialable", Value: 50 },
					{ Name: "Generosity", Value: 50 },
					{ Name: "Credibility", Value: 50 },
					{ Name: "Passive/Active", Value: 50 }
				], 
				Core_needs: "Example core needs of an example persona.",

				DrinkQuestion1: "How sweet do you like your drinks?",
				DrinkAnswer1: "50%.",
				DrinkQuestion2: "What size do you normally order?",
				DrinkAnswer2: "Medium.",
				DrinkQuestion3: "What is your favorite drink?",
				DrinkAnswer3: "Mango Green Tea with Boba.",

				FoodQuestion1: "Do you prefer spicy food?",
				FoodAnswer1: "I highly prefer spicy food.",
				FoodQuestion2: "What is your favorite food to order?",
				FoodAnswer2: "Spicy popcorn chicken.",
				FoodQuestion3: "How important are food options when visiting a boba place?",
				FoodAnswer3: "As long as there is spicy popcorn chicken, I don't care.",

				Ideal_atmos: [
					{ Name: "Quiet", Value: 50 },
					{ Name: "Music", Value: 50 },
					{ Name: "Bustling", Value: 50 },
					{ Name: "Clean", Value: 50 },
					{ Name: "Fragrant", Value: 50 },
					{ Name: "Bright", Value: 50 },
					{ Name: "Dim", Value: 50 }
				], 
				Pet_Peeves: "Example pet peeves of an example persona."
			};
		$scope.model = $scope.Personas;
	}])