describe('When using the devloper profile app', function  () {
	beforeEach(function () {
		angular.mock.module('eb.cv');
	});

	it('should have loaded the app', function  () {
		expect(angular).not.toBeUndefined();
	});

	describe('when using CVData', function  () {
		var CVData;
		beforeEach(inject(function (_CVData_) {
			CVData = _CVData_;
		}));
		it('should have a name', function  () {
			expect(CVData.name).not.toBeUndefined();
		});
		it('should have an array of organizations', function  () {
			expect(CVData.organizations.length).not.toBeUndefined();
		});


		describe('when looking at the organizations', function  () {
			it('should have valid items', function  () {
				CVData.organizations.forEach(function  (item, index) {
					//it should have a name
					expect(item.name).not.toBeUndefined();
				});
			});
		});
		
	});
});