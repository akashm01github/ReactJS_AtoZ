// const obj = {
//     userName:"Akash",
//     age:25,
//     company:"Devant"
// }


// const fn  = ({userName,company})=>{
//     console.log(userName,company)
// }

// fn(obj)


// let a = 990;

// let print = ()=>{
//     console.log(a)
// }


// let ab = ()=>{
//     let a = 90;
//     print();
// };

// ab();


const h1 = document.createElement("h1");

console.log("Real DOM", h1);

const rH1 = React.createElement("div", {}, 
            React.createElement("div", {}, 
            React.createElement("h1", {}, "This is H1") )
);

console.log("Virtual DOM",rH1)