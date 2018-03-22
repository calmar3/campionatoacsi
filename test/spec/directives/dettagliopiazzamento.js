'use strict';

describe('Directive: dettaglioPiazzamento', function () {

  // load the directive's module
  beforeEach(module('campionatoacsi'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dettaglio-piazzamento></dettaglio-piazzamento>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dettaglioPiazzamento directive');
  }));
});
