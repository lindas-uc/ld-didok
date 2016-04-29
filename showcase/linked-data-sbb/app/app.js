/**
 * Created by UE61582 on 22.04.2016.
 */

angular.module('linked-data', ['ngRoute', 'home', 'showcase', 'about', 'imprint'])

    .config(
        function($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'components/home/home.html',
                    controller: 'HomeController'
                })
                .when('/showcase', {
                    templateUrl: 'components/showcase/showcase.html',
                    controller: 'ShowcaseController'
                })
                .when('/about', {
                    templateUrl: 'components/about/about.html',
                    controller: 'AboutController'
                })
                .when('/imprint', {
                    templateUrl: 'components/imprint/imprint.html',
                    controller: 'ImprintController'
                })
                .otherwise({
                    redirectTo: '/home'
                })
            ;
        }
    )

    .controller('NavController', function ($scope, $location) {

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

    })
;