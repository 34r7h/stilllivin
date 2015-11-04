/**
 * @ngdoc service
 * @name stilllivin.Api
 * @description
 * # Api
 * Service in the stilllivin.
 */
// var Stamplay = Stamplay;
angular.module('stilllivin')
    .factory('Api', function ($stamplay, $rootScope)
    {
        'use strict';
        Stamplay.init('stilllivin');



        var api = {};

        api.currentUser = function () {
            var user = new $stamplay.User().Model;
            user.currentUser().then(function(){
                // success callback
                // If the user is logged it populates the model
                //with the user's data, otherwise the model is empty.
                console.log(user.instance._id);
                api.user = user.instance;
                if(!api.user.instance._id){
                    console.log(api.user.instance);
                    return api.user;
                }
            }, function( err ){
                // error callback
            })
        };

        api.currentUser();

        api.register = function(data){
            console.log('register', data);
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
        api.login = function (data) {
            console.log('login', data);
            var user = new $stamplay.User().Model;
            user.login(data.email, data.password)
              .then(function(){
                  api.currentUser();
              });
        };
        api.logout = function () {
            var user = new Stamplay.User().Model;
            user.logout();
        };

        return api;


    });