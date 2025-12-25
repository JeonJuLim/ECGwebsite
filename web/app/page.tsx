import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            CardioAI – ECG Risk Assistant
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Upload ảnh ECG để nhận phân loại (Normal / Suspected Abnormal), confidence,
            heatmap vùng nghi ngờ, giải thích dễ hiểu và khuyến cáo (mock UI để chụp phiếu đăng ký).
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ecg-analysis"
              className="inline-flex h-10 items-center justify-center rounded-full bg-teal-500 px-5 text-sm font-semibold text-white hover:bg-teal-600"
            >
              Go to ECG Analysis
            </Link>

            <Link
              href="/guide"
              className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              View Guide
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
