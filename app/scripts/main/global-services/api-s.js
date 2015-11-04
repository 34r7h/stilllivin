/**
 * @ngdoc service
 * @name stilllivin.Api
 * @description
 * # Api
 * Service in the stilllivin.
 */
var Stamplay = Stamplay;
angular.module('stilllivin')
    .factory('Api', function ($stamplay)
    {
        'use strict';
        Stamplay.init('stilllivin');

        var api = {};
        console.log($stamplay);
        api.register = function(data){
            var newUser = new $stamplay.User().Model;
            newUser.signup(data).then(function(){
                // User is now registered
                newUser.set('phoneNumber', '020 123 4567' );
                return newUser.save();
            }).then(function(){
                // User is saved successfully side
                var number = newUser.get('phoneNumber');
                console.log(number); // number value is 020 123 4567
            });
        };
        return api;
    });