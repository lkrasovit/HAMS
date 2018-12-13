app.factory("tenants", function ($q, $http) {
    var activeUser = null;
   

    function tenants(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.apr = plainUser.apr;
        this.ml = plainUser.ml;
    }
})