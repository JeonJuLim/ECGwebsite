export default function AboutPageVI() {
  return (
    <div className="pageShell">
      <section className="section">
        <div className="container">
          <div className="aboutWrap">
            <div className="aboutCard">
              <h1 className="aboutTitle">Giới thiệu CardioAI</h1>
              <p className="aboutLead">
                CardioAI là nền tảng trí tuệ nhân tạo hỗ trợ sàng lọc sớm các bất thường tim mạch thông qua
                phân tích điện tâm đồ (ECG), giúp người dùng nhận kết quả nhanh và dễ hiểu.
              </p>

              <div className="aboutBlock">
                <h2 className="aboutH3">Công nghệ</h2>
                <p className="aboutText">
                  Mô hình học sâu được huấn luyện trên nhiều mẫu ECG đã được xác thực, giúp nhận diện các dấu hiệu
                  bất thường và cung cấp điểm tin cậy (confidence) để hỗ trợ sàng lọc ban đầu.
                </p>
              </div>

              <div className="aboutBlock">
                <h2 className="aboutH3">Bối cảnh nghiên cứu</h2>
                <p className="aboutText">
                  Dự án được phát triển trong khuôn khổ nghiên cứu tại trường về AI y sinh và học máy trong y tế.
                  Mục tiêu là tăng khả năng tiếp cận sàng lọc tim mạch và hỗ trợ nhân viên y tế trong đánh giá ban đầu.
                </p>
              </div>

              <div className="aboutNote" role="note">
                <div className="aboutNote__label">Lưu ý quan trọng:</div>
                <div className="aboutNote__text">
                  CardioAI là công cụ minh họa/nghiên cứu và không thay thế chẩn đoán y khoa. Kết quả cần được xem xét
                  bởi người có chuyên môn y tế.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
