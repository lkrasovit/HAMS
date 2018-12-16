app.controller("newTenantCtrl", function ($scope, tenants, $location, user) {

    // if (!user.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }
    
$scope.createTenant = function () {
    tenants.createTenant($scope.fname,$scope.lname, $scope.apr,
        $scope.ml).then(function () {
            $location.path("/tenants")
        }, function (err) {
            console.log(err);
        })
}
    
// $scope.addBtn.click(function() {
//     tenannts.add({
// //     id: Math.floor(Math.random()*110000),
// //     fname: fnameField.val(),
// //     lname: lnameField.val(),
// //    apr: aprField.val(),
// //     ml: mlField.val()
// //   });
// //   clearFields();
// //   refreshCallbacks();
// // });

// })
// }

}) 
// close CreateRecipe
    // $scope.function closeWin() {
    //     myWindow.close();
    // }
    // $scope.("#cancel_edit").click(function(){
    //     window.open('','_parent',''); 
    //     window.close(); 
    // });