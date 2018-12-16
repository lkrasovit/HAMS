app.factory("tenants", function ($q, $http,user) {
    var activeUser = null;
    var tenants = {};
    var wasEverLoaded = {};
    

    function Tenant(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.apr = plainUser.apr;
        this.ml = plainUser.ml;
    }

    function getActiveUserTenants() {
        var async = $q.defer();
        var userId = user.getActiveUser().id;

        if (wasEverLoaded[userId]) {
            async.resolve(recipes[userId]);
        } else {

            tenants[userId] = [];
            var getRecipesURL = "http://my-json-server.typicode.com/lkrasovit/HAMS/tenants?userId=" + userId;

            $http.get(getRecipesURL).then(function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    var recipe = new Tenant(response.data[i]);
                    tenants[userId].push(recipe);
                }
                wasEverLoaded[userId] = true;
                async.resolve(tenants[userId]);
            }, function (error) {
                async.reject(error);
            });
        }

        return async.promise;
    }
    return {
        getActiveUserTenants: getActiveUserTenants
    }


    //create new tenant
    function createTenant(fname, lname, apr, ml) {

        var async = $q.defer();
        var userId = user.getActiveUser().id;
        // var newRecipe = new Recipe({
        //     id: -1, name: name, description: description,
        //     ingredients: ingredients, steps: steps, imgUrl: imgUrl,
        //     userId: userId
        // });
        var newTenant = new Tenant({
            id: -1, fname: fname,lname:lname, apr: apr,
            ml: ml,
            userId: user.getActiveUser().id
        });

        tenants[userId].push(newTenant);
        async.resolve(newTenant);
        return async.promise;
    }
return {

    getActiveUserTenants: getActiveUserTenants,
    createTenant: createTenant
}


})