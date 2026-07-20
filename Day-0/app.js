import { a } from "./main.js";

let h1 = document.createElement("h1");

h1.textContent = "Hello I am Real Dom";

// document.body.append(h1);

let rH1 = React.createElement("div", null, [
    React.createElement("h1",{}, React.createElement("span",null,"I am Span")),
    React.createElement("h2",{}, React.createElement("span",null,"I am Span Under H2")),
]);

const root = document.querySelector("#root");

const reactDOMelm = ReactDOM.createRoot(root);

reactDOMelm.render(rH1);


console.log(a)