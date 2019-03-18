
angular.module('signUpModule', ['ui.bootstrap']).controller('signInController', function ($scope, $location, $http, $rootScope, $log, $document) {
  $scope.APP_BASE_URL = 'http://13.234.59.233:8085/LighteningApp/api';
  $scope.signUpDetails = {
    username: '',
    pwd: '',
    phone: '',
    email: ''

  }
  //$scope.phone=;

  $scope.saveSignUpData = function () {
  
   $http({
      method: 'POST',
      url: $scope.APP_BASE_URL + '/register ',
      data: $scope.signUpDetails
    }).then(function successCallback(response) {
      $log.info(response);
      alert(JSON.stringify(response));
      if (response.xhrStatus =='complete') {
        alert('Successfully Created user ');
       // $location.path('/transctions');
      } else {
        //alert('Faled Transaction .');
      }
    }, function errorCallback(response) {

    });
  };
});