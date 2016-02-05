angular.module('myApp').controller('pastWinnerCtrl', function ($scope, winnerService) {


    $scope.getWinners = function () {
        winnerService.getWinners().then(function (res) {
            console.log(res);
            $scope.winners = res;
        });
    };

    $scope.addWinner = function () {
        winnerService.addWinner($scope.newYear, $scope.newDriver, $scope.newTeam).then(function (res) {
            console.log(res);
            $scope.getWinners();
        });
    };

    $scope.editWinner = function (year, driver, team) {
        console.log(year, driver, team);
        winnerService.editWinner(year, driver, team).then(function (res) {
            console.log(res);
            $scope.getWinners();
        });
    };

    $scope.deleteWinner = function (id) {
        console.log(id);
        winnerService.deleteWinner(id).then(function (res) {
            console.log(res);
            $scope.getWinners();
        });

    };
    $scope.getWinners();
});
