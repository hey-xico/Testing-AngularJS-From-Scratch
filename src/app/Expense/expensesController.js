(function(){
    'use strict';

    angular
        .module('app')
        .controller('expensesController', expensiveController);

    expensiveController.$inject = ['expensesDataService'];
    function expensiveController(expensesDataService){
        var vm = this;


        vm.activate = activate;
        vm.expenseItem = [];

        activate();

        function activate() {
            return vm.expenseItem = expensesDataService.getExpenses();
        }

    }
})();