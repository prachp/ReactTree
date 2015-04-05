/*
* Main javascript for injecting Tree components to the page
* Inject 2 tree components here to show that it's reusable.
*/

React.render(
  <Tree />,
  $('#firstTree')[0]
);

React.render(
  <Tree />,
  $('#secondTree')[0]
);