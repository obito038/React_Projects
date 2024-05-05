import './App.css'
import Dropdown from "./components/Dropdown/Dropdown"

function App() {
  

  return (
 
    <div className="App">
      <div className="content">
        <Dropdown buttonText="Dropdown button" 
        content={<p>Hello world</p>}/>
      </div>
        
     </div>
      
   
  );
};

// const App = () => {
//   return (
//     <div className="App">
//       <Dropdown />
//     </div>
//   );
// };

// export default App
