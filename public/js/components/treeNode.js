/*
* Tree node component
* This component will display the node and its children based on 
* isCollapsed property in the node.
*
* For production, this file should be processed because it's JSX
* For simplicity, I just use JSXTransformer for this assignment.
* 
* In real environment with Browserify, we can use node.js 
* require statement and module.export for dependencies.
* Example:
*  var ApiUtils = require('../utils/apiUtils');
*/
var TreeNode = React.createClass({

    // Constants for node state
    EXPANDED : 'expanded',
    COLLAPSED : 'collapsed',

    // Set node state based on isCollapsed property
    // Node state will be used in render function
    getInitialState : function() {
        return this.getNodeState(this.props);
    },

    // Expand or collapse the node
    toggle : function(e) {
        // Stop propagation since parent also have handler
        e.stopPropagation();
        // Toggle between 'expanded' and 'collapsed' state
        // change 'isCollapsed' in the node to maintain state
        this.props.node.isCollapsed = !this.props.node.isCollapsed;
        // Change state of itself, this will cause component rerender
        this.setState({
            'nodeState' : this.state.nodeState === this.COLLAPSED ? this.EXPANDED : this.COLLAPSED
        });
    },

    // We set the sate here when property is changed, so we can render properly
    componentWillReceiveProps : function(nextProps) {
        this.setState(this.getNodeState(nextProps));
    },

    // Helper method to get the state object
    getNodeState : function(props) {
        return {
            'nodeState': props.node.isCollapsed ? this.COLLAPSED : this.EXPANDED
        };
    },

    render : function() {
        var node = this.props.node,
            items = node.children,
            state = this.state.nodeState,
            children;
        // Render children only when the node is in expanded state
        if (items && items.length > 0 && state === this.EXPANDED) {
            children = (<ul className="children">
                            {items.map(function(item) {
                                return (<TreeNode node={item} key={item.key}/>);
                            })}
                        </ul>);
        }

        return (
          <li className={state}>
            <button className="nodeBtn" onClick={this.toggle}>
                {node.name}
            </button>
            {children}
          </li>
          );
    }
});