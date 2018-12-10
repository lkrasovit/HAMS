app.factory("recipes", function ($q, $http, user) {


    var recipes = {};
    var wasEverLoaded = {};

    function Recipe(plainRecipe) {
        this.id = plainRecipe.id;
        this.name = plainRecipe.name;
        this.description = plainRecipe.description;
        this.ingredients = plainRecipe.ingredients;
        this.steps = plainRecipe.steps;
        this.imgUrl = plainRecipe.imgUrl;
        this.userId = plainRecipe.userId;
    }

    function getActiveUserRecipes() {
        var async = $q.defer();
        var userId = user.getActiveUser().id;

        if (wasEverLoaded[userId]) {
            async.resolve(recipes[userId]);
        } else {

            recipes[userId] = [];
            var getRecipesURL = "http://my-json-server.typicode.com/lkrasovit/HAMS/recipes?userId=" + userId;

            $http.get(getRecipesURL).then(function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    var recipe = new Recipe(response.data[i]);
                    recipes[userId].push(recipe);
                }
                wasEverLoaded[userId] = true;
                async.resolve(recipes[userId]);
            }, function (error) {
                async.reject(error);
            });
        }

        return async.promise;
    }

function createRecipe(name, description, ingredients, steps, imgUrl) {

        var async = $q.defer();
        var userId = user.getActiveUser().id;
        // var newRecipe = new Recipe({
        //     id: -1, name: name, description: description,
        //     ingredients: ingredients, steps: steps, imgUrl: imgUrl,
        //     userId: userId
        // });
        var newRecipe = new Recipe({
            id: -1, name: name, description: description,
            ingredients: ingredients, steps: steps, imgUrl: imgUrl,
            userId: user.getActiveUser().id
        });

        recipes[userId].push(newRecipe);
        async.resolve(newRecipe);
        return async.promise;
    }
return {

    getActiveUserRecipes: getActiveUserRecipes,
    createRecipe: createRecipe
}
    }) 