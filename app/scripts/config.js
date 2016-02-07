/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index/main");

    $stateProvider


        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html"
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "views/main.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.question1', {
            url: "/question1",
            templateUrl: "views/question1.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.question2', {
            url: "/question2",
            templateUrl: "views/question2.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.question3', {
            url: "/question3",
            templateUrl: "views/question3.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.question4', {
            url: "/question4",
            templateUrl: "views/question4.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.question5', {
            url: "/question5",
            templateUrl: "views/question5.html",
            data: { pageTitle: 'Example view' }
        })
        .state('index.map', {
            url: "/map",
            templateUrl: "views/map.html",
            data: { pageTitle: 'Example view' },
            controller: "mapCtrl"
        })


}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });