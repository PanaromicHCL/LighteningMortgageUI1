
angular.module('transctionsModule', ['ui.bootstrap']).controller('transctionsController', function ($scope, $http, $rootScope, $log, ) {
  $scope.baseUrl = 'http://10.117.189.228:8080/api/v1/';
  $scope.filter = {
    customerId: '',
    amount: '',
    date: '',
    transactionDescription: '',
    paymentType: '',
    spendCategoryId: ''


  }

  $http({
    method: 'GET',
    url: $scope.baseUrl + 'spendingCategory'
  }).then(function successCallback(response) {
    $log.info(response);
    $scope.spendCategoris = response.data.data;
    //localStorage.spendCategoris = response.data.data;

  }, function errorCallback(response) {

  });

  $scope.spendCategoris = localStorage.spendCategoris;
  $http({
    method: 'GET',
    url: $scope.baseUrl + 'transaction?ustomerId=' + localStorage.id
  }).then(function successCallback(response) {
    //$log.info('list:' + JSON.stringify(response));
    $scope.transactions = response.data.data;
  }, function errorCallback(response) {

  });


  $scope.currentTrans = function (current) {
    //alert('currentTrans'+current);
    $http({
      method: 'GET',
      url: $scope.baseUrl + 'transaction?ustomerId=' + localStorage.id + '&category=current'
    }).then(function successCallback(response) {
      $log.info('list::' + JSON.stringify(response));


      $scope.transactions = response.data.data;
    }, function errorCallback(response) {

    });

  }
  $http({
    method: 'GET',
    url: $scope.baseUrl + 'customers'
  }).then(function successCallback(response) {
    $log.info(response);
    $scope.customerList = response.data.data;
  }, function errorCallback(response) {

  });


});