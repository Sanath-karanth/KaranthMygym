
import React from "react";
import {
  Routes,
  Route,
} from 'react-router-dom';
import DashboardPage from './components/dashBoardScreen';
import ExercisePage from './components/exerciseScreen';
import AboutPage from './components/aboutScreen';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/exercise" element={<ExercisePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
  );
};

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
