(function () {

    angular.module('routesApp')
        .controller('ClassroomController',
            ['dataService', 'notifier', '$routeParams', ClassroomController]);

    function ClassroomController(dataService, notifier, $routeParams) {

        var vm = this;

        dataService.getClassroom($routeParams.id)
            .then(function(classroom) {
                vm.currentClassroom = classroom;
                if($routeParams.month) {
                    if(classroom.activities.length > 0) {
                        vm.timePeriod = dataService.getMonthName($routeParams.month);
                    } else {
                        vm.timePeriod = "No activities for this month.";
                    }
                } else {
                    vm.timePeriod = "All activities";
                }
            })
            .catch(showError);

        function showError(msg) {
            notifier.error(msg);
        }
    }

}());
