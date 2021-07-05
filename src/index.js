import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

const App = () => {
  return (
    <div className="ui segment">
      <h1>Basic Crud Operations App</h1>
        <Form formtype="create" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
