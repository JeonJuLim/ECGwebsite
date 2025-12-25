import Image from "next/image";
import { AnalysisResult } from "./types";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

export default function ResultPanel({ result }: { result?: AnalysisResult }) {
  if (!result) {
    return (
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <div className="grid place-items-center py-12 text-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-slate-100 text-slate-500">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 13h4l2-7 4 14 2-7h6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="mt-5 text-xl font-extrabold text-slate-900">No Analysis Yet</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Push sample ECG (hoặc upload ảnh) để hiển thị dự đoán mock.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-extrabold text-slate-900">Analysis</h3>
          <p className="mt-1 text-sm text-slate-600">
            Mock prediction output (để chụp phiếu đăng ký).
          </p>
        </div>
        <Pill>{result.recommendation.level}</Pill>
      </div>

      {/* ✅ Medical Disclaimer - FULL WIDTH (tách khỏi header) */}
      <div className="mt-4 w-full rounded-xl border border-red-300 bg-red-50 px-4 py-3">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-red-600">⚠️</span>
          <p className="text-sm leading-6 text-red-700">
            <b>Kết quả phân tích ECG do AI cung cấp chỉ mang tính hỗ trợ tham khảo</b>, không phải chẩn đoán y khoa.
            AI không thay thế bác sĩ hoặc nhân viên y tế chuyên môn. Người dùng không nên tự ý đưa ra quyết định điều trị
            dựa trên kết quả này. Nếu có triệu chứng bất thường (đau ngực, khó thở, choáng váng…), hãy liên hệ cơ sở y tế
            hoặc bác sĩ chuyên khoa.
          </p>
        </div>
      </div>

      {/* label + confidence */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-xs font-semibold text-slate-700">label</div>
          <div className="mt-1 text-base font-extrabold text-slate-900">{result.label}</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-xs font-semibold text-slate-700">confidence</div>
          <div className="mt-1 text-base font-extrabold text-slate-900">{result.confidence}%</div>
        </div>
      </div>

      {/* heatmap */}
      <div className="mt-6">
        <div className="text-sm font-extrabold text-slate-900">heatmap</div>
        <p className="mt-1 text-xs text-slate-600">
          Vùng tô màu là nơi mô hình chú ý nhiều nhất (mock).
        </p>

        <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div className="relative aspect-[16/9] w-full">
            <Image src={result.heatmap.imageUrl} alt="Heatmap" fill className="object-contain" />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {result.heatmap.regions.map((r) => (
            <Pill key={r.id}>
              {r.name} • {r.severity}
            </Pill>
          ))}
        </div>
      </div>

      {/* explanation + recommendation */}
      <div className="mt-6">
        <div className="text-sm font-extrabold text-slate-900">explanation + recommendation</div>

        <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="text-xs font-semibold text-slate-700">Explanation (simple)</div>
          <p className="mt-2 text-sm leading-6 text-slate-700">{result.explanation.simple}</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <div className="text-xs font-semibold text-slate-700">Rules applied</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-700">
                {result.explanation.basedOnRules.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <div className="text-xs font-semibold text-slate-700">Health profile</div>
              <div className="mt-2 space-y-1 text-xs text-slate-700">
                <div>
                  Age: <span className="font-semibold">{result.explanation.profileUsed.age}</span>
                </div>
                <div>
                  Sex: <span className="font-semibold">{result.explanation.profileUsed.sex}</span>
                </div>
                <div>
                  BMI: <span className="font-semibold">{result.explanation.profileUsed.bmi}</span>
                </div>
                <div>
                  History:{" "}
                  <span className="font-semibold">
                    {result.explanation.profileUsed.history.length
                      ? result.explanation.profileUsed.history.join(", ")
                      : "None"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-xs font-semibold text-slate-700">Recommendation</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {result.recommendation.actions.map((a, idx) => (
                <li key={idx}>{a}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">{result.recommendation.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
