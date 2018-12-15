app.controller("recipeHomeCtrl", function ($scope, recipes, user, $location) {
    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }



    recipes.getActiveUserRecipes().then(function (recipes) {
        $scope.recipes = recipes;
    }, function (error) {

    })
    $scope.deleteRow = function (index) {
        $scope.recipes.splice(index, 1);
    }

    //   $scope.name = "",
    $scope.clicked = false,
        $scope.click = function click(index) {
            $scope.clicked = !$scope.clicked;
        }
})

