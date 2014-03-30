
function Marvel($scope, $http) {

    $scope.items = [];
    $scope.getItems = function () {
        $http({method: 'GET', url: 'http://gateway.marvel.com:80/v1/public/characters/1009629/comics?apikey=d6060228ef76a4849472fabfe5722656'})
          .success(function (data, status) {
              $scope.items = data;
          })
          .error(function (data, status) {
              alert("Error");
          });
    };

}