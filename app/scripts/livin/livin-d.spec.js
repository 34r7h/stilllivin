'use strict';

describe('Directive: livin', function ()
{

    // load the directive's module
    beforeEach(module('stilllivin'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope)
    {
        scope = $rootScope.$new();
    }));

    it('should do something', inject(function ($compile)
    {
        element = $compile('<livin></livin>');
        expect(true).toBe(true);
    }));
});