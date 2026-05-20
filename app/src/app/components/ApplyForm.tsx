import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function ApplyForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    tariff: "",
    agree: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length === 0) return "";
    let result = "+7";
    if (digits.length > 1) result += " (" + digits.slice(1, 4);
    if (digits.length >= 4) result += ") " + digits.slice(4, 7);
    if (digits.length >= 7) result += "-" + digits.slice(7, 9);
    if (digits.length >= 9) result += "-" + digits.slice(9, 11);
    return result;
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setForm((f) => ({ ...f, phone: formatted }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Введите ваше имя";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 11) newErrors.phone = "Введите корректный номер";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Введите корректный email";
    if (!form.agree) newErrors.agree = "Необходимо согласие";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    background: "rgba(255,255,255,0.05)",
    border: `1.5px solid ${errors[field] ? "#FF4D4D" : "rgba(255,255,255,0.12)"}`,
    borderRadius: 12,
    padding: "14px 18px",
    color: "#fff",
    fontSize: 15,
    outline: "none",
    width: "100%",
    boxSizing: "border-box" as const,
    fontFamily: "Manrope, sans-serif",
    transition: "border-color 0.2s",
  });

  return (
    <section
      id="apply"
      style={{
        fontFamily: "Manrope, sans-serif",
        backgroundColor: "#0A0A0A",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG accent */}
      <div style={{
        position: "absolute",
        top: -200,
        right: -200,
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(157,77,255,0.1) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute",
        bottom: -100,
        left: -100,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: "#C8FF00", fontSize: 13, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
            ЗАПИСЬ
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
            ОСТАВЬТЕ ЗАЯВКУ
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 17, marginTop: 16 }}>
            Мы свяжемся с вами в течение часа и ответим на все вопросы
          </p>
        </div>

        <div style={{
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 24,
          padding: "clamp(32px, 5vw, 56px)",
        }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <CheckCircle size={64} style={{ color: "#C8FF00", margin: "0 auto 20px" }} />
              <h3 style={{ color: "#fff", fontWeight: 900, fontSize: 28, margin: "0 0 16px 0" }}>
                Заявка отправлена!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, margin: 0 }}>
                Спасибо, {form.name}! Мы свяжемся с вами в ближайшее время по номеру {form.phone}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 700 }}>
                    Имя <span style={{ color: "#C8FF00" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    style={inputStyle("name")}
                    onFocus={(e) => (e.target.style.borderColor = "#C8FF00")}
                    onBlur={(e) => (e.target.style.borderColor = errors.name ? "#FF4D4D" : "rgba(255,255,255,0.12)")}
                  />
                  {errors.name && <span style={{ color: "#FF4D4D", fontSize: 13 }}>{errors.name}</span>}
                </div>

                {/* Phone */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 700 }}>
                    Телефон <span style={{ color: "#C8FF00" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={handlePhone}
                    style={inputStyle("phone")}
                    onFocus={(e) => (e.target.style.borderColor = "#C8FF00")}
                    onBlur={(e) => (e.target.style.borderColor = errors.phone ? "#FF4D4D" : "rgba(255,255,255,0.12)")}
                  />
                  {errors.phone && <span style={{ color: "#FF4D4D", fontSize: 13 }}>{errors.phone}</span>}
                </div>
              </div>

              {/* Email */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 700 }}>
                  Email <span style={{ color: "#C8FF00" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  style={inputStyle("email")}
                  onFocus={(e) => (e.target.style.borderColor = "#C8FF00")}
                  onBlur={(e) => (e.target.style.borderColor = errors.email ? "#FF4D4D" : "rgba(255,255,255,0.12)")}
                />
                {errors.email && <span style={{ color: "#FF4D4D", fontSize: 13 }}>{errors.email}</span>}
              </div>

              {/* Tariff */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 700 }}>
                  Интересующий тариф
                </label>
                <select
                  value={form.tariff}
                  onChange={(e) => setForm((f) => ({ ...f, tariff: e.target.value }))}
                  style={{
                    ...inputStyle("tariff"),
                    cursor: "pointer",
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                    paddingRight: 44,
                  }}
                >
                  <option value="" style={{ background: "#111" }}>Выберите тариф (необязательно)</option>
                  <option value="basic" style={{ background: "#111" }}>Базовый — 15 000 ₽</option>
                  <option value="standard" style={{ background: "#111" }}>Стандарт — 20 000 ₽</option>
                  <option value="premium" style={{ background: "#111" }}>Премиум — 25 000 ₽</option>
                </select>
              </div>

              {/* Agree */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, agree: !f.agree }))}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    border: `1.5px solid ${errors.agree ? "#FF4D4D" : form.agree ? "#C8FF00" : "rgba(255,255,255,0.25)"}`,
                    background: form.agree ? "#C8FF00" : "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 2,
                    transition: "background 0.2s, border-color 0.2s",
                  }}
                >
                  {form.agree && <span style={{ color: "#0A0A0A", fontSize: 13, fontWeight: 900 }}>✓</span>}
                </button>
                <label
                  style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.5, cursor: "pointer" }}
                  onClick={() => setForm((f) => ({ ...f, agree: !f.agree }))}
                >
                  Я согласен(на) с{" "}
                  <a href="#" style={{ color: "#C8FF00", textDecoration: "underline" }} onClick={(e) => e.preventDefault()}>
                    политикой конфиденциальности
                  </a>{" "}
                  и обработкой персональных данных.
                </label>
              </div>
              {errors.agree && <span style={{ color: "#FF4D4D", fontSize: 13, marginTop: -12 }}>{errors.agree}</span>}

              <button
                type="submit"
                style={{
                  background: "#C8FF00",
                  color: "#0A0A0A",
                  fontWeight: 900,
                  fontSize: 17,
                  padding: "18px",
                  borderRadius: 14,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Manrope, sans-serif",
                  marginTop: 8,
                  transition: "transform 0.15s, box-shadow 0.15s",
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
                Отправить заявку →
              </button>

              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textAlign: "center", margin: 0 }}>
                Нажимая кнопку, вы соглашаетесь с условиями. Данные защищены и не передаются третьим лицам.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
