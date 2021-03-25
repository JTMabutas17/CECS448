angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Personas = {		
				Name: "Pepe",
				Photo: "feelsgoodman.jpg",
				Age: "59-69",
				Occupation: "BTTV/FFZ on twitch.tv",
				Skill: "meme-ing hard",
				Character: "memelord",
				PersonalityTraits: [
					{ Name: "Introvert/Extrovert", Value: 50 },
					{ Name: "Analytical/Creative", Value: 70 },
					{ Name: "Conservative/Liberal", Value: 60 },
					{ Name: "Passive/Active", Value: 10 }
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
					{ Name: "Quiet", Value: 90 },
					{ Name: "Jazzy", Value: 80 },
					{ Name: "Bustling", Value: 35 },
					{ Name: "Music", Value: 40 }
				], 
				Pet_Peeves: "Lines are a pain.",
			};
		$scope.model = $scope.Personas;
	}])