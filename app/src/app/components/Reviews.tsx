import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const womanImg = "https://images.unsplash.com/photo-1758691737583-e4cbfbc78377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBvZmZpY2UlMjB3b3JrZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1MTU0NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080";
const manImg = "https://images.unsplash.com/photo-1766066014773-0074bf4911de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzbWlsaW5nJTIwdGVjaCUyMHdvcmtlciUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NzUxNTQ1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080";

const reviews = [
  {
    name: "Анна Петрова",
    before: "Менеджер по продажам",
    after: "Junior Frontend-разработчик",
    text: "Курс перевернул мою жизнь! За 4 месяца я с нуля научилась верстать, писать JS и уже работаю в команде. Менторы — огонь, всегда помогали разобраться с любой задачей.",
    rating: 5,
    img: womanImg,
    accent: "#C8FF00",
  },
  {
    name: "Дмитрий Козлов",
    before: "Бухгалтер",
    after: "Веб-разработчик-фрилансер",
    text: "Боялся, что не потяну — у меня не было никакого опыта в IT. Но программа выстроена так логично, что каждая тема плавно вытекает из предыдущей. Уже беру заказы на фрилансе!",
    rating: 5,
    img: manImg,
    accent: "#9D4DFF",
  },
  {
    name: "Мария Иванова",
    before: "Учитель математики",
    after: "Junior React Developer",
    text: "Особенно ценна поддержка после курса — попала в закрытое сообщество, где и нашла первую работу. Сертификат тоже сыграл роль на собеседовании.",
    rating: 5,
    img: womanImg,
    accent: "#C8FF00",
  },
  {
    name: "Алексей Смирнов",
    before: "Дизайнер в офлайне",
    after: "Fullstack-разработчик",
    text: "Я знал Figma, но совсем не умел кодить. Теперь я не только верстаю, но и пишу бэкенд. Курс дал прочный фундамент и понимание того, как всё работает вместе.",
    rating: 5,
    img: manImg,
    accent: "#9D4DFF",
  },
  {
    name: "Елена Сидорова",
    before: "HR-специалист",
    after: "UI/UX + Frontend разработчик",
    text: "Проверка кода ментором — это просто золото! Я получала детальный фидбек на каждое задание. Это ускорило мой рост в разы по сравнению с самостоятельным обучением.",
    rating: 5,
    img: womanImg,
    accent: "#C8FF00",
  },
  {
    name: "Николай Фёдоров",
    before: "Студент технического вуза",
    after: "Frontend-разработчик в стартапе",
    text: "Курс помог систематизировать знания. После него устроился в стартап ещё до выпуска. Карьерный блок — пожалуй, самая практичная часть программы.",
    rating: 5,
    img: manImg,
    accent: "#9D4DFF",
  },
];

export function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));

  const review = reviews[current];

  return (
    <section
      id="reviews"
      style={{
        fontFamily: "Manrope, sans-serif",
        backgroundColor: "#0A0A0A",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
          <div>
            <span style={{ color: "#C8FF00", fontSize: 13, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
              ОТЗЫВЫ
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
              ЧТО ГОВОРЯТ<br />
              <span style={{ color: "rgba(255,255,255,0.3)" }}>ВЫПУСКНИКИ</span>
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
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#C8FF00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)")}
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
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#C8FF00")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)")}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Main review card */}
        <div style={{
          background: "#1A1A1A",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 24,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          minHeight: 400,
        }}
          className="review-grid"
        >
          {/* Text side */}
          <div style={{ padding: "48px 48px 48px 48px" }}>
            {/* Stars */}
            <div style={{ display: "flex", gap: 4, marginBottom: 28 }}>
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={20} style={{ color: review.accent, fill: review.accent }} />
              ))}
            </div>

            {/* Quote */}
            <blockquote style={{
              color: "#FFFFFF",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              lineHeight: 1.6,
              margin: "0 0 40px 0",
              fontWeight: 500,
            }}>
              "{review.text}"
            </blockquote>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                overflow: "hidden",
                border: `2px solid ${review.accent}`,
                flexShrink: 0,
              }}>
                <img src={review.img} alt={review.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: 17 }}>{review.name}</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginTop: 4 }}>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>{review.before}</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}> → </span>
                  <span style={{ color: review.accent }}>{review.after}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="hidden lg:block" style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={review.img}
              alt={review.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to right, #1A1A1A, transparent)`,
            }} />
            <div style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              background: review.accent,
              color: review.accent === "#C8FF00" ? "#0A0A0A" : "#fff",
              fontWeight: 800,
              fontSize: 14,
              padding: "8px 16px",
              borderRadius: 10,
            }}>
              {review.after}
            </div>
          </div>
        </div>

        {/* Mini cards */}
        <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
          {reviews.map((r, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                background: i === current ? "#C8FF00" : "rgba(255,255,255,0.05)",
                border: `1.5px solid ${i === current ? "#C8FF00" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 12,
                padding: "10px 18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
                transition: "background 0.2s, border-color 0.2s",
              }}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <img src={r.img} alt={r.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{
                color: i === current ? "#0A0A0A" : "rgba(255,255,255,0.6)",
                fontWeight: 700,
                fontSize: 13,
                fontFamily: "Manrope, sans-serif",
              }}>
                {r.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
