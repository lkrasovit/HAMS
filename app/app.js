var app = angular.module("recipeHomeApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/home", {
        templateUrl: "app/home/home.html"
                // controller: "loginCtrl"
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

   
