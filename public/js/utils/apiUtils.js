/*
* Mock API to get data
* Node is and object with 4 properties
* 1. name - name of the node
* 2. key - unique identifier of the node (I didn't use this property but we should have it i)
* 3. isCollapsed - indicate that the node is collapsed or not
* 4. children - array of nodes that are children of this node
*/
var ApiUtils = {
	data : [
		// First tree
		{name : 'root 1', key : '1r1', isCollapsed : false, children : [
			{name : 'node 1', key : '1n1', isCollapsed : false, children : []},
			{name : 'node 2', isCollapsed : false, children : [
				{name : 'node 3', key : '1n3', isCollapsed : false, children : []},
				{name : 'node 4', key : '1n4', isCollapsed : false, children : []},
				{name : 'node 5', key : '1n5', isCollapsed : false, children : []},
				{name : 'node 6', key : '1n6', isCollapsed : false, children : []},
				{name : 'node 7', key : '1n7', isCollapsed : false, children : []},
				{name : 'node 8', key : '1n8', isCollapsed : false, children : []}
			]},
			{name : 'node 9', key : '1n9', isCollapsed : true, children : [
				{name : 'node 10', key : '1n10', isCollapsed : false, children : []},
				{name : 'node 11', key : '1n11', isCollapsed : false, children : []},
				{name : 'node 12', key : '1n12', isCollapsed : false, children : []},
				{name : 'node 13', key : '1n13', isCollapsed : false, children : []}
			]},
			{name : 'node 14', key : '1n14', isCollapsed : false, children : []},
			{name : 'node 15', key : '1n15', isCollapsed : false, children : []},
			{name : 'node 16', key : '1n16', isCollapsed : false, children : []},
			{name : 'node 17', key : '1n17', isCollapsed : false, children : []},
			{name : 'node 18', key : '1n18', isCollapsed : false, children : []},
			{name : 'node 19', key : '1n19', isCollapsed : false, children : []},
			{name : 'node 20', key : '1n20', isCollapsed : false, children : []}
		]},
		// Second tree
		{name : 'root 2', key : '2r2', isCollapsed : true, children : [
			{name : 'node 1', key : '2n1', isCollapsed : false, children : []},
			{name : 'node 2', key : '2n2', isCollapsed : true, children : [
				{name : 'node 3', key : '2n3', isCollapsed : false, children : []},
				{name : 'node 4', key : '2n4', isCollapsed : false, children : []},
				{name : 'node 5', key : '2n5', isCollapsed : false, children : []},
				{name : 'node 6', key : '2n6', isCollapsed : false, children : []},
				{name : 'node 7', key : '2n7', isCollapsed : false, children : []},
				{name : 'node 8', key : '2n8', isCollapsed : false, children : []}
			]},
			{name : 'node 9', key : '2n9', isCollapsed : false, children : [
				{name : 'node 10', key : '2n10', isCollapsed : false, children : []},
				{name : 'node 11', key : '2n11', isCollapsed : false, children : [
					{name : 'node 21', key : '2n21', isCollapsed : false, children : []},
					{name : 'node 22', key : '2n22', isCollapsed : false, children : []},
					{name : 'node 23', key : '2n23', isCollapsed : false, children : []},
					{name : 'node 24', key : '2n24', isCollapsed : false, children : []},
					{name : 'node 25', key : '2n25', isCollapsed : false, children : []},
					{name : 'node 26', key : '2n26', isCollapsed : false, children : []},
					{name : 'node 27', key : '2n27', isCollapsed : false, children : []}
				]},
				{name : 'node 12', key : '2n12', isCollapsed : false, children : []},
				{name : 'node 13', key : '2n13', isCollapsed : false, children : []}
			]},
			{name : 'node 14', key : '2n14', isCollapsed : false, children : []},
			{name : 'node 15', key : '2n15', isCollapsed : false, children : []},
			{name : 'node 16', key : '2n16', isCollapsed : false, children : []},
			{name : 'node 17', key : '2n17', isCollapsed : false, children : []},
			{name : 'node 18', key : '2n18', isCollapsed : false, children : []},
			{name : 'node 19', key : '2n19', isCollapsed : false, children : []},
			{name : 'node 20', key : '2n20', isCollapsed : false, children : []}
		]},
		// Third tree
		{name : 'root 3', key : '3r3', isCollapsed : false, children : [
			{name : 'node 1', key : '3n1', isCollapsed : false, children : []},
			{name : 'node 2', key : '3n2', isCollapsed : false, children : [
				{name : 'node 3', key : '3n3', isCollapsed : false, children : []},
				{name : 'node 4', key : '3n4', isCollapsed : false, children : []},
				{name : 'node 5', key : '3n5', isCollapsed : false, children : []},
				{name : 'node 6', key : '3n6', isCollapsed : false, children : []},
				{name : 'node 7', key : '3n7', isCollapsed : false, children : []},
				{name : 'node 8', key : '3n8', isCollapsed : false, children : []}
			]},
			{name : 'node 9', key : '3n9', isCollapsed : false, children : [
				{name : 'node 10', key : '3n10', isCollapsed : false, children : []},
				{name : 'node 11', key : '3n11', isCollapsed : false, children : [
					{name : 'node 21', key : '3n21', isCollapsed : false, children : []},
					{name : 'node 22', key : '3n22', isCollapsed : false, children : []},
					{name : 'node 23', key : '3n23', isCollapsed : false, children : []},
					{name : 'node 24', key : '3n24', isCollapsed : false, children : []},
					{name : 'node 25', key : '3n25', isCollapsed : false, children : []},
					{name : 'node 26', key : '3n26', isCollapsed : false, children : []},
					{name : 'node 27', key : '3n27', isCollapsed : false, children : []}
				]},
				{name : 'node 12', key : '3n12', isCollapsed : false, children : []},
				{name : 'node 13', key : '3n13', isCollapsed : false, children : []}
			]},
			{name : 'node 14', key : '3n14', isCollapsed : false, children : []},
			{name : 'node 15', key : '3n15', isCollapsed : false, children : []},
			{name : 'node 16', key : '3n16', isCollapsed : false, children : []},
			{name : 'node 17', key : '3n17', isCollapsed : false, children : []},
			{name : 'node 18', key : '3n18', isCollapsed : false, children : []},
			{name : 'node 19', key : '3n19', isCollapsed : false, children : []},
			{name : 'node 20', key : '3n20', isCollapsed : false, children : []}
		]}
	],

	count : 0,

	// return different data for the next call
	getData : function() {
		this.count++;
		return this.data[this.count % 3];
	}
};