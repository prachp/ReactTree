/*
* Tree unit tests
*/
jest.dontMock('../../tree.js');

describe('TreeNode', function() {
	var React = require('react/addons'),
		Tree = require('../../tree.js'),
		TestUtils = React.addons.TestUtils,
		ApiUtils = require('ApiUtils'),
		renderNode = function(data) {
			ApiUtils.setData(data);
			return TestUtils.renderIntoDocument(<Tree/>);
		};

	// Test cases
	// 1. Tree render properly with valid data
	it('Render tree properly', function() {
		var mockData = {
				key : '1r1',
				name : 'Mock node',
				isCollapsed : false,
				children : [{
					key : '1n1',
					name : 'child node',
					isCollapsed : false,
					children : [{
						key : '1n2',
						name : 'child child node',
						isCollapsed : false,
						children : []
					}]
				}]
			},
			node = renderNode(mockData),
			childrenContainer = TestUtils.scryRenderedDOMComponentsWithClass(node, 'children');
		// assert 2 children containers
		expect(childrenContainer.length).toBe(2);

	});

	// 2. Tree show 'Tree is empty' text if data is empty
	it('Render the right text when data is empty', function() {
		var mockData = null,
			node = renderNode(mockData),
			errorMessageContainer = TestUtils.scryRenderedDOMComponentsWithClass(node, 'errorMessage');
		// assert error message is there
		expect(errorMessageContainer.length).toBe(1);
	});

	// 2. Tree show 'Tree is empty' text if data is missing key
	it('Render the right text when data is empty', function() {
		var mockData = { someRandomProperty : 1 },
			node = renderNode(mockData),
			errorMessageContainer = TestUtils.scryRenderedDOMComponentsWithClass(node, 'errorMessage');
		// assert error message is there
		expect(errorMessageContainer.length).toBe(1);
	});
});




