// web/app/vi/page.tsx
export default function HomeVI() {
  return (
    <div id="home">
      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="container hero__inner">
          <div className="hero__left">
            <div className="hero__badge">Gợi ý sức khỏe bằng AI</div>

            <h1 className="hero__title">
              Phát hiện sớm <br />
              nguy cơ tim mạch <br />
              từ ảnh ECG
            </h1>

            <p className="hero__desc">
              Ứng dụng trí tuệ nhân tạo để phân tích ảnh điện tâm đồ (ECG), hỗ trợ nhận biết dấu hiệu bất
              thường sớm và cung cấp gợi ý sàng lọc ban đầu.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="/vi/ecg-analysis">
                Tải ảnh ECG
              </a>
              <a className="btn btn--ghostOnHero" href="/vi/about">
                Tìm hiểu thêm
              </a>
            </div>

            <div className="hero__stats">
              <Stat value="95%" label="Độ chính xác" />
              <Stat value="&lt;30s" label="Thời gian phân tích" />
              <Stat value="10k+" label="Ảnh ECG đã xử lý" />
            </div>
          </div>

          <div className="hero__right">
            <div className="hero__mock">
              <img
                src="/hero-ecg.png"
                alt="Mô phỏng phân tích ECG bằng AI"
                className="mock__img"
              />
              <div className="mock__chip">
                <span className="chip__dot" aria-hidden="true" />
                Hoàn tất phân tích AI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section section--soft" id="guide">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">Cách hoạt động</h2>
            <p className="section__subtitle">3 bước đơn giản để nhận kết quả phân tích ECG bằng AI</p>
          </div>

          <div className="steps">
            <StepCard
              step={1}
              title="Tải ảnh ECG"
              desc="Tải ảnh ECG định dạng PNG, JPG hoặc PDF. Hỗ trợ bố cục ECG 12 chuyển đạo."
              icon="upload"
            />
            <StepCard
              step={2}
              title="AI phân tích"
              desc="Mô hình AI phân tích ảnh ECG dựa trên dữ liệu huấn luyện đã kiểm chứng để phát hiện bất thường."
              icon="brain"
            />
            <StepCard
              step={3}
              title="Nhận kết quả"
              desc="Nhận báo cáo gồm mức nguy cơ, độ tin cậy và gợi ý bước tiếp theo."
              icon="check"
            />
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="section" id="about">
        <div className="container">
          <div className="section__head section__head--tight">
            <h2 className="section__title">Vì sao chọn CardioAI</h2>
            <p className="section__subtitle">
              Công nghệ hiện đại giúp hỗ trợ sàng lọc tim mạch dễ tiếp cận hơn
            </p>
          </div>

          <div className="features">
            <FeatureCard
              title="Phát hiện sớm"
              desc="Hỗ trợ nhận biết nguy cơ trước khi triệu chứng xuất hiện nhờ AI."
              icon="heart"
            />
            <FeatureCard
              title="Phân tích nhanh"
              desc="Cho kết quả trong vài giây thay vì hàng giờ hoặc nhiều ngày."
              icon="bolt"
            />
            <FeatureCard
              title="Hỗ trợ nhận biết bất thường"
              desc="Hỗ trợ nhận biết một số bất thường trong ảnh ECG để sàng lọc ban đầu."
              icon="doc"
            />
            <FeatureCard
              title="Bảo mật dữ liệu"
              desc="Dữ liệu được xử lý an toàn với các cơ chế bảo mật tiêu chuẩn."
              icon="shield"
            />
          </div>

          {/* ===== KHUYẾN CÁO (to, rõ) ===== */}
          <div className="disclaimerBox" role="note">
            <div className="disclaimerTitle">Khuyến cáo</div>
            <div className="disclaimerText">
              Mọi kết quả chỉ mang tính chất tham khảo. Người dùng nên đến cơ sở y tế hoặc gặp bác sĩ
              chuyên khoa để được thăm khám, tư vấn và chẩn đoán chính xác.
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta" id="ecg-analysis">
        <div className="container cta__inner">
          <h2 className="cta__title">Sẵn sàng phân tích ECG?</h2>
          <p className="cta__desc">
            Tải ảnh ECG của bạn để trải nghiệm quy trình sàng lọc ban đầu bằng AI và nhận kết quả trực quan.
          </p>

          <div className="cta__actions">
            <a className="btn btn--white" href="/vi/ecg-analysis">
              Bắt đầu phân tích miễn phí
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===== Small pieces ===== */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

function StepCard({
  step,
  title,
  desc,
  icon,
}: {
  step: number;
  title: string;
  desc: string;
  icon: IconName;
}) {
  return (
    <div className="card card--step">
      <div className="stepBadge">{step}</div>
      <div className="iconPill">
        <Icon name={icon} />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{desc}</p>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: IconName;
}) {
  return (
    <div className="card card--feature">
      <div className="iconSoft">
        <Icon name={icon} />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{desc}</p>
    </div>
  );
}

type IconName = "upload" | "brain" | "check" | "heart" | "bolt" | "doc" | "shield";

function Icon({ name }: { name: IconName }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" as const };

  switch (name) {
    case "upload":
      return (
        <svg {...common}>
          <path d="M12 16V4m0 0 4 4m-4-4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" stroke="white" strokeWidth="2" />
        </svg>
      );
    case "brain":
      return (
        <svg {...common}>
          <path
            d="M9 4a3 3 0 0 0-3 3v1a2 2 0 0 0 0 4v1a3 3 0 0 0 3 3m6-12a3 3 0 0 1 3 3v1a2 2 0 0 1 0 4v1a3 3 0 0 1-3 3"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="white" strokeWidth="2" />
          <path d="m8 12 2.2 2.2L16 8.5" stroke="white" strokeWidth="2" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path
            d="M12 21s-7-4.5-9-9a5.5 5.5 0 0 1 9-6 5.5 5.5 0 0 1 9 6c-2 4.5-9 9-9 9Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="white" strokeWidth="2" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path
            d="M7 3h7l3 3v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path
            d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      );
  }
}
