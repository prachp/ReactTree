You can run it with python simpleHttpServer.
Command on mac: python -m SimpleHTTPServer

The demo will be available at http://localhost:8000.

All CSS/JS files must be minified for production. 
React JSX files must be precompiled for production.

Tree will maintain state, like OSX finder, if you expand the child and collapse the parent, that child will be expanded when you expand the parent again.

Tested on Chrome, Firefox and Safari on OSX 10.9.5.

Unit tests are in test folder under components.
I'm using Jest framework. https://facebook.github.io/jest/

You need node.js to run the test. 
To run the test, use npm test in 'test' folder.