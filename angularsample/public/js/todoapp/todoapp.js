/**
 * Created by Meng on 11/7/2016.
 */
angular.module('todomvc', ['ngRoute'])
    .config(function ($routeProvider) {
        'use strict';

        var routeConfig = {
            controller: 'TodoCtrl',
            templateUrl: 'todomvc-index.html',
            resolve: {
                store: function (todoStorage) {
                    // Get the correct module (API or localStorage).
                    console.log(123);
                    return todoStorage.then(function (module) {
                        module.get(); // Fetch the todo records in the background.
                        return module;
                    });
                }
            }
        };

        $routeProvider
            .when('/', routeConfig)
            .when('/:status', routeConfig)
            .otherwise({
                redirectTo: '/'
            });
    });
