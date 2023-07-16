
//ReactElement(object) => HTML(Browser Understands)

const parent = React.createElement(
    "div",
     {id:"parent"}, 
     [React.createElement(
      "div",
       {id:"children"}, 
      [React.createElement("h1", {}, "Im Nested HTML element"),
      React.createElement("h2", {}, "Im Nested HTML element2")]
      ),
      React.createElement(
        "div",
         {id:"children2"}, 
        [React.createElement("h1", {}, "Im Nested HTML element"),
        React.createElement("h2", {}, "Im Nested HTML element2")]
        )]

    );

//const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!");

console.log(parent)

        const root = ReactDOM.createRoot(document.getElementById("root"));

           root.render(parent);