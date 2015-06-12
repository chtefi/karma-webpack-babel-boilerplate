import people from '../src/app.js';
import { expect } from 'chai';

describe('people', () => {
	it('should exist', () => {
		expect(people).not.to.be.null;
	});
});

describe('DOM', () => {
	it('should work', () => {
		const node = document.createElement('div');
		const span = document.createElement('span');
		span.innerHTML = "hello!";
		document.body.appendChild(node);
		node.appendChild(span);
		expect(node.textContent).to.be.equal("hello!");
	});
});
