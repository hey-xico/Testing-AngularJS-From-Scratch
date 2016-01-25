'use strict';

describe('expenseController', function(){

    var $controllerConstructor;
    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope =  $rootScope.$new();
    }));


    it('shoulf have three expenses items', function(){
        var ctrl = $controllerConstructor('expensesController', {scope: scope})

        expect(ctrl.expenseItem.length).toBe(3);
    });
});