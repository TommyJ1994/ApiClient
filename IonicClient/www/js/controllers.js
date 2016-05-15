angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $http, ApiEndpoint) {

$scope.showUserOne = false;
$scope.userOneFailure = false;

$scope.showUserTwo = false;
$scope.userTwoFailure = false;

$scope.showUserList = false;
$scope.userListFailure = false;

  /**
	 * Method to add a user via the API.
   * Triggers UI change for success/failure.
	 */
  $scope.addUserOne = function()
  {
      var user = {
                      "gender": "female",
                      "name": {
                        "title": "miss",
                        "first": "alison",
                        "last": "reid"
                      },
                      "location": {
                        "street": "1097 the avenue",
                        "city": "Newbridge",
                        "state": "ohio",
                        "zip": 28782
                      },
                      "email": "alison.reid@example.com",
                      "username": "tinywolf709",
                      "password": "rockon",
                      "salt": "lypI10wj",
                      "md5": "bbdd6140e188e3bf68ae7ae67345df65",
                      "sha1": "4572d25c99aa65bbf0368168f65d9770b7cacfe6",
                      "sha256": "ec0705aec7393e2269d4593f248e649400d4879b2209f11bb2e012628115a4eb",
                      "registered": 1237176893,
                      "dob": 932871968,
                      "phone": "031-541-9181",
                      "cell": "081-647-4650",
                      "PPS": "3302243T",
                      "picture": {
                        "large": "https://randomuser.me/api/portraits/women/60.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/women/60.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/60.jpg"
                      }
                    }


      $http.post(ApiEndpoint.url, { user }).success(function(response) {
      $scope.userOneData = response;
      $scope.showUserOne = true;

    }),
      function (error) {
          $scope.userOneFailure = true;
      }
  }

  /**
   * Method to add a second user via the API.
   * Triggers UI change for success/failure.
   */
  $scope.addUserTwo = function()
  {
      var user =  {
                      "gender": "male",
                      "name": {
                        "title": "mr",
                        "first": "john",
                        "last": "ryan"
                      },
                      "location": {
                        "street": "112 the road",
                        "city": "Carcan",
                        "state": "texas",
                        "zip": 56782
                      },
                      "email": "john.ryan@example.com",
                      "username": "greenbit32",
                      "password": "recktm8",
                      "salt": "lypI1d0wj",
                      "md5": "bg3d6140e188ef2168ae7ae67345df65",
                      "sha1": "4572d25c99aa65bbf0368168f65d9770b7cacfe6",
                      "sha256": "ec0705aec7393e2269d4593f248e649400d4879b2209f11bb2e012628115a4eb",
                      "registered": 1437176893,
                      "dob": 832871968,
                      "phone": "131-541-9181",
                      "cell": "091-647-4650",
                      "PPS": "5602243F",
                      "picture": {
                        "large": "https://randomuser.me/api/portraits/men/75.jpg",
                        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
                      }
                    }

      $http.post(ApiEndpoint.url, { user }).success(function(response) {
        $scope.userTwoData = response;
        $scope.showUserTwo = true;

    }),
      function (error) {
          $scope.userTwoFailure = true;
      }
  }

  /**
   * Method to list all users via the API.
   */
  $scope.listUsers = function()
  {
      $http.get(ApiEndpoint.url).success(function(response) {
        $scope.userList = response.users;
        $scope.showUserList = true;

    }),
      function (error) {
          $scope.userListFailure = true;
      }
  }

});
