// Translations
import "./i18n.js";

// Styles
import "./global.css";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import JourneyPage from "./pages/JourneyPage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import MyWayPage from "./pages/MyWayPage.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/myway" element={<MyWayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
