/*
* Tree component
* Automatically get the data from ApiUtils
*
* For production, this file should be processed because it's JSX
* For simplicity, I just use JSXTransformer for this assignment.
*
* In real environment with Browserify, we can use node.js 
* require statement and module.export for dependencies.
* Example:
*  var ApiUtils = require('../utils/apiUtils'),
*      TreeNode = require('./treeNode');
*/
// These if statements are for nodejs test
// we should just use require in real environment
if (!React && module) {
    var React = require('react/addons');
}

if (!$) {
    var $ = require('jquery');
}

if (!ApiUtils) {
    var ApiUtils = require('ApiUtils');
}

if (!TreeNode) {
    var TreeNode = require('./treeNode.js');
}

var Tree = React.createClass({

    getNewData : function() {
        // Set 'root' to deep clone of the data
        this.setState({'root' : $.extend(true, {}, ApiUtils.getData())});
    },

    // We could change the way we get the data if we have another API to get specific root.
    // Deep clone since we will change the object to maintain state.
    componentDidMount : function() {
        // In reality, we might make an ajax call here to get the data
        this.setState({'root' : $.extend(true, {}, ApiUtils.getData())});
    },

    getInitialState : function() {
        return {
            'root' : {}
        };
    },

    render : function() {
        var root = this.state.root;
        // If key is empty, show the right message
        if (!root || !root.key) {
            return (<span className="errorMessage">Tree is empty</span>);
        } 
        return (
            <div>
                <h1>{root.name}</h1>
                <button onClick={this.getNewData}>Change Data</button>
                <ul>
                    <TreeNode node={root} key={root.key}/>
                </ul>
            </div>
          );
    }
});

//for nodejs test
if (module && module.exports) {
    module.exports = Tree;
}