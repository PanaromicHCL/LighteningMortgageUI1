
angular.module('welcomeModule', ['ui.bootstrap']).controller('welcomeController', function ($scope, $location, $http, restApiSerivce, $rootScope, $log, $document) {
  //  $scope.baseUrl = 'http://10.117.189.228:8080/api/v1/';
  $scope.welcomeDetails = {
    email: '',
    pwd: ''

  }

  $scope.loggedUserDetails = [{
    "name": "Suresh",
    "dob": "20/07/1989",
    "gender": "Male",
    "phone": "8792791584",
    "email": "Suresh@gmail.com",
    "pan": "CPUP98908899898",
    "salary": "3256535632653265",
    "secincome": "8792791584",
    "otherincome": "747645546754675467"
  }, {
    "name": "Suresh",
    "dob": "20/07/1989",
    "gender": "Male",
    "phone": "8792791584",
    "email": "Suresh@gmail.com",
    "pan": "CPUP98908899898",
    "salary": "3256535632653265",
    "secincome": "8792791584",
    "otherincome": "747645546754675467"
  }, {
    "name": "Suresh",
    "dob": "20/07/1989",
    "gender": "Male",
    "phone": "8792791584",
    "email": "Suresh@gmail.com",
    "pan": "CPUP98908899898",
    "salary": "3256535632653265",
    "secincome": "8792791584",
    "otherincome": "747645546754675467"
  }];




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