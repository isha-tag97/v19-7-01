// import React,{useState,useEffect, useContext,useRef,useMemo} from 'react'
// function Hook() {
//     const [count, setCount] = useState(0);
//     // const [inputValue, setInputValue] = useState("");
//     // const count = useRef(0);
//     const [number, setNumber] = useState(0);
//     const [counter, setCounter] = useState(0);

//   const [todos, setTodos] = useState<string[]>([]);

//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };
// //     function cubeNum(num) {
// //         console.log('done.!');
// //         return Math.pow(num,3)
// //     }
// //     const result =cubeNum(number)

// //   useEffect(() => {
// //     count.current = count.current + 1;
// //   });
// useEffect(()=>{
//     console.log('kkkkkkkkkkkkk');

//     setTimeout(()=>{
//         setCount((count)=>count+1);
//     },100);
// }, [todos])

//     // const handleClick = () => {
//     //   setCount(count + 1);
//     // };

//   return (
//     <div>

//           {/* <h5>count:{count}</h5> */}
//       {/* <button onClick={handleClick}>Incre</button>
//         //  <h4> counted {count}</h4> */}
//   {/* <input type='number' value={number} onChange={(e)=>{
//     setNumber(e.target.value)
// }}/>
// <h6>cube the num-{result}</h6>

// <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h6>Render Count: {count.current}</h6> */}
// {/*
// <h4>Todo List:</h4>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//       <button onClick={addTodo}>Add Todo</button>
//     </div>
//   );
// }

// export default Hook  */}

// import React,{createContext, useContext, useState}from 'react'
// const UserContext = createContext('');

// function Hook() {
//     const [user,setUser]=useState("Isha");

//   return (
//     <div>

// <UserContext.Provider value={user}>
// <h5>{`Hello ${user}!`}</h5>
// <Component2/>
// </UserContext.Provider>
//     </div>
//   );
// }

// function Component2() {
//     return (
//       <>
//         <h5>Component 2</h5>
//         <Component3 />
//       </>
//     );
//   }

//   function Component3() {
//     const user = useContext(UserContext);
//     return (
//       <>
//          <h5>Component 5</h5>
//          <h6>{`Hello ${user} again!`}</h6>
//       </>
//     );
//   }

// import React, { useRef } from 'react';

// function Hook() {

//   const colorBtn = useRef(null);

//   const handleSetColor = () => {

//     if ( colorBtn.current) {
//         let a = colorBtn.current as HTMLElement;
//         a.style.backgroundColor = '#d580ff';
//     }
//   };

//   return (
//     <div>

//       <button ref={ colorBtn}>Color</button>
//       <button onClick={handleSetColor}>set-color</button>
//     </div>
//   );
// }

// export default Hook;

import React, { useMemo } from 'react';

function Hook() {
  const Cal = useMemo(() => {
    console.log('Calculating...');
    return 10 * 10;
  }, []);

  return (
    <div>
      <p>Expensive Calculation Result: {Cal}</p>
    </div>
  );
}

export default Hook;

// import React, { useState, useEffect } from "react";

// function useFetch(url) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then(setData);
//   }, [url]);

//   return data;
// }

// function Hook() {
//   const data = useFetch("https://jsonplaceholder.typicode.com/todos");

//   return (
//     <div>
//       {data.map((item) => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }

// export default Hook;

// import React, { useReducer } from "react";

// function Hook() {
//   const iniState = { count: 0 };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "incre":
//         return { count: state.count + 1 };
//       case "decre":
//         return { count: state.count - 1 };
//       case "reset":
//         return { count: 0 };
//       default:
//         return state;
//     }
//   };
//   const [state, add] = useReducer(reducer, iniState);
//   return (
//     <div>
//       <h4>count-{state.count}</h4>
//       <button onClick={() => add({ type: "incre" })}>inc</button>
//       <button onClick={() => add({ type: "decre" })}>dec</button>
//       <button onClick={() => add({ type: "reset" })}>Reset</button>
//     </div>
//   );
// }

// export default Hook;
