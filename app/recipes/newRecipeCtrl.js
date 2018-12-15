app.controller("newRecipeCtrl", function ($scope, recipes, $location, user) {

    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }
// // Checking if the user is currently logged in,
// //     if not redirecting to the home page
//     if (!user.isLoggedIn()) {
//         $location.path("/");
//         return;
//     }
    $scope.createRecipe = function () {
        recipes.createRecipe($scope.name, $scope.description,
            $scope.ingrediants, $scope.steps, $scope.image).then(function () {
                $location.path("/recipes")
            }, function (err) {
                console.log(err);
            })
    }
    // close CreateRecipe
    // $scope.function closeWin() {
    //     myWindow.close();
    // }
    // $scope.("#cancel_edit").click(function(){
    //     window.open('','_parent',''); 
    //     window.close(); 
    // });
}) 