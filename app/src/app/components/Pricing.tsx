import { Check } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    price: "15 000",
    desc: "Всё необходимое для старта",
    color: "#1A1A1A",
    border: "1px solid rgba(255,255,255,0.1)",
    textColor: "#fff",
    btnBg: "transparent",
    btnBorder: "rgba(255,255,255,0.25)",
    btnColor: "#fff",
    features: [
      { text: "Полный доступ к урокам", included: true },
      { text: "Проверка домашних заданий", included: true },
      { text: "Сертификат выпускника", included: true },
      { text: "Доступ к сообществу", included: true },
      { text: "Проверка кода ментором", included: false },
      { text: "Карьерные консультации", included: false },
      { text: "Индивидуальные сессии", included: false },
      { text: "Подготовка резюме", included: false },
    ],
  },
  {
    name: "Стандарт",
    price: "20 000",
    desc: "Самый популярный выбор",
    color: "#9D4DFF",
    border: "none",
    textColor: "#fff",
    btnBg: "#fff",
    btnBorder: "transparent",
    btnColor: "#9D4DFF",
    popular: true,
    features: [
      { text: "Полный доступ к урокам", included: true },
      { text: "Проверка домашних заданий", included: true },
      { text: "Сертификат выпускника", included: true },
      { text: "Доступ к сообществу", included: true },
      { text: "Проверка кода ментором", included: true },
      { text: "Карьерные консультации", included: true },
      { text: "Индивидуальные сессии", included: false },
      { text: "Подготовка резюме", included: false },
    ],
  },
  {
    name: "Премиум",
    price: "25 000",
    desc: "Максимальная поддержка",
    color: "#C8FF00",
    border: "none",
    textColor: "#0A0A0A",
    btnBg: "#0A0A0A",
    btnBorder: "transparent",
    btnColor: "#C8FF00",
    features: [
      { text: "Полный доступ к урокам", included: true },
      { text: "Проверка домашних заданий", included: true },
      { text: "Сертификат выпускника", included: true },
      { text: "Доступ к сообществу", included: true },
      { text: "Проверка кода ментором", included: true },
      { text: "Карьерные консультации", included: true },
      { text: "Индивидуальные сессии", included: true },
      { text: "Подготовка резюме", included: true },
    ],
  },
];

export function Pricing() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      style={{
        fontFamily: "Manrope, sans-serif",
        backgroundColor: "#0D0D0D",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <span style={{ color: "#C8FF00", fontSize: 13, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
            СТОИМОСТЬ
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
            ТАРИФЫ И ЦЕНЫ
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 17, marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
            Выберите подходящий формат обучения. Все тарифы включают пожизненный доступ к материалам.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "start",
        }}>
          {plans.map((plan, i) => (
            <div
              key={i}
              style={{
                background: plan.color,
                border: plan.border,
                borderRadius: 24,
                padding: "36px 32px",
                position: "relative",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {plan.popular && (
                <div style={{
                  position: "absolute",
                  top: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fff",
                  color: "#9D4DFF",
                  fontWeight: 900,
                  fontSize: 12,
                  padding: "5px 18px",
                  borderRadius: 100,
                  letterSpacing: "0.5px",
                  whiteSpace: "nowrap",
                }}>
                  ⭐ ПОПУЛЯРНЫЙ
                </div>
              )}

              <div style={{ marginBottom: 28 }}>
                <div style={{
                  color: plan.textColor === "#0A0A0A" ? "rgba(10,10,10,0.6)" : "rgba(255,255,255,0.6)",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}>
                  {plan.name}
                </div>
                <div style={{
                  color: plan.textColor,
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 900,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}>
                  {plan.price} ₽
                </div>
                <div style={{
                  color: plan.textColor === "#0A0A0A" ? "rgba(10,10,10,0.55)" : "rgba(255,255,255,0.5)",
                  fontSize: 14,
                  marginTop: 8,
                }}>
                  {plan.desc}
                </div>
              </div>

              <div style={{ marginBottom: 32, display: "flex", flexDirection: "column", gap: 12 }}>
                {plan.features.map((feature, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: feature.included
                        ? (plan.textColor === "#0A0A0A" ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)")
                        : "transparent",
                      border: feature.included ? "none" : `1.5px solid ${plan.textColor === "#0A0A0A" ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.15)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {feature.included && (
                        <Check
                          size={13}
                          style={{ color: plan.textColor }}
                        />
                      )}
                    </div>
                    <span style={{
                      color: feature.included
                        ? plan.textColor
                        : (plan.textColor === "#0A0A0A" ? "rgba(10,10,10,0.3)" : "rgba(255,255,255,0.25)"),
                      fontSize: 14,
                      fontWeight: feature.included ? 600 : 400,
                    }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleNav("#apply")}
                style={{
                  width: "100%",
                  background: plan.btnBg,
                  color: plan.btnColor,
                  fontWeight: 800,
                  fontSize: 15,
                  padding: "14px",
                  borderRadius: 12,
                  border: plan.btnBorder !== "transparent" ? `1.5px solid ${plan.btnBorder}` : "none",
                  cursor: "pointer",
                  fontFamily: "Manrope, sans-serif",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>

        {/* Installment notice */}
        <div style={{
          marginTop: 28,
          textAlign: "center",
          background: "rgba(200,255,0,0.05)",
          border: "1px solid rgba(200,255,0,0.15)",
          borderRadius: 14,
          padding: "18px 24px",
        }}>
          <span style={{ color: "#C8FF00", fontWeight: 800, fontSize: 15 }}>💳 Доступна рассрочка</span>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}> — оплата в 2–4 части без переплат и банковских комиссий</span>
        </div>
      </div>
    </section>
  );
}
