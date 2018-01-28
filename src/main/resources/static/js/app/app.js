var app = angular.module('crudApp',['ui.router','ngStorage']);

app.constant('urls', {
    BASE: 'http://localhost:8080/',
    USER_SERVICE_API : 'http://localhost:8080/admin/user/',
    ROLE_SERVICE_API : 'http://localhost:8080/admin/role/',
    USER_SERVICE_API_EASY_ACCESS : 'http://localhost:8080/user/user/'
});

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/admin',
                templateUrl: 'administrator/list',
                controller:'UserController',
                controllerAs:'ctrl',
                resolve: {
                    users: function ($q, UserService) {
                        console.log('Load all users');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        UserService.loadAllRoles().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }

                }
            });
        $stateProvider
            .state('user', {
                url: '/user',
                templateUrl: 'partials/user',
                controller:'UserController',
                controllerAs:'ctrl',
                resolve: {
                    users: function ($q, UserService) {
                        console.log('Load all users');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }

                }
            });
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login',

            });
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'partials/welcome',

            });
        $urlRouterProvider.otherwise('/');
    }]);

