
angular.module('loginModule', ['ui.bootstrap']).controller('loginController', function ($scope, $location, $http, $rootScope, $log, $document) {
  $scope.APP_BASE_URL = 'http://13.234.59.233:8085/LighteningApp/api';
  $scope.loginDetails = {
    userName: '',
    password:''

  }

  //};
  $scope.authication = function () {
    //localStorage.id = $scope.paymentDetail.customerId;

   alert(JSON.stringify($scope.loginDetails));
    // alert(JSON.stringify($scope.paymentDetail));/userDetails/id
   // $log.info('post-data' + JSON.stringify($scope.loginDetails));
    $http({
      method: 'POST',
      url: $scope.APP_BASE_URL + '/loginUser ',
      data: $scope.loginDetails
    }).then(function successCallback(response) {
     // $log.info('final error'+response);
      if (response.xhrStatus =='complete') {
        alert('User Successfully loggedIn ');
        $location.path('/welcome');
      } 
    }, function errorCallback(response) {
            alert('User user authentication Failed');
    });
  };
});