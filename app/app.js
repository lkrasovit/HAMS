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
            templateUrl: "app/recipes/recipeHome.html"
        })


    // }).when("/messages", {
    //     templateUrl: "app/messages/msgList.html",
    //     controller: "msgListCtrl"
    // }).when("/new" , {
    //     templateUrl: "app/messages/newMsg.html",
    //     controller: "newMsgCtrl"
    // }).when("/recipe/:id" , {

    // })
})


