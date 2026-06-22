import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Templates from "./pages/Templates";
import AIAnalysis from "./pages/AIAnalysis";
import About from "./pages/About";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/Profile";
import ATSResumeChecker from "./pages/ATSResumeChecker";

import ProtectedRoute from "./protected/ProtectedRoute";
import ReportList from "./pages/ReportList";
import ReportDetail from "./pages/ReportDetail";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#172033",
            color: "#F8FAFC",
            border: "1px solid #334155",
          },
          success: {
            iconTheme: {
              primary: "#10B981",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#ffffff",
            },
          },
        }}
      />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/analysis" element={<AIAnalysis />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload-resume" element={<ATSResumeChecker />} />
            <Route path="/reports" element={<ReportList />} />
            <Route path="/report/:id" element={<ReportDetail />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;