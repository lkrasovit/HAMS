var app = angular.module("recipeHomeApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html"
        }).when("/home", {
            templateUrl: "app/home/home.html"

        }).when("/login", {
            templateUrl: "app/login/login.html",
            controller: "loginCtrl"
        }).when("/recipes", {
            templateUrl: "app/recipes/recipeHome.html",
            controller: "recipeHomeCtrl"
        }).when("/signup",{
            templateUrl:"app/signup/signup.html"
        }).when("/new" , {
            templateUrl: "app/recipes/newRecipe.html",
           controller: "newRecipeCtrl",
       }).when("/tenants",{
           templateUrl:"app/tenants/tenants.html"
       })


   
})


