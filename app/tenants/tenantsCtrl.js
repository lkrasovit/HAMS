app.controller("tenantsCtrl", function ($scope,tenants){

  tenants.getActiveUserTenants().then(function (tenants) {
   
    $scope.tenants = tenants;
}, function(error) {

})
$scope.deleteRow = function(index ){
  $scope.tenants.splice(index, 1);
}

})



  //  $scope.options = {
  //       valueNames: [ 'id', 'fname',"lname", 'apr', 'ml' ]
  //     };

// Init list
// $scope.contactList = new List('contacts', $scope.options);
  
// var idField = $('#id-field'),
//     fnameField = $('#fname-field'),
//     lnameField = $('#lname-field'),
//     aprField = $('#apr-field'),
//     mlField = $('#ml-field'),
//     addBtn = $('#add-btn'),
//     editBtn = $('#edit-btn').hide(),
//     removeBtns = $('.remove-item-btn'),
//     editBtns = $('.edit-item-btn');

// Sets callbacks to the buttons in the list
// refreshCallbacks();

// addBtn.click(function() {
//   contactList.add({
//     id: Math.floor(Math.random()*110000),
//     fname: fnameField.val(),
//     lname: lnameField.val(),
//    apr: aprField.val(),
//     ml: mlField.val()
//   });
//   clearFields();
//   refreshCallbacks();
// });

// editBtn.click(function() {
//   var item = contactList.get('id', idField.val())[0];
//   item.values({
//     id:idField.val(),
//     fname: fnameField.val(),
//     lname: lnameField.val(),
//     apr: aprField.val(),
//     ml: mlField.val()
//   });
//   clearFields();
//   editBtn.hide();
//   addBtn.show();
// });

// function refreshCallbacks() {
//   // Needed to add new buttons to jQuery-extended object
//   removeBtns = $(removeBtns.selector);
//   editBtns = $(editBtns.selector);
  
//   removeBtns.click(function() {
//     var itemId = $(this).closest('tr').find('.id').text();
//     contactList.remove('id', itemId);
//   });
  
//   editBtns.click(function() {
//     var itemId = $(this).closest('tr').find('.id').text();
//     var itemValues = contactList.get('id', itemId)[0].values();
//     idField.val(itemValues.id);
//     fnameField.val(itemValues.fname);
//     lnameField.val(itemValues.lname);
//     aprField.val(itemValues.apr);
//     mlField.val(itemValues.ml);
    
//     editBtn.show();
//     addBtn.hide();
//   });
// }

// function clearFields() {
//   fnameField.val('');
//   lnameField.val('');
//   aprField.val('');
//   mlField.val('');
// }


