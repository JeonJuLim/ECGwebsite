export type RiskLabel = "Normal" | "Suspected Abnormal";
export type Severity = "low" | "medium" | "high";
export type RecommendationLevel = "self_care" | "monitor" | "medical_visit" | "urgent";

export type HealthProfile = {
  age: number;
  sex: "male" | "female" | "other";
  bmi: number;
  history: string[]; // hypertension, diabetes...
};

export type UploadedECG = {
  kind: "sample" | "user";
  fileName: string;
  imageUrl: string; // ảnh ECG hiển thị bên upload
};

export type HeatmapRegion = {
  id: string;
  name: string;
  severity: Severity;
  bbox?: { x: number; y: number; w: number; h: number }; // optional (mock)
};

export type AnalysisResult = {
  label: RiskLabel;
  confidence: number; // 0..100
  heatmap: {
    imageUrl: string; // ảnh heatmap (mock)
    regions: HeatmapRegion[];
  };
  explanation: {
    simple: string;
    basedOnRules: string[];
    profileUsed: HealthProfile;
  };
  recommendation: {
    level: RecommendationLevel;
    actions: string[];
    disclaimer: string;
  };
};
