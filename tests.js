describe('When using the devloper profile app', function  () {
	var CVData;
	beforeEach(function () {
		angular.mock.module('eb.cv');
		inject(function  (_CVData_) {
			CVData = CVData;		
		});
	});

	it('should have loaded the app', function  () {
		expect(angular).not.toBeUndefined();
	});
});