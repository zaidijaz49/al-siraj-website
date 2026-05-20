import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm border-b border-green-100" : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center text-white font-bold text-base">
            A
          </div>
          <div>
            <div className="font-display font-bold text-[15px] text-brand-dark leading-tight">
              Al-Siraj
            </div>
            <div className="text-[9px] uppercase tracking-widest text-gray-400 font-sans">
              Welfare Foundation
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors no-underline ${
                location.pathname === to
                  ? "text-brand"
                  : "text-gray-500 hover:text-brand-dark"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Donate btn */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="flex items-center gap-1.5 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-mid transition-colors no-underline"
          >
            <Heart size={14} />
            Donate
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block py-2.5 text-sm font-medium no-underline ${
                location.pathname === to ? "text-brand" : "text-gray-600"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="flex items-center gap-1.5 mt-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full w-fit no-underline"
          >
            <Heart size={14} /> Donate
          </Link>
        </div>
      )}
    </header>
  );
}
