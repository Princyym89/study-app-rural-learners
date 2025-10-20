import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Notes from "./pages/Notes.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-100">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/notes" className="hover:underline">Notes</Link>
          <Link to="/quizzes" className="hover:underline">Quizzes</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>

        {/* Page content */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
