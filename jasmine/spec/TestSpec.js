describe("Cultural App Test Suite", function() {

    var pointsFilter;
    var voteUpService;

    beforeEach(function () {
        module('cultureApp');

        inject(function($injector){
            pointsFilter = $injector.get('$filter')('pointsFilter');
        });

        inject(function(voteUp) {
            voteUpService = voteUp;
        });
    });

    it('Tests the points filter', function() {
        expect(pointsFilter(5)).toBe("5 Points!");
    });

    it('Tests the factory', function() {
        var result = voteUpService.sayHello();
        expect(result).toBe("Hello, World!");
    });
});


