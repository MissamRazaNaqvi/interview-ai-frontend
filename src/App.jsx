import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Templates from "./pages/Templates";
import AIAnalysis from "./pages/AIAnalysis";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/analysis" element={<AIAnalysis />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;