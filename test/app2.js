import people from '../src/app.js';
import { expect } from 'chai';

describe('people', function() {
	it('should have 10 elements', function() {
		expect(people).to.have.length(10);
	});
});
	

