// import logo from "./logo.svg";
import { getImageUrl } from "./util.js";
import "./App.css";
import { people } from "./data.js";
import { useState } from "react";


const App = () => {
  const [age, setAge] = useState(42);
  const [name, setName] = useState("Taylor");

  const handleClick = () => {

    // let newName = "Robin";



    // setName(newName);

    setName("Tylor");
    
  };

   
  return (
    <>
      <button onClick={handleClick}> { name }</button>;
      <input value={age} onInput={(e)=>setAge(e.target.value)}></input>
      {age}
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React by P'Mulahn
//         </a>
//       </header> */}
//       <img
//        src="https://i.imgur.com/MK3eW3As.jpg">

//       </img>
//     </div>
//   );
// }
// const App = () => {
//   return (

//       <Card>
//         <Avatar
//           size={100}
//           person={{
//             name: "Katsuko Saruhashi",
//             imageId: "YfeOqp2",
//           }}
//         />
//       </Card>

//   );
// };

// const Avatar = ({ person, size }) => {
//   return (

//       <img
//         className="avatar"
//         src={getImageUrl(person)}
//         alt={person.name}
//         width={size}
//         height={size}
//       />

//   );
// };

// const Card = ({ children }) => {
//   return (

//       <div className="card">{children}</div>

//   );
// };

export default App;
