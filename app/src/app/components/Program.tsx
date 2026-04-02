import { useState } from "react";
import { ChevronDown } from "lucide-react";

const modules = [
  {
    num: "01",
    title: "Введение в веб-разработку",
    duration: "1 неделя",
    topics: ["Как работает интернет и браузер", "Структура HTML-документа", "Инструменты разработчика (DevTools)", "Первая веб-страница"],
  },
  {
    num: "02",
    title: "HTML: Структура и семантика",
    duration: "2 недели",
    topics: ["Все основные теги HTML5", "Семантическая разметка", "Формы и интерактивные элементы", "Доступность (a11y)"],
  },
  {
    num: "03",
    title: "CSS: Стили и адаптивность",
    duration: "3 недели",
    topics: ["Селекторы, каскадность, специфичность", "Flexbox и CSS Grid", "Адаптивный дизайн и Media Queries", "Анимации и переходы"],
  },
  {
    num: "04",
    title: "JavaScript: Основы",
    duration: "3 недели",
    topics: ["Переменные, типы данных, операторы", "Функции и области видимости", "Работа с DOM", "События и обработчики"],
  },
  {
    num: "05",
    title: "JavaScript: Продвинутый",
    duration: "3 недели",
    topics: ["Асинхронное программирование (async/await)", "Fetch API и работа с внешними данными", "ES6+ синтаксис", "Классы и модули"],
  },
  {
    num: "06",
    title: "Инструменты разработчика",
    duration: "1 неделя",
    topics: ["Git и GitHub (ветки, PR, конфликты)", "VS Code: расширения и настройки", "npm и пакетные менеджеры", "Основы командной строки"],
  },
  {
    num: "07",
    title: "Итоговый проект",
    duration: "2 недели",
    topics: ["Разработка полноценного сайта с нуля", "Code review с ментором", "Деплой на хостинг (Netlify/Vercel)", "Добавление в портфолио"],
  },
  {
    num: "08",
    title: "Карьерный блок",
    duration: "1 неделя",
    topics: ["Составление резюме и LinkedIn-профиля", "Формирование портфолио", "Подготовка к техническим интервью", "Помощь с трудоустройством"],
  },
];

export function Program() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setShowEmailModal(false), 2000);
  };

  return (
    <section
      id="program"
      style={{
        fontFamily: "Manrope, sans-serif",
        backgroundColor: "#F5F5F5",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
          <div>
            <span style={{ color: "#9D4DFF", fontSize: 13, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>ПРОГРАММА КУРСА</span>
            <h2 style={{
              color: "#0A0A0A",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginTop: 12,
              textTransform: "uppercase",
            }}>
              8 МОДУЛЕЙ · 16 НЕДЕЛЬ
            </h2>
          </div>
          <button
            onClick={() => setShowEmailModal(true)}
            style={{
              background: "#0A0A0A",
              color: "#fff",
              fontWeight: 800,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              fontFamily: "Manrope, sans-serif",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#9D4DFF")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#0A0A0A")}
          >
            Скачать программу PDF
          </button>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {modules.map((mod, i) => (
            <div
              key={i}
              style={{
                background: openIndex === i ? "#0A0A0A" : "#FFFFFF",
                border: `1.5px solid ${openIndex === i ? "transparent" : "#E5E5E5"}`,
                borderRadius: 16,
                overflow: "hidden",
                transition: "background 0.2s, box-shadow 0.2s",
                boxShadow: openIndex === i ? "0 8px 30px rgba(0,0,0,0.15)" : "none",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "24px 28px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "Manrope, sans-serif",
                }}
              >
                <span style={{
                  color: openIndex === i ? "#C8FF00" : "#9D4DFF",
                  fontSize: 13,
                  fontWeight: 800,
                  minWidth: 28,
                  letterSpacing: "0.5px",
                }}>
                  {mod.num}
                </span>
                <span style={{
                  color: openIndex === i ? "#FFFFFF" : "#0A0A0A",
                  fontWeight: 800,
                  fontSize: "clamp(15px, 2vw, 18px)",
                  flex: 1,
                }}>
                  {mod.title}
                </span>
                <span style={{
                  color: openIndex === i ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
                  fontSize: 13,
                  fontWeight: 600,
                  marginRight: 8,
                  whiteSpace: "nowrap",
                }}>
                  {mod.duration}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    color: openIndex === i ? "#C8FF00" : "#9D4DFF",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s",
                    flexShrink: 0,
                  }}
                />
              </button>

              {openIndex === i && (
                <div style={{ padding: "0 28px 28px 28px" }}>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 20 }} />
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {mod.topics.map((topic, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <span style={{
                          width: 22,
                          height: 22,
                          borderRadius: 6,
                          background: "rgba(200,255,0,0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 1,
                        }}>
                          <span style={{ color: "#C8FF00", fontSize: 12, fontWeight: 900 }}>✓</span>
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, lineHeight: 1.5 }}>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Email modal */}
      {showEmailModal && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: 24,
        }}
          onClick={() => setShowEmailModal(false)}
        >
          <div
            style={{
              background: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20,
              padding: "40px 36px",
              maxWidth: 440,
              width: "100%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: "#C8FF00", fontWeight: 900, fontSize: 22, margin: "0 0 12px 0" }}>Готово!</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", margin: 0 }}>Программа отправлена на ваш email</p>
              </div>
            ) : (
              <>
                <h3 style={{ color: "#fff", fontWeight: 900, fontSize: 22, margin: "0 0 8px 0" }}>Получить программу курса</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, margin: "0 0 28px 0" }}>
                  Отправим подробную программу на ваш email
                </p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    required
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1.5px solid rgba(255,255,255,0.12)",
                      borderRadius: 12,
                      padding: "14px 18px",
                      color: "#fff",
                      fontSize: 15,
                      outline: "none",
                      fontFamily: "Manrope, sans-serif",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: "#C8FF00",
                      color: "#0A0A0A",
                      fontWeight: 800,
                      fontSize: 15,
                      padding: "14px",
                      borderRadius: 12,
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    Получить PDF
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
