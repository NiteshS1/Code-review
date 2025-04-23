// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Main from "./components/Main/Main";
// import Review from "./components/Review/Review";
// import Navbar from "./components/Navbar/Navbar";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// function App() {
//   const isAuthenticated = false; // Yeh authentication check karega (future mein backend se connect hoga)

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Review />} />
//         <Route 
//           path="/chatbot" 
//           element={isAuthenticated ? <><Sidebar /><Main /></> : <Navigate to="/login" />} 
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Chatbot";
import Review from "./components/Review/Review";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const isAuthenticated = true; // Yeh authentication check karega (future mein backend se connect hoga)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Review />} />
        <Route 
          path="/chatbot" 
          element={isAuthenticated ? <>
            <Sidebar />
            <Main />
          </> : <Navigate to="/login" />} 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
