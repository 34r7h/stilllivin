"use strict";angular.module("stilllivin",["ngAnimate","ngStamplay"]),angular.module("stilllivin").directive("auth",function(){return{templateUrl:"scripts/auth/auth-d.html",restrict:"EA"}}),angular.module("stilllivin").directive("livin",["Api",function(l){return{templateUrl:"scripts/livin/livin-d.html",restrict:"EA",controller:function(){var n=this;n.api=l,console.log(n.api)},controllerAs:"sl"}}]);var Stamplay=Stamplay;angular.module("stilllivin").factory("Api",["$stamplay",function(l){Stamplay.init("stilllivin");var n={};return console.log(l),n.register=function(n){console.log("register",n);var t=(new l.User).Model;t.signup(n).then(function(){return t.set("phoneNumber","020 123 4567"),t.save()}).then(function(){var l=t.get("phoneNumber");console.log(l)})},n.login=function(l){console.log("login",l);var n=(new Stamplay.User).Model;n.login(l.email,l.password).then(function(){console.log(n.get(l.email))},function(l){})},n}]);