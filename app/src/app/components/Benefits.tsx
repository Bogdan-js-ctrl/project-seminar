const benefits = [
  {
    icon: "🎯",
    title: "Практика с первого урока",
    desc: "Каждое занятие заканчивается реальным заданием. Теория закрепляется через практику.",
    color: "#C8FF00",
    textColor: "#0A0A0A",
  },
  {
    icon: "👨‍💻",
    title: "Проверка кода ментором",
    desc: "Персональная обратная связь по вашим работам с конкретными комментариями.",
    color: "#9D4DFF",
    textColor: "#fff",
  },
  {
    icon: "💼",
    title: "Помощь с трудоустройством",
    desc: "Поможем с резюме, портфолио и выходом на IT-компании-партнёры.",
    color: "#1A1A1A",
    textColor: "#fff",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  {
    icon: "📜",
    title: "Сертификат выпускника",
    desc: "Именной сертификат, подтверждающий навыки для работодателей.",
    color: "#1A1A1A",
    textColor: "#fff",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  {
    icon: "🕐",
    title: "Гибкий график",
    desc: "Учитесь в удобное время. Доступ к урокам и материалам 24/7 навсегда.",
    color: "#C8FF00",
    textColor: "#0A0A0A",
  },
  {
    icon: "💬",
    title: "Поддержка в Telegram",
    desc: "Куратор отвечает на вопросы в течение 24 часов. Сообщество выпускников.",
    color: "#9D4DFF",
    textColor: "#fff",
  },
];

export function Benefits() {
  return (
    <section
      id="benefits"
      style={{
        fontFamily: "Manrope, sans-serif",
        backgroundColor: "#0A0A0A",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <span style={{ color: "#C8FF00", fontSize: 13, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
            ПРЕИМУЩЕСТВА
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
            ПОЧЕМУ ВЫБИРАЮТ<br />
            <span style={{ color: "rgba(255,255,255,0.3)" }}>ИМЕННО НАС</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {benefits.map((item, i) => (
            <div
              key={i}
              style={{
                background: item.color,
                border: item.border || "none",
                borderRadius: 20,
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transition: "transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: 36 }}>{item.icon}</div>
              <h3 style={{
                color: item.textColor,
                fontSize: 20,
                fontWeight: 800,
                margin: 0,
                lineHeight: 1.2,
              }}>
                {item.title}
              </h3>
              <p style={{
                color: item.textColor === "#0A0A0A" ? "rgba(10,10,10,0.65)" : "rgba(255,255,255,0.6)",
                fontSize: 15,
                lineHeight: 1.6,
                margin: 0,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div style={{
          marginTop: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
          background: "#1A1A1A",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 20,
          padding: "32px 36px",
        }}>
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 22 }}>Готов начать?</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, marginTop: 6 }}>
              Присоединяйся к 500+ студентам, которые уже учатся
            </div>
          </div>
          <a
            href="#apply"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              background: "#C8FF00",
              color: "#0A0A0A",
              fontWeight: 800,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 12,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "transform 0.15s, box-shadow 0.15s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(200,255,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Записаться на курс →
          </a>
        </div>
      </div>
    </section>
  );
}
