app.factory("recipes", function($q, $http, user) {
 
    var recipes = [];

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

        recipes = [];
        
        var getRecipesURL = "http://my-json-server.typicode.com/nirch/recipe-book-v3/recipes?userId=" +
            user.getActiveUser().id;
        
        $http.get(getRecipesURL).then(function(response) {
            for (var i = 0; i < response.data.length; i++) {
                var recipe = new Recipe(response.data[i]);
                recipes.push(recipe);
            }            
            async.resolve(recipes);
        }, function(error) {
            async.reject(error);
        })


       return async.promise;
   }
    function createRecipe(name, description, ingredients, steps, imgUrl) {
       var async = $q.defer();
        var newRecipe = new Recipe({id:-1, name: name, description: description,
           ingredients: ingredients, steps: steps, imgUrl: imgUrl, 
           userId: user.getActiveUser().id});
        // if working with real server:
       //$http.post("http://my-json-server.typicode.com/nirch/recipe-book-v3/recipes", newRecipe).then.....
        recipes.push(newRecipe);
       async.resolve(newRecipe);
        return async.promise;
   }
    return {
      
       getActiveUserRecipes: getActiveUserRecipes,
       createRecipe: createRecipe
   }
}) 