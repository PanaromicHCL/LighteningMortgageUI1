
angular.module('signInModule', ['ui.bootstrap']).controller('paymentController', function ($scope, $location, $http, restApiSerivce, $rootScope, $log, $document) {
  $scope.baseUrl = 'http://10.117.189.228:8080/api/v1/';
  $scope.signUpDetails = {
    username: '',
    pwd: '',
    cpwd: '',
    phone: '',
    paymentType: '',
    email: ''

  }

  
  

  //};
  $scope.saveSignUpData = function () {
   
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