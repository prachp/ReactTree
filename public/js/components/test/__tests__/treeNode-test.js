/*
* Tree Node unit tests
*/
jest.dontMock('../../treeNode.js');

describe('TreeNode', function() {
	var React = require('react/addons'),
		TreeNode = require('../../treeNode.js'),
		TestUtils = React.addons.TestUtils,
		renderNode = function(data) {
			return TestUtils.renderIntoDocument(<TreeNode node={data}/>);
		},
		// helper method to click on node
		clickButton = function(root, nodeName) {
			var btns = TestUtils.scryRenderedDOMComponentsWithClass(root, 'nodeBtn'),
				btn,
				i;
			if (btns.length === 0) {
				return false;
			}
			for (i = 0; i < btns.length; i++) {
				btn = btns[i];
				if (btn.getDOMNode().textContent === nodeName) {
					TestUtils.Simulate.click(btn);
					return true;
				}
			}

			return false;
		};


	// Test cases
	// 1. Tree node should not render children if isCollapsed is true
	it('Render only name of the node when isCollapsed is true', function() {
		var mockData = {
				key : '1r1',
				name : 'Mock node',
				isCollapsed : true,
				children : []
			},
			node = renderNode(mockData),
			childrenContainer = TestUtils.scryRenderedDOMComponentsWithClass(node, 'children');
		// assert that children is not rendered (number of element is zero)
		expect(childrenContainer.length).toBe(0);
	});

	// 2. Tree node should not render children if isCollapsed is false but there is no children
	it('Render only name of the node when isCollapsed is false but no children', function() {
		var mockData = {
				key : '1r1',
				name : 'Mock node',
				isCollapsed : false,
				children : []
			},
			node = renderNode(mockData),
			childrenContainer = TestUtils.scryRenderedDOMComponentsWithClass(node, 'children');
		// assert that children is not rendered (number of element is zero)
		expect(childrenContainer.length).toBe(0);
	});

	// 3. Tree node should render children if isCollaped is false and there are 1 or more children
	it('Render children of the node when isCollapsed is false and there is at least one children', function() {
		var mockData = {
				key : '1r1',
				name : 'Mock node',
				isCollapsed : false,
				children : [{
					key : '1n1',
					name : 'child node',
					isCollapsed : true,
					children : []
				}]
			},
			node = renderNode(mockData),
			childrenContainer = TestUtils.scryRenderedDOMComponentsWithClass(node, 'children');
		// assert that children rendered (number of element is one because there is one child)
		expect(childrenContainer.length).toBe(1);
	});

	// 4. Tree node should have 'expanded' class name when isCollapsed is false
	it('Render node with expanded class name when isCollapsed is false', function() {
		var mockData = {
				key : '1r1',
				name : 'Mock node',
				isCollapsed : false,
				children : [{
					key : '1n1',
					name : 'child node',
					isCollapsed : false,
					children : []
				}]
			},
			node = renderNode(mockData),
			itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'expanded');
		// expect to find 2 elements with class name 'expanded' (root node and its child)
		expect(itemNode.length).toBe(2);
	});

	it('Render node with expanded class name when isCollapsed is false', function() {
		var mockData = {
				key : '1r1',
				name : 'Mock node',
				isCollapsed : false,
				children : [{
					key : '1n1',
					name : 'child node',
					isCollapsed : true,
					children : []
				}]
			},
			node = renderNode(mockData),
			itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'expanded');
		// expect to find 1 element with class name 'expanded' (root node)
		expect(itemNode.length).toBe(1);
	});

	// 5. Tree node should have 'collapsed' class name when isCollapsed is true
	it('Render node with collapsed class name when isCollapsed is true', function() {
		var mockData = {
				key : '1r1',
				name : 'Mock node',
				isCollapsed : true,
				children : [{
					key : '1n1',
					name : 'child node',
					isCollapsed : true,
					children : []
				}]
			},
			node = renderNode(mockData),
			itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'collapsed');
		// expect to find 1 element with class name 'collapsed' (root node)
		expect(itemNode.length).toBe(1);
	});

	// 6. Tree node should collapse when click if it's expanded
	it('Collapse when click if it is expanded', function() {
		var mockData = {
				key : '1r1',
				name : 'Mock node',
				isCollapsed : false,
				children : [{
					key : '1n1',
					name : 'child node',
					isCollapsed : true,
					children : []
				}]
			},
			node = renderNode(mockData),
			itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'expanded'),
			isButtonClickSuccess = false;
		// expect to find 1 element with class name 'expanded' (root node)
		expect(itemNode.length).toBe(1);
		// click to toggle the root node
		isButtonClickSuccess = clickButton(node, 'Mock node');
		expect(isButtonClickSuccess).toBe(true);
		// check that child node is not rendered anymore
		itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'children');
		expect(itemNode.length).toBe(0);
		// check that root node has collapsed class name
		itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'collapsed');
		expect(itemNode.length).toBe(1);
	});

	// 7. Tree node should expand when click if it's collapsed
	it('Expand when click if it is collapsed', function() {
		var mockData = {
				key : '1r1',
				name : 'Mock node',
				isCollapsed : true,
				children : [{
					key : '1n1',
					name : 'child node',
					isCollapsed : true,
					children : []
				}]
			},
			node = renderNode(mockData),
			itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'collapsed'),
			isButtonClickSuccess = false;
		// expect to find 1 element with class name 'collapsed' (root node)
		expect(itemNode.length).toBe(1);
		// click to toggle the root node
		isButtonClickSuccess = clickButton(node, 'Mock node');
		expect(isButtonClickSuccess).toBe(true);
		// check that child node is not rendered anymore
		itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'children');
		expect(itemNode.length).toBe(1);
		// check that root node has expanded class name
		itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'expanded');
		expect(itemNode.length).toBe(1);
	});

	// 8. Tree node should maintain state of the child after collapsed then expand
	it('Maintain state of the child after collapsed then expande', function() {
		var mockData = {
				key : '1r1',
				name : 'Mock node',
				isCollapsed : false,
				children : [{
					key : '1n1',
					name : 'child node',
					isCollapsed : true,
					children : []
				}]
			},
			node = renderNode(mockData),
			itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'collapsed'),
			isButtonClickSuccess = false;
		// expect to find 1 elements with class name 'collapsed' (child node)
		expect(itemNode.length).toBe(1);
		
		// Click the child to expand it
		isButtonClickSuccess = clickButton(node, 'child node');
		expect(isButtonClickSuccess).toBe(true);

		// verify that child is expanded
		itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'expanded');
		expect(itemNode.length).toBe(2);

		// collapse root node
		isButtonClickSuccess = clickButton(node, 'Mock node');
		expect(isButtonClickSuccess).toBe(true); 	
		
		// verify that root node is collapsed (no children)
		itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'children');
		expect(itemNode.length).toBe(0);

		// click root node again to expand
		isButtonClickSuccess = clickButton(node, 'Mock node');
		expect(isButtonClickSuccess).toBe(true); 

		// verify that both child node and root node are expanded
		itemNode = TestUtils.scryRenderedDOMComponentsWithClass(node, 'expanded');
		expect(itemNode.length).toBe(2);
	});
});




