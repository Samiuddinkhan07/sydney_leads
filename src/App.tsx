import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Membership,
  Foundation,
  Research,
  Volunteer,
  Legal,
} from "./pages/export";
import Layout from "./components/ui/layout/layout";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/research" element={<Research />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/legal" element={<Legal />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
