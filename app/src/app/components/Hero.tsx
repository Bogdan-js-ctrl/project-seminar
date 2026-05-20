import { useEffect, useRef } from "react";
import { ArrowRight, Star, Users } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1744555270794-6d378b9e7cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjBjb2RpbmclMjBkYXJrJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NTE1NDUxMHww&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        fontFamily: "Manrope, sans-serif",
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 68,
      }}
    >
      {/* Background image with overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        opacity: 0.18,
      }} />

      {/* Grid pattern overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(rgba(200,255,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.04) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Gradient overlays */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        background: "linear-gradient(to top, #0A0A0A, transparent)",
      }} />
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(157,77,255,0.12) 0%, transparent 70%)",
        transform: "translate(20%, -20%)",
      }} />
      <div style={{
        position: "absolute",
        bottom: 100,
        left: -100,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,255,0,0.08) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 2, width: "100%" }}>
        <div style={{ maxWidth: 780 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(200,255,0,0.1)",
            border: "1px solid rgba(200,255,0,0.25)",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 32,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#C8FF00", display: "inline-block" }} />
            <span style={{ color: "#C8FF00", fontSize: 13, fontWeight: 700, letterSpacing: "0.5px" }}>
              НАБОР ОТКРЫТ · СТАРТ В МАЕ 2026
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            color: "#FFFFFF",
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-3px",
            marginBottom: 28,
            textTransform: "uppercase",
          }}>
            СТАНЬ
            <br />
            <span style={{ color: "#C8FF00" }}>ВЕБ-</span>
            <br />
            РАЗРАБОТ
            <br />
            ЧИКОМ
          </h1>

          {/* Subtitle */}
          <p style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.65,
            marginBottom: 44,
            maxWidth: 520,
          }}>
            Освойте HTML, CSS и JavaScript с нуля за 4 месяца.
            Получи 3 проекта в портфолио и поддержку в трудоустройстве в IT.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
            <button
              onClick={() => handleNav("#apply")}
              style={{
                background: "#C8FF00",
                color: "#0A0A0A",
                fontWeight: 800,
                fontSize: 16,
                padding: "16px 34px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
                transition: "transform 0.15s, box-shadow 0.15s",
                fontFamily: "Manrope, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(200,255,0,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Записаться на курс <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleNav("#about")}
              style={{
                background: "transparent",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 34px",
                borderRadius: 12,
                border: "1.5px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "border-color 0.2s, background 0.2s",
                fontFamily: "Manrope, sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,255,0,0.5)";
                (e.currentTarget as HTMLElement).style.background = "rgba(200,255,0,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Узнать больше
            </button>
          </div>

          {/* Social proof */}
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                padding: "8px 14px",
              }}>
                <Users size={16} style={{ color: "#C8FF00" }} />
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>500+ студентов</span>
              </div>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: "8px 14px",
            }}>
              <div style={{ display: "flex", gap: 2 }}>
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={14} style={{ color: "#C8FF00", fill: "#C8FF00" }} />
                ))}
              </div>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Рейтинг 4.9/5</span>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: "8px 14px",
            }}>
              <span style={{ color: "#C8FF00", fontWeight: 800, fontSize: 14 }}>85%</span>
              <span style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600, fontSize: 14 }}>находят работу</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side decorative code block */}
      <div className="hidden lg:block" style={{
        position: "absolute",
        right: "6%",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        background: "rgba(20,20,20,0.9)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        padding: "24px 28px",
        maxWidth: 320,
        backdropFilter: "blur(10px)",
      }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F56", display: "inline-block" }} />
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27C93F", display: "inline-block" }} />
        </div>
        <pre style={{ margin: 0, fontSize: 13, lineHeight: 1.7, fontFamily: "monospace" }}>
          <span style={{ color: "#9D4DFF" }}>const</span>
          <span style={{ color: "#fff" }}> developer </span>
          <span style={{ color: "#C8FF00" }}>=</span>
          <span style={{ color: "#fff" }}> {"{"}</span>
          {"\n"}
          <span style={{ color: "#fff" }}>  name: </span>
          <span style={{ color: "#FFA552" }}>"Ты"</span>
          <span style={{ color: "#fff" }}>,</span>
          {"\n"}
          <span style={{ color: "#fff" }}>  level: </span>
          <span style={{ color: "#FFA552" }}>"Junior → Middle"</span>
          <span style={{ color: "#fff" }}>,</span>
          {"\n"}
          <span style={{ color: "#fff" }}>  skills: [</span>
          {"\n"}
          <span style={{ color: "#FFA552" }}>    "HTML"</span>
          <span style={{ color: "#fff" }}>, </span>
          <span style={{ color: "#FFA552" }}>"CSS"</span>
          <span style={{ color: "#fff" }}>,</span>
          {"\n"}
          <span style={{ color: "#FFA552" }}>    "JavaScript"</span>
          {"\n"}
          <span style={{ color: "#fff" }}>  ],</span>
          {"\n"}
          <span style={{ color: "#fff" }}>  salary: </span>
          <span style={{ color: "#C8FF00" }}>"↑ x3"</span>
          {"\n"}
          <span style={{ color: "#fff" }}>{"}"}</span>
        </pre>
        <div style={{
          marginTop: 16,
          padding: "10px 14px",
          background: "rgba(200,255,0,0.08)",
          borderRadius: 8,
          border: "1px solid rgba(200,255,0,0.15)",
        }}>
          <span style={{ color: "#C8FF00", fontSize: 12, fontWeight: 700 }}>✓ Через 4 месяца это будешь ты</span>
        </div>
      </div>
    </section>
  );
}
