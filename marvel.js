
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

function HeroList($scope) {
    $scope.heroes = [
        {name: 'Abraham Brown', ID: 'xxxxxx', description: 'Black Hero 1'},
        {name: 'Adept', ID: 'xxxxxx', description: 'Black Hero 2'},
        {name: 'Aegis', ID: 'xxxxxx', description: 'Black Hero 3'},
        {name: 'Tempest', ID: 'xxxxxx', description: 'Black Hero 4'},
        {name: 'Alex Wilder', ID: 'xxxxxx', description: 'Black Hero 5'}
    ];
}