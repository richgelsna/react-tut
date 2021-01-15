// All comments are supplementary notes to Notes.txt.  More in-depthness can be found there!
// Coincides with index.old1.html.

// 'react' is the module, 'React' is the object being imported from the module.
import React from 'react';
import ReactDOM from 'react-dom';

// jsx expression
// Babel will then compile this into React.createElement
// This is why you must: import React from 'react'
// The equivalent of this code using React object is:
//  var element = React.createElement("h1", null, "Hello World");
//
// This element is a part of the "Virtual DOM"
const element = <h1>Hello World!!</h1>;
console.log(element);

// This is a call to EXPLICITLY render in the "Real DOM".
// The second argument is referencing the <div id="root"></div> in index.html (which is alredy part of the "Real" DOM).
//
// In a realworld application, instead of rendering a single element to the DOM, we'll render our "app component".
// This app component is the root component of our application.  It includes children such as nav bar, side bar, profile, and what-not.
// We'll have a tree of components, which will eventually produce complex markup.
ReactDOM.render(element, document.getElementById("root"));