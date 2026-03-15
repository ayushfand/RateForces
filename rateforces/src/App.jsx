import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContestDetails from "./pages/ContestDetails";
import Maintenance from "./pages/Maintenance";

{/* <Route path="/predictor" element={<Maintenance />} /> */}
export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/contest/:contestId" element={<ContestDetails />} />

        <Route path="/predictor" element={<Maintenance /> } />

      </Routes>

    </BrowserRouter>
  );
}