import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "О курсе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Стоимость", href: "#pricing" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        fontFamily: "Manrope, sans-serif",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "#0A0A0A",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.5)" : "none",
        transition: "background-color 0.3s, box-shadow 0.3s",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}
          >
            <div style={{
              background: "#C8FF00",
              width: 36,
              height: 36,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 16,
              color: "#0A0A0A",
            }}>
              {"</>"}
            </div>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 17, letterSpacing: "-0.3px" }}>
            BogdanM<span style={{ color: "#C8FF00" }}>Courses</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", gap: 6 }} className="hidden md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  color: "rgba(255,255,255,0.72)",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "8px 14px",
                  borderRadius: 8,
                  transition: "color 0.2s, background 0.2s",
                  letterSpacing: "0.1px",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#C8FF00";
                  (e.target as HTMLElement).style.background = "rgba(200,255,0,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.72)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="#apply"
              onClick={(e) => { e.preventDefault(); handleNav("#apply"); }}
              style={{
                background: "#C8FF00",
                color: "#0A0A0A",
                fontWeight: 800,
                fontSize: 14,
                padding: "10px 22px",
                borderRadius: 10,
                textDecoration: "none",
                letterSpacing: "0.2px",
                transition: "transform 0.15s, box-shadow 0.15s",
                whiteSpace: "nowrap",
              }}
              className="hidden sm:inline-flex"
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = "scale(1.03)";
                (e.target as HTMLElement).style.boxShadow = "0 4px 20px rgba(200,255,0,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = "scale(1)";
                (e.target as HTMLElement).style.boxShadow = "none";
              }}
            >
              Записаться
            </a>

            {/* Burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                padding: 8,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
              }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            paddingBottom: 20,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: 600,
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={(e) => { e.preventDefault(); handleNav("#apply"); }}
              style={{
                display: "block",
                background: "#C8FF00",
                color: "#0A0A0A",
                fontWeight: 800,
                fontSize: 15,
                padding: "14px 0",
                borderRadius: 10,
                textDecoration: "none",
                textAlign: "center",
                marginTop: 16,
              }}
            >
              Записаться на курс
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
