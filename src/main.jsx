import { StrictMode, useMemo } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// --- Particle Background Component ---
const ParticleBackground = () => {
  // Generate 40 random particles only once on mount
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 2, // random size between 2px and 8px
      left: Math.random() * 100, // random horizontal start position
      duration: Math.random() * 15 + 10, // random speed between 10s and 25s
      delay: Math.random() * 10, // random delay so they don't start together
      opacity: Math.random() * 0.5 + 0.3, // random opacity
    }));
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        ></span>
      ))}
    </div>
  );
};

// --- Main Render ---
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Animated Background Layer */}
      <div className="animated-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      <App />
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        
        {/* Moving Particles */}
      </div>

      {/* Your Main App Content */}
        <ParticleBackground />
    </BrowserRouter>
  </StrictMode>
);