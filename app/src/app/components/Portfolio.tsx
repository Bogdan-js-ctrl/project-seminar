import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "Кофейня «Аромат»",
    desc: "Лендинг для кофейни с онлайн-заказом",
    student: "Анна Петрова",
    tags: ["HTML", "CSS", "JS"],
    img: "https://images.unsplash.com/photo-1675317120753-ce28b951e9e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW8lMjBsYXB0b3AlMjBzY3JlZW58ZW58MXx8fHwxNzc1MTU0NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#C8FF00",
  },
  {
    title: "Fitness Pro",
    desc: "Сайт фитнес-клуба с расписанием и записью",
    student: "Дмитрий Козлов",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "https://images.unsplash.com/photo-1760008486593-a85315610136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9kZXJuJTIwVUl8ZW58MXx8fHwxNzc1MTU0NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#9D4DFF",
  },
  {
    title: "TravelApp",
    desc: "Агрегатор туров с фильтрами и картой",
    student: "Мария Иванова",
    tags: ["JS", "API", "CSS Grid"],
    img: "https://images.unsplash.com/photo-1767449181027-dbca7575f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBtb2JpbGUlMjBkZXNpZ24lMjBVSSUyMHBvcnRmb2xpbyUyMHByb2plY3R8ZW58MXx8fHwxNzc1MTU0NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#C8FF00",
  },
  {
    title: "Portfolio Site",
    desc: "Персональный сайт-портфолио разработчика",
    student: "Алексей Смирнов",
    tags: ["HTML", "CSS", "Animations"],
    img: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdlYnNpdGUlMjBsYW5kaW5nJTIwcGFnZSUyMFVJfGVufDF8fHx8MTc3NTE1NDUxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    accent: "#9D4DFF",
  },
];

export function Portfolio() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? portfolioItems.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === portfolioItems.length - 1 ? 0 : c + 1));

  return (
    <section
      id="portfolio"
      style={{
        fontFamily: "Manrope, sans-serif",
        backgroundColor: "#0D0D0D",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
          <div>
            <span style={{ color: "#C8FF00", fontSize: 13, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
              ПОРТФОЛИО СТУДЕНТОВ
            </span>
            <h2 style={{
              color: "#FFFFFF",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginTop: 12,
              textTransform: "uppercase",
            }}>
              РАБОТЫ НАШИХ<br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>УЧЕНИКОВ</span>
            </h2>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={prev}
              style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                border: "1.5px solid rgba(255,255,255,0.15)",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#C8FF00";
                (e.currentTarget as HTMLElement).style.background = "rgba(200,255,0,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                border: "1.5px solid rgba(255,255,255,0.15)",
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#C8FF00";
                (e.currentTarget as HTMLElement).style.background = "rgba(200,255,0,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Grid of cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}>
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                overflow: "hidden",
                opacity: i === current ? 1 : 0.65,
                transition: "opacity 0.3s, transform 0.3s",
                transform: i === current ? "scale(1.02)" : "scale(1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = i === current ? "1" : "0.65";
              }}
            >
              <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  display: "flex",
                  gap: 6,
                }}>
                  {item.tags.map(tag => (
                    <span key={tag} style={{
                      background: item.accent,
                      color: item.accent === "#C8FF00" ? "#0A0A0A" : "#fff",
                      fontSize: 11,
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: 6,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: "20px 22px" }}>
                <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 18, margin: "0 0 6px 0" }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.5, margin: "0 0 16px 0" }}>{item.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, fontWeight: 600 }}>
                    👤 {item.student}
                  </span>
                  <button
                    style={{
                      background: "transparent",
                      border: `1.5px solid ${item.accent}`,
                      borderRadius: 8,
                      padding: "6px 14px",
                      cursor: "pointer",
                      color: item.accent,
                      fontSize: 13,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "Manrope, sans-serif",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `${item.accent}15`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    Смотреть <ExternalLink size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 32 }}>
          {portfolioItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 100,
                background: i === current ? "#C8FF00" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "width 0.3s, background 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
