const stats = [
  { value: "4", unit: "месяца", label: "длительность курса", color: "#C8FF00", textColor: "#0A0A0A" },
  { value: "8", unit: "модулей", label: "структурированная программа", color: "#9D4DFF", textColor: "#fff" },
  { value: "3", unit: "проекта", label: "в портфолио после курса", color: "#0A0A0A", textColor: "#fff", border: "1px solid rgba(255,255,255,0.1)" },
  { value: "24/7", unit: "доступ", label: "к урокам и материалам", color: "#1A1A1A", textColor: "#fff", border: "1px solid rgba(255,255,255,0.1)" },
];

const courseImg = "https://images.unsplash.com/photo-1732210038531-9cefab37885a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2dyYW1tZXIlMjBjb2RpbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzUxNTQ1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function About() {
  return (
    <section
      id="about"
      style={{
        fontFamily: "Manrope, sans-serif",
        backgroundColor: "#0D0D0D",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 60 }}>
          <span style={{
            color: "#C8FF00",
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}>О КУРСЕ</span>
          <h2 style={{
            color: "#FFFFFF",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginTop: 12,
            textTransform: "uppercase",
          }}>
            ОСНОВЫ ВЕБ-РАЗРАБОТКИ<br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>ДЛЯ КАРЬЕРЫ</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
          {/* Left: description */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{
              background: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: "36px 32px",
            }}>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, lineHeight: 1.7, margin: "0 0 24px 0" }}>
                Курс «Основы веб-разработки для карьеры» — это практический путь от нуля до трудоустройства в IT.
                Без лишней теории: каждый модуль заканчивается реальным проектом.
              </p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.65, margin: 0 }}>
                Подходит для тех, кто хочет сменить профессию или начать зарабатывать в интернете.
                Уровень подготовки — от нуля.
              </p>
              <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["HTML & CSS", "JavaScript", "Git", "VS Code", "APIs", "Карьера"].map(tag => (
                  <span key={tag} style={{
                    background: "rgba(200,255,0,0.08)",
                    border: "1px solid rgba(200,255,0,0.2)",
                    color: "#C8FF00",
                    fontSize: 13,
                    fontWeight: 700,
                    padding: "6px 14px",
                    borderRadius: 8,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div style={{
              borderRadius: 20,
              overflow: "hidden",
              marginTop: 24,
              height: 260,
            }}>
              <img
                src={courseImg}
                alt="Студент за кодингом"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right: stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: stat.color,
                  border: stat.border || "none",
                  borderRadius: 20,
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 180,
                }}
              >
                <div style={{
                  color: stat.textColor,
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 900,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                  marginBottom: 4,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  color: stat.textColor === "#0A0A0A" ? "rgba(10,10,10,0.7)" : "rgba(255,255,255,0.6)",
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  marginBottom: 12,
                }}>
                  {stat.unit}
                </div>
                <div style={{
                  color: stat.textColor === "#0A0A0A" ? "rgba(10,10,10,0.65)" : "rgba(255,255,255,0.5)",
                  fontSize: 13,
                  lineHeight: 1.4,
                  marginTop: "auto",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For whom */}
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[
            { icon: "🎯", title: "Нет опыта в IT", desc: "Подойдёт тем, кто начинает с нуля" },
            { icon: "💼", title: "Смена профессии", desc: "Для тех, кто хочет войти в IT с другой специальности" },
            { icon: "📈", title: "Рост дохода", desc: "Навыки, за которые платят в 2–3 раза больше" },
            { icon: "🌍", title: "Работа удалённо", desc: "Профессия, позволяющая работать из любой точки мира" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 20px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,255,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{item.title}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
