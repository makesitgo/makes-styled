import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

function render(Component: React.ComponentType<any>) {
  ReactDOM.render(<Component />, document.getElementById("root"));
}

render(App);

if ((module as any).hot) {
  (module as any).hot.accept("./app", () => {
    const App = require("./app").default;
    render(App);
  });
}
