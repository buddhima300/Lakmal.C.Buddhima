import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VisionMTech } from "./pages/VisionMTech/Index";
import { MainPortfolio } from "./pages/MainPortfolio/Index";
import { VisionCreative } from "./pages/VisionCreative/Index";
import { VisionAssignment } from "./pages/VisionAssignment/Index";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const parallaxOffset = scrollPosition * 0.15;
  return (
    <>
      <BrowserRouter>
        <div className="background-img min-h-screen w-full text-white overflow-x-hidden">
          {/* Modern animated background */}
          <div
            className="fixed inset-0 mask-t-from-50% mask-t-to-90%  bg-[url('https://images.unsplash.com/photo-1582161139673-69b83f1062fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1MXx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-100 pointer-events-none"
            style={{
              transform: `translateY(${parallaxOffset}px)`,
            }}
          />
          {/* Animated gradient shapes */}
          <div
            className="fixed top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600 blur-[120px] opacity-10 animate-pulse pointer-events-none"
            style={{
              transform: `translate(${cursorPosition.x * 0.02}px, ${
                cursorPosition.y * 0.02
              }px)`,
            }}
          />
          <div
            className="fixed bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600 blur-[120px] opacity-10 animate-pulse pointer-events-none"
            style={{
              transform: `translate(${-cursorPosition.x * 0.01}px, ${
                -cursorPosition.y * 0.01
              }px)`,
            }}
          />
          <div
            className="fixed top-2/3 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500 blur-[100px] opacity-10 animate-pulse pointer-events-none"
            style={{
              transform: `translate(${-cursorPosition.x * 0.015}px, ${
                -cursorPosition.y * 0.015
              }px)`,
            }}
          />
          {/* SVG noise overlay for texture */}
          <div className="fixed inset-0 opacity-[0.15] pointer-events-none">
            <svg width="100%" height="100%">
              <filter id="noise">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.80"
                  numOctaves="4"
                  stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
          </div>
          <div className="relative z-10">
            <Navbar />
            <main className="h-screen">
              <Routes>
                <Route path="/Lakmal.C.Buddhima" element={<MainPortfolio />} />
                <Route path="/vision-m-tech" element={<VisionMTech />} />
                <Route path="/vision-creative" element={<VisionCreative />} />
                <Route
                  path="/vision-assignment"
                  element={<VisionAssignment />}
                />
              </Routes>
            </main>
            {/* <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
