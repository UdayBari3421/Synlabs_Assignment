import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserDetails from "./Components/UserDetails.jsx";
import UserEdit from "./Components/UserEdit.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id/details" element={<UserDetails />} />
      <Route path="/:id/edit" element={<UserEdit />} />
    </Routes>
  </Router>
);
