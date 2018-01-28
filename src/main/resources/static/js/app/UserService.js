'use strict';

angular.module('crudApp').factory('UserService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                registrationNewUser:registrationNewUser,
                loadAllUsers: loadAllUsers,
                loadAllRoles:loadAllRoles,
                getAllUsers: getAllUsers,
                getAllRoles:getAllRoles,
                getUser: getUser,
                getRole: getRole,
                createUser: createUser,
                createRole: createRole,
                updateUser: updateUser,
                updateRole: updateRole,
                removeUser: removeUser,
                removeRole: removeRole
            };

            return factory;

            function loadAllUsers() {
                console.log('Fetching all users');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all users');
                            $localStorage.users = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading users');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function loadAllRoles() {
                console.log('Fetching all roles');
                var deferred = $q.defer();
                $http.get(urls.ROLE_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all roles');
                            $localStorage.roles = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading roles');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getAllRoles(){
                return $localStorage.roles;
            }
            function getAllUsers(){
                return $localStorage.users;
            }

            function getUser(id) {
                console.log('Fetching User with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully User with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading user with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function getRole(id) {
                console.log('Fetching Role with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.ROLE_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Role with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading role with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createUser(user) {
                console.log('Creating User');
                var deferred = $q.defer();
                $http.post(urls.USER_SERVICE_API, user)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating User : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function createRole(role) {
                console.log('Creating Role');
                var deferred = $q.defer();
                $http.post(urls.ROLE_SERVICE_API, role)
                    .then(
                        function (response) {
                            loadAllRoles();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating Role : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateUser(user, id) {
                console.log('Updating User with id '+id);
                var deferred = $q.defer();
                $http.put(urls.USER_SERVICE_API + id, user)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating User with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function updateRole(role, id) {
                console.log('Updating Role with id '+id);
                var deferred = $q.defer();
                $http.put(urls.ROLE_SERVICE_API + id, role)
                    .then(
                        function (response) {
                            loadAllRoles();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Role with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function removeUser(id) {
                console.log('Removing User with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing User with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function removeRole(id) {
                console.log('Removing Role with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.ROLE_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllRoles();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Role with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
            function registrationNewUser(user) {
                console.log('Creating User');
                var deferred = $q.defer();
                user.role = 'ROLE_USER';
                $http.post(urls.USER_SERVICE_API, user)
                    .then(
                        function (response) {
                            loadAllUsers();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while creating User : '+errResponse.data.errorMessage);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }


        }

    ]);