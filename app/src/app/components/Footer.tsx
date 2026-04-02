import { Send, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "О курсе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Стоимость", href: "#pricing" },
  { label: "Контакты", href: "#apply" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        fontFamily: "Manrope, sans-serif",
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "60px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}
            >
              <div style={{
                background: "#C8FF00",
                width: 40,
                height: 40,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: 14,
                color: "#0A0A0A",
              }}>
                {"</>"}
              </div>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>
                BogdanM<span style={{ color: "#C8FF00" }}>Courses</span>
              </span>
            </a>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.6, margin: "0 0 24px 0", maxWidth: 260 }}>
              Онлайн-курс «Основы веб-разработки для карьеры». Обучаем с нуля до Junior-разработчика.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 10 }}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.6)",
                  transition: "background 0.2s, color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#2AABEE20";
                  (e.currentTarget as HTMLElement).style.color = "#2AABEE";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                }}
                title="Telegram"
              >
                <Send size={16} />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.6)",
                  transition: "background 0.2s, color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#4C75A320";
                  (e.currentTarget as HTMLElement).style.color = "#4C75A3";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                }}
                title="VK"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 20 }}>Навигация</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8FF00")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 20 }}>Контакты</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="mailto:info@bogdanmcourses.ru"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  fontSize: 15,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8FF00")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >
                info@bogdanmcourses.ru
              </a>
              <a
                href="https://t.me/BogdanM4"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  fontSize: 15,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8FF00")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
              >
                @BogdanMCourses
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 15, marginBottom: 16 }}>Начни учиться сегодня</div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.5, margin: "0 0 20px 0" }}>
              Запишись на курс и получи первый урок бесплатно
            </p>
            <a
              href="#apply"
              onClick={(e) => { e.preventDefault(); handleNav("#apply"); }}
              style={{
                display: "inline-block",
                background: "#C8FF00",
                color: "#0A0A0A",
                fontWeight: 800,
                fontSize: 14,
                padding: "12px 22px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "transform 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
            >
              Записаться →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 28 }} />

        {/* Bottom row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, margin: 0 }}>
            © 2026, Онлайн-курс «Основы веб-разработки для карьеры». Все права защищены.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Политика конфиденциальности", "Публичная оферта"].map((label) => (
              <a
                key={label}
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  fontSize: 13,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.25)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
