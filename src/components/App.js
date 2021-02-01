// App.js is our top most level, our Parent Component
import React from "react";    // npm package -  node_modules    --    React.createElement(tagName, props, children) -- version is found in package.json
import { format } from "date-fns";    // npm package   -  node_modules  both created when we ran npm install --  package.json
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <TestComponent/>
    </div>
  );
}

export default App;   // this line allows other files to import things from the App.js file. 
// have only one export default per file. 
