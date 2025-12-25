// web/app/vi/guide/page.tsx
export default function GuideVI() {
  return (
    <div className="pageShell">
      <section className="section">
        <div className="container">
          <div className="guideWrap">
            <div className="guideCard">
              <h1 className="guideTitle">Hướng dẫn sử dụng</h1>

              <h2 className="guideH2">Chuẩn bị ảnh ECG</h2>
              <ul className="guideChecklist">
                <li>Đặt bản ECG trên bề mặt phẳng, đủ ánh sáng</li>
                <li>Chụp thẳng từ phía trên để tránh méo hình</li>
                <li>Đảm bảo các chuyển đạo/đường sóng ECG hiển thị rõ ràng</li>
                <li>Nên dùng ảnh độ phân giải cao (khuyến nghị tối thiểu 1200×800)</li>
              </ul>

              <h2 className="guideH2">Quy trình tải lên</h2>
              <ol className="guideSteps">
                <li>Truy cập trang Phân tích ECG</li>
                <li>Nhấn vùng tải lên hoặc kéo–thả ảnh ECG vào khu vực upload</li>
                <li>Định dạng hỗ trợ: PNG, JPG, JPEG, PDF</li>
                <li>Dung lượng tối đa: 10MB</li>
                <li>Kiểm tra ảnh xem có rõ nét trước khi phân tích</li>
                <li>Nhấn “Phân tích ECG” để bắt đầu xử lý bằng AI</li>
              </ol>

              <h2 className="guideH2">Hiểu kết quả</h2>

              <div className="resultBox resultBox--ok">
                <div className="resultBox__title">Nguy cơ bình thường</div>
                <div className="resultBox__text">
                  Nhịp tim đều, không phát hiện bất thường đáng kể.
                </div>
              </div>

              <div className="resultBox resultBox--warn">
                <div className="resultBox__title">Cảnh báo</div>
                <div className="resultBox__text">
                  Có dấu hiệu bất thường tiềm ẩn. Khuyến nghị tham khảo bác sĩ tim mạch.
                </div>
              </div>

              <div className="resultBox resultBox--danger">
                <div className="resultBox__title">Nguy cơ cao</div>
                <div className="resultBox__text">
                  Phát hiện bất thường rõ rệt. Nên tìm hỗ trợ y tế sớm.
                </div>
              </div>

              <h2 className="guideH2">Khuyến nghị</h2>
              <div className="bestBox">
                <ul className="bestList">
                  <li>Nên dùng ảnh ECG mới (trong vòng 30 ngày)</li>
                  <li>Ẩn/xóa thông tin cá nhân trên ECG để bảo mật</li>
                  <li>Không dùng kết quả AI thay cho chẩn đoán y khoa</li>
                  <li>Nên nhờ nhân viên y tế giải thích kết quả</li>
                  <li>Lưu lại lịch sử phân tích để đối chiếu về sau</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
