import "./App.scss";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";
import { HomePage } from "./pages/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/teams/:teamName/matches/:year"
            element={<MatchPage />}
          />
          <Route path="/teams/:teamName" element={<TeamPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
