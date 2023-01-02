/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";
// React.createElement => obj => html(dom)
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 for parcel"
); // react element






// new way JSX---------------
//JSX => React.createElement => obj => html(DOM)
const heading2 = (
  <h2 id="title" key='h2'>Namaste react</h2>
); // jsx syntax


const Title = () =>(
  <h2 id="title1" key='h11'> Title</h2>
); // jsx syntax
//component composition --> nested compoenents
const HeadingElement =() =>{
  return(
    <div>
      {heading2}

      {Title()}
  <Title />
      <h1>Namaste funcional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading2);
root.render(<HeadingElement />);