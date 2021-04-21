angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Personas = {		
<<<<<<< HEAD
				Name: "Pepe",
				Photo: "feelsgoodman.jpg",
				Age: "18-28",
				Occupation: "BTTV/FFZ on twitch.tv",
				Income: "$10-20k / yr.",
				SpendingBudget: "$15 per visit",
=======
				Title: "Trainer Red",
				Name: "Red",
				Photo: "profile_pic.png",
				Age: "18-28",
				Occupation: "Pokemon Trainer",
				Income: "$10-20k / yr.",
				SpendingBudget: "$12.50 per visit.",
>>>>>>> eba27bf2824862d509f18220ecf525aa746e8bc8
				PersonalityTraits: [
					{ Name: "Socialable", Value: 25 },
					{ Name: "Generosity", Value: 1 },
					{ Name: "Credibility", Value: 100 },
					{ Name: "Passive/Active", Value: 25 }
				], 
				Core_needs: "Customer service that cares about me as an individual. It should be easy for me to figure out who/how to get in contact with the company.",

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
					{ Name: "Quiet", Value: 60 },
					{ Name: "Music", Value: 40 },
					{ Name: "Bustling", Value: 10 },
					{ Name: "Clean", Value: 100 },
					{ Name: "Fragrant", Value: 60 },
					{ Name: "Bright", Value: 60 },
					{ Name: "Dim", Value: 40 }
				], 
				Pet_Peeves: "Having to wait too long for my order to come in. It makes sense when there are tons of customers but if I'm the only customer, I better not wait longer than 10 minutes."
			};
		$scope.model = $scope.Personas;
	}])