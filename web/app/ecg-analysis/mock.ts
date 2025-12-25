import { AnalysisResult, UploadedECG, HealthProfile } from "./types";

export const SAMPLE_ECG_01: UploadedECG = {
  kind: "sample",
  fileName: "sample_ecg_01.png",
  imageUrl: "/mock/ecg/sample_ecg_01.png",
};

export const DEFAULT_PROFILE: HealthProfile = {
  age: 54,
  sex: "male",
  bmi: 27.1,
  history: ["hypertension"],
};

export const MOCK_RESULT_NORMAL = (profile: HealthProfile): AnalysisResult => ({
  label: "Normal",
  confidence: 92,
  heatmap: {
    imageUrl: "/mock/heatmaps/sample_heatmap_01.png",
    regions: [
      { id: "R1", name: "Overall waveform", severity: "low" },
    ],
  },
  explanation: {
    simple:
      "Nhịp tim nhìn chung đều và ổn định. Hệ thống chưa thấy dấu hiệu nguy cơ rõ ràng trong ảnh ECG này.",
    basedOnRules: ["RULE_BASELINE_OK", "RULE_NO_ST_DEVIATION"],
    profileUsed: profile,
  },
  recommendation: {
    level: "self_care",
    actions: [
      "Duy trì lối sống lành mạnh (ngủ đủ, vận động vừa phải).",
      "Nếu xuất hiện đau ngực, khó thở, choáng: nên đi khám sớm.",
    ],
    disclaimer: "Kết quả chỉ mang tính hỗ trợ, không thay thế chẩn đoán bác sĩ.",
  },
});

export const MOCK_RESULT_ABNORMAL = (profile: HealthProfile): AnalysisResult => ({
  label: "Suspected Abnormal",
  confidence: 86,
  heatmap: {
    imageUrl: "/mock/heatmaps/sample_heatmap_01.png",
    regions: [
      { id: "R1", name: "ST segment (Lead V2–V3)", severity: "high" },
      { id: "R2", name: "RR intervals", severity: "medium" },
    ],
  },
  explanation: {
    simple:
      "Hệ thống phát hiện vùng nghi ngờ trên ECG (được tô màu trên heatmap). Điều này không khẳng định bệnh, nhưng có dấu hiệu nên kiểm tra thêm.",
    basedOnRules: ["RULE_ST_DEVIATION", "RULE_RR_IRREGULAR", "RULE_PROFILE_RISK_BOOST"],
    profileUsed: profile,
  },
  recommendation: {
    level: "medical_visit",
    actions: [
      "Nếu có triệu chứng (đau ngực/khó thở/hồi hộp): nên đi khám trong 24–48h.",
      "Nên làm ECG 12 chuyển đạo chuẩn hoặc khám chuyên khoa tim mạch để xác nhận.",
      "Hạn chế gắng sức, theo dõi triệu chứng trong hôm nay.",
    ],
    disclaimer: "Kết quả chỉ mang tính hỗ trợ, không thay thế chẩn đoán bác sĩ.",
  },
});
