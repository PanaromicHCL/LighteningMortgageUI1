angular.module('petApp').service('restApiSerivce', function ($http, $log, $rootScope) {
    this.policyList = function () {
        alert('policyList');
        // Simple GET request example:
         $http({
            method: 'GET',
            url: 'http://10.117.189.212:8081/Insurance/api/policies'
        }).then(function successCallback(response) {
            $log.info(response);
                alert(JSON.stringify(response));
            //return response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert(JSON.stringify(response));
        });
    }


    this.policyDetails = function (polict_id) {
        //  alert('policyDetails1'+polict_id);

        // Simple GET request example:
        return $http({
            method: 'GET',
            url: ''
        }).then(function successCallback(response) {

            return response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    }




});