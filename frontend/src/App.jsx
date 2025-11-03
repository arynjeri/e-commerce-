// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages
import AIAssistant from "./pages/AIAssistant";
import Community from "./pages/Community";
import FinanceTracker from "./pages/FinanceTracker";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import MaterialTracker from "./pages/MaterialTracker";
import ProjectTracker from "./pages/ProjectTracker";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projecttracker" element={<ProjectTracker />} />
        <Route path="/financetracker" element={<FinanceTracker />} />
        <Route path="/materialtracker" element={<MaterialTracker />} />
        <Route path="/community" element={<Community />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/aiassistant" element={<AIAssistant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
