const rH1 = React.createElement("h1", {}, "Jay Maa");

const realDOMelem = document.querySelector("#root");

const root = ReactDOM.createRoot(realDOMelem);


root.render(rH1);