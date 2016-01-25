(function(){
    'use strict';

    angular
        .module('app')
        .factory('expensesDataService', expensesDataService);

    expensesDataService.$inject =['$http'];
    function expensesDataService($http){

        var service = {
            getExpenses: getExpenses,
            persistExpenses: persistExpenses
        };

        return service;

        function getExpenses() {
            return [
                new ExpenseItem('Taxi', 'To airport', 89,95),
                new ExpenseItem('Lunch', 'At airport', 15,40),
                new ExpenseItem('Coffee', 'Starbucks', 4,93)
            ]
        }

        function reportExpenses() {
            // some work
        }

        function persistExpenses(reportExpenses) {
            //doSomeWork

            var success = true;

            if(success) {
                return reportExpenses();
            }

        }

    }
})();