angular.module('myApp').controller('laptimeCtrl', function ($scope, laptimeService) {




    $scope.getLaptimes = function () {
        laptimeService.getLaptimes().then(function (res) {
            console.log(res);
            $scope.laptimes = res.data;
        });
    };

    $scope.addLaptime = function () {
        laptimeService.addLaptime($scope.newName, $scope.newCar, $scope.newTime).then(function (res) {
            console.log(res);
            $scope.getLaptimes();
        });
    };

    $scope.editLaptime = function (name, car, time) {
        console.log(name, car, time);
        laptimeService.editLaptime(name, car, time).then(function (res) {
            console.log(res);
            $scope.getLaptimes();
        });
    };

    $scope.deleteLaptime = function (id) {
        console.log(id);
        laptimeService.deleteLaptime(id).then(function (res) {
            console.log(res);
            $scope.getLaptimes();
        });

    };

    $scope.getLaptimes();

});
