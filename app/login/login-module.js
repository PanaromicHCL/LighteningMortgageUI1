
angular.module('loginModule', ['ui.bootstrap']).controller('loginController', function ($scope, $location, $http, restApiSerivce, $rootScope, $log, $document) {
//  $scope.baseUrl = 'http://10.117.189.228:8080/api/v1/';
  $scope.loginDetails = {
    email: '',
    pwd:''

  }



  
  

  //};
  $scope.saveSignUpData = function () {
    //localStorage.id = $scope.paymentDetail.customerId;

   // alert(JSON.stringify($scope.signUpDetails));
    // alert(JSON.stringify($scope.paymentDetail));
    $log.info('post-data' + JSON.stringify($scope.paymentDetail));
    $http({
      method: 'POST',
      url: $scope.baseUrl + 'transaction ',
      data: $scope.paymentDetail
    }).then(function successCallback(response) {
      $log.info(response);
      if (response.data.status) {
        alert('Successfully Transaction ');
        $location.path('/transctions');
      } else {
        alert('Faled Transaction .');
      }
    }, function errorCallback(response) {

    });
  };
});