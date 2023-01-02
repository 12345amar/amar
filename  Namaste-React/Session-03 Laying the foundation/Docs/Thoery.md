## Chapter 3 - Laying the foundation

# Que : What is JSX?
Ans : JSX (JavaScript XML) is a syntax extension for JavaScript that allows
developers to write HTML-like code in their JavaScript files. It was
developed by Facebook as a way to make it easier for developers to build
user interfaces (UI) using React, a JavaScript library for building user
interfaces.
JSX looks similar to HTML, but it is not HTML. It is a syntax extension for
JavaScript, which means that it gets compiled into regular JavaScript code
by a transpiler (e.g., Babel) before it is executed in the browser.
Here's an example of a simple JSX element:
const element = <h1>Hello, world!</h1>;
This JSX element is equivalent to the following JavaScript code:
const element = React.createElement('h1', null, 'Hello, world!');
JSX elements can be nested, just like HTML elements:
const element = (
<div>
<h1>Hello, world!</h1>
<p>This is a paragraph.</p>
</div>
);

JSX elements can also include JavaScript expressions, using curly braces:
const name = 'John';
const element = <h1>Hello, {name}!</h1>;


# JSX in Not HTML, Its HTML Look like Code
Explanation:
JSX is not HTML. It is a syntax extension for JavaScript that allows
developers to write HTML-like code in their JavaScript files. It looks similar
to HTML, but it is not HTML.
JSX is a syntax extension for JavaScript, which means that it gets compiled
into regular JavaScript code by a transpiler (e.g., Babel) before it is executed
in the browser. This means that you can use JSX to write HTML-like code in
your JavaScript files, but it gets transpiled into regular JavaScript before it
is run in the browser.
Here's an example of a simple JSX element:
const element = <h1>Hello, world!</h1>;
This JSX element is equivalent to the following JavaScript code:
const element = React.createElement('h1', null, 'Hello, world!');

# How JSX & HTML is different?
JSX is different from HTML in a few ways:
JSX is not HTML: As I mentioned earlier, JSX is a syntax extension for
JavaScript, not a separate language. It gets transpiled into regular
JavaScript code before it is executed in the browser.
JSX uses camelCase: In HTML, element and attribute names are written in
lowercase and hyphenated (e.g., <div class="header">). In JSX, element and
attribute names are written in camelCase (e.g., <div className="header">).
JSX allows you to use JavaScript expressions: In JSX, you can use curly
braces to include JavaScript expressions within your JSX code. For example:
const name = 'John';
const element = <h1>Hello, {name}!</h1>;
JSX requires a transpiler: Because JSX is not natively supported by modern
web browsers, you need to use a transpiler (e.g., Babel) to convert your JSX
code into regular JavaScript code that the browser can understand.

# Que: what are the superpowers of JSX?
Ans: JSX has several benefits or "superpowers" that make it a useful tool for
building user interfaces with React:
● It makes it easier to write JSX: JSX provides a syntax for writing
HTML-like code in your JavaScript files, which can be more familiar to
developers who are familiar with HTML.
● It makes your code more expressive: Because you can use JavaScript
expressions within your JSX code, you can write more expressive and
dynamic UI code.
● It provides type checking: When using a type checker like TypeScript,
you can use JSX to provide type annotations for your UI components,
which can help catch bugs and improve the reliability of your code.
● It provides performance benefits: When you write your UI code in
JSX, it gets compiled into regular JavaScript code, which can be
optimized by modern JavaScript engines for better performance.
● It makes it easier to work with the React API: Because JSX is closely
tied to the React API, it can make it easier to work with React
features like state and lifecycle methods.
Overall, JSX is a powerful tool that can make it easier and more efficient to
build user interfaces with React.

# Que: Role of Type Attribute in script tag, what options can i use there
Ans: The type attribute in a script tag specifies the type of script that is
being included in the HTML document. The value of the type attribute
should be a valid MIME type for a script.
Here are some common values for the type attribute:
● text/javascript: This is the default value for the type attribute if it is
not specified. It indicates that the script is written in JavaScript.
● module: This value indicates that the script is a JavaScript module,
which is a file that exports one or more JavaScript values and can be
imported by other scripts using the import statement.
● text/ecmascript: This value indicates that the script is written in
ECMAScript, which is a standardized version of JavaScript.
● text/babel: This value indicates that the script is written in a dialect
of JavaScript that needs to be transpiled by the Babel transpiler.
● text/typescript: This value indicates that the script is written in
TypeScript, which is a superset of JavaScript that adds type
annotations and other features.
It is generally recommended to include the type attribute in your script
tags to specify the type of script being included, as this can help the
browser parse and execute the script correctly.

# Que: {titleComponent} vs {<titleComponent>} vs
{<titleComponent></titleComponent>} in JSX
Ans: In JSX, curly braces { } are used to embed expressions or variables
within the JSX code. The curly braces are used to evaluate the expression or
variable and include its value in the resulting JSX element.
Here are some examples of how curly braces are used in JSX:
{titleComponent}: This syntax is used to include a variable or expression in
the JSX element. The value of titleComponent will be evaluated and
included in the JSX element.
{<titleComponent>}: This syntax is not valid in JSX. You cannot include a
JSX element inside curly braces. Instead, you should write the JSX element
directly in the JSX code, like this: <titleComponent>.
<titleComponent></titleComponent>: This syntax is used to create a JSX
element that has a starting and ending tag. The content between the
starting and ending tags will be included in the JSX element.
In summary, you should use curly braces { } to include variables or
expressions in your JSX code, and you should write JSX elements directly in
your JSX code, using starting and ending tags if necessary.

# Topics :
# React.createElement vs JSX
React.createElement and JSX are two ways to create React elements,
which are the building blocks of React applications.
React.createElement is a function provided by the React library that allows
you to create React elements by specifying the element type, its props, and
its children. It is the most basic way to create React elements and is used
under the hood by JSX.

# Here is an example of how you would use React.createElement to create a
simple React element:
const element = React.createElement('h1', {className: 'header'}, 'Hello,
world!');
This code creates a h1 element with the class name header and the text
content Hello, world!.
JSX is a syntax extension for JavaScript that allows you to write HTML-like
code in your React applications. It is not a part of the JavaScript language,
but it is transpiled by tools like Babel into calls to React.createElement.
Here is an example of how you would use JSX to create the same element
as in the previous example:
const element = <h1 className="header">Hello, world!</h1>;
In this case, the JSX code is transpiled into a call to React.createElement
that has the same arguments as in the previous example.
JSX is generally easier to read and write than the equivalent calls to
React.createElement, and it is the recommended way to create React
elements in most cases. However, you can use React.createElement if you
prefer or if you need to dynamically create elements based on runtime
conditions.

# Benefits of JSX
JSX has several benefits when compared to using React.createElement
directly:
Easier to read and write: JSX is more concise and easier to read than the
equivalent calls to React.createElement, which makes it easier to
understand the structure of your React components.
Better error messages: JSX produces better error messages than
React.createElement, which can make debugging easier.
Support for JSX expressions: You can use JSX expressions to embed
JavaScript values in your JSX code, which can be useful for rendering
dynamic content.
Improved performance: JSX can be optimized by the React runtime for
better performance in some cases.
Type checking: JSX supports type checking with tools like TypeScript and
Flow, which can help catch errors and improve the overall quality of your
code.
Overall, JSX is a powerful and convenient way to create React elements,
and it is the recommended way to create React elements in most cases.
How JSX Works Behind The Scene
JSX is a syntax extension for JavaScript that allows you to write HTML-like
code in your JavaScript code. When your code is transpiled (converted)
from JSX to regular JavaScript, the JSX is transformed into regular
JavaScript function calls.
For example, consider the following JSX code:
<div className="container">
<h1>Hello, world!</h1>
<p>I am a paragraph.</p>
</div>
This JSX code will be transpiled into the following JavaScript code:
React.createElement("div", { className: "container" },
React.createElement("h1", null, "Hello, world!"),
React.createElement("p", null, "I am a paragraph.")
);
As you can see, the JSX code is transformed into calls to the
React.createElement function, which is used to create React elements.
Each JSX element is transpiled into a call to React.createElement, and the
attributes and children of the element are passed as arguments to the
function.
This transformation happens automatically when you use a tool like Babel
to transpile your JSX code into regular JavaScript. You don't need to worry
about the details of the transformation, but it's helpful to understand what
is happening behind the scenes when you use JSX in your React code.

# Babel and Parcel Role in JSX
Babel is a tool that is commonly used to transpile JSX code into regular
JavaScript. When you write JSX in a React app, you typically write your
code in a file with a .jsx extension. When you run your app, Babel transpiles
the JSX code into regular JavaScript that can be run in a web browser.
Parcel is a JavaScript bundler that can be used to build and deploy web
applications. It can be used with React apps that use JSX, and it can
automatically transpile the JSX code into regular JavaScript as part of the
build process.
So, to summarize, Babel and Parcel both play a role in the use of JSX in a
React app. Babel is primarily responsible for transpiling the JSX code into
regular JavaScript, while Parcel is a tool that can be used to build and
deploy the app.

# React Components, How To Create Component
In React, a component is a piece of code that represents a part of a user
interface. Components can be either functional or class-based, and they
can be reused throughout an application to help make it more modular
and maintainable.
Here's an example of how you might create a simple functional
# component in React:

import React from 'react';
const MyComponent = (props) => {
return (
<div>
<h1>Hello, {props.name}!</h1>
<p>Welcome to my component.</p>
</div>
);
}

export default MyComponent;
To use this component in another part of your app, you would need to
# import it and then render it using JSX:
import React from 'react';
import MyComponent from './MyComponent';

function App() {
return (
<div>
<MyComponent name="John" />
</div>
);
}

This would render a heading that says "Hello, John!" and a paragraph that
says "Welcome to my component."
Class-based components work in a similar way, but instead of using a
function to define the component, you define a class with a render()
# method that returns the JSX for the component:

import React from 'react';
class MyComponent extends React.Component {
render() {
return (
<div>
<h1>Hello, {this.props.name}!</h1>
<p>Welcome to my component.</p>
</div>
);
}
}
export default MyComponent;

Composing Components ( Components Composition )
Components composition is a way of building complex user interfaces in
React by combining simple, reusable components. This helps to make your
code more modular, reusable, and easier to maintain.

# React Without JSX ?
It is possible to use React without using JSX. Instead of using JSX to create
elements, you can use the React.createElement() function to create
elements and components.
Here is an example of creating a simple component without using JSX:

const Greeting = () => {
return React.createElement('div', {}, `Hello, World!`);
};

To render this component, you can use the ReactDOM.render() function:

ReactDOM.render(
React.createElement(Greeting),
document.getElementById('root')
);

Using React.createElement() can be more verbose than using JSX, so JSX is
often preferred for creating React components. However, it is important to
understand that JSX is just a syntax sugar for React.createElement() and
that you can use either one to create React components.
but if will be messed if we use create element to make complex UI
Using React.createElement() can be more verbose and difficult to read and
write, especially for complex UI components. With JSX, you can use familiar
HTML-like syntax to create elements and components, which can make it
easier to read and write your code.

# Here is an example of a complex UI component written with JSX:

const App = () => {
return (
<div className="app">
<header>
<img src="/logo.png" alt="Logo" />
<h1>Welcome to my App</h1>
</header>
<main>
<p>This is the main content of the app.</p>
</main>
<footer>
<p>Copyright 2021</p>
</footer>
</div>
);
};

If you were to write this component using React.createElement(), it would
be much longer and more difficult to read and understand.
That's why it is generally recommended to use JSX when creating React
components, especially for complex UI components. However, it is
important to understand that JSX is just a syntax sugar for
React.createElement() and that you can use either one to create React
components.
