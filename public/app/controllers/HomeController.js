(function () {

    angular.module('routesApp')
        .controller('HomeController', ['dataService', 'notifier', '$route', '$log', HomeController]);

    function HomeController(dataService, notifier, $route, $log) {

        var vm = this;

        vm.message = 'Welcome to School Buddy!';

        vm.refresh = function() {
            $route.reload();
        };

        dataService.getAllSchools()
            .then(function(schools) {
                vm.allSchools = schools;
                vm.schoolCount = schools.length;
            })
            .catch(showError);

        dataService.getAllClassrooms()
            .then(function(classrooms) {
                vm.allClassrooms = classrooms;
                vm.classroomCount = classrooms.length;
            })
            .catch(showError);

        dataService.getAllActivities()
            .then(function(activities) {
                vm.allActivities = activities;
                vm.activityCount = activities.length;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());
