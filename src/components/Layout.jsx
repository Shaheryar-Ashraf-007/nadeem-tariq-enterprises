import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Decorations */}

      {/* Top Left Circle */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#003C71]/5 blur-3xl"></div>

      {/* Bottom Right Circle */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#E2231A]/5 blur-3xl"></div>

      {/* Light Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(#003C7110 1px, transparent 1px),
            linear-gradient(90deg,#003C7110 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}