angular.module('timer-demo',['timer']).controller('TimerDemoController',['$scope',  function ($scope) {
    $scope.linkAnchors = function () {
        $('ul.nav a').click(function (){
            var path = $(this).attr('href');
            if (path != '#') {
                window.location = path;
            }
        });
    };

    $scope.btnText = {
      reset: "Start",
      started: "Stop",
      stopped: "Resume"
    };

    $scope.currentYear = (new Date).getFullYear();
    $scope.startTime = sinceAnn;
    $scope.endYear = $scope.currentYear+1;
    $scope.endTime = (new Date($scope.endYear, 0, 1)).getTime();


    $scope.callbackTimer={};
    $scope.callbackTimer.status='Running';
    $scope.callbackTimer.callbackCount=0;
    $scope.callbackTimer.finished=function(){
        $scope.callbackTimer.status='COMPLETE!!';
        $scope.callbackTimer.callbackCount++;
        $scope.$apply();
    };

    function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
}]);
