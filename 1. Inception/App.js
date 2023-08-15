import React from "react";
import  ReactDOM  from "react-dom/client";

const Header = () =>{
    return (
        <div className="header">
            <div className="logo">
            <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Kart</li>
                   
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        
            <div className="app">

            </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

/*const heading = React.createElement(
    "h1",
    {id: "heading"},"Namaste React"
);
console.log(heading);*/

//React Element
//JSX
/*const jsxHeading = (
<h1 className="head" tabIndex="5">
    Namaste React Using JSX</h1>)

console.log(jsxHeading);



// React Component

//Normal function
const Abc = function () {
    return (<>
    <h1>Namaste Functional component</h1>
    </>)
}
//Arrow function
const Def = () => {
    return <>
    <Abc />
    <h1>Component composition- composing one component to other</h1>
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Def />);


//ReactElement(object) => HTML(Browser Understands)

/* const parent = React.createElement(
    "div",
     {id:"parent"}, 
     [React.createElement(
      "div",
       {id:"children"}, 
      [React.createElement("h1", {}, "This is Namaste React"),
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

           root.render(parent); */

