'use strict';

/**
* @ngdoc directive
* @name stilllivin.directive:livin
* @description
* # livin
*/
angular.module('stilllivin')
.directive('livin', function (Api)
{
    return {
        templateUrl: 'scripts/livin/livin-d.html',
        restrict: 'EA',
        controller: function ($scope)
        {
            var vm = this;
            vm.api = Api;
            setTimeout(function () {
                $scope.$apply();
            },3000)
        },
        controllerAs: 'sl'
    };
});