"use client";

import Image from "next/image";
import { useState } from "react";
import type { AnalysisResult, UploadedECG, HealthProfile } from "./types";
import {
  DEFAULT_PROFILE,
  SAMPLE_ECG_01,
  MOCK_RESULT_ABNORMAL,
  MOCK_RESULT_NORMAL,
} from "./mock";

export default function UploadPanel({
  onResult,
}: {
  onResult: (r?: AnalysisResult) => void;
}) {
  const [ecg, setEcg] = useState<UploadedECG | undefined>(undefined);

  // profile mock để chứng minh “dựa rule + hồ sơ”
  const [profile, setProfile] = useState<HealthProfile>(DEFAULT_PROFILE);

  // chọn case để chụp
  const [mode, setMode] = useState<"normal" | "abnormal">("abnormal");

  function pushSample() {
    setEcg(SAMPLE_ECG_01);

    // đồng thời show luôn kết quả (đúng yêu cầu: push ảnh -> analysis hiện)
    const r =
      mode === "normal" ? MOCK_RESULT_NORMAL(profile) : MOCK_RESULT_ABNORMAL(profile);
    onResult(r);
  }

  function resetAll() {
    setEcg(undefined);
    onResult(undefined);
  }

  const inputBase =
    "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm " +
    "text-slate-900 placeholder:text-slate-400 " +
    "outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200";

  const selectBase =
    "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm " +
    "text-slate-900 " +
    "outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200";

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
      <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
        Upload ECG Image
      </h2>

      <div className="mt-6 rounded-[22px] border-2 border-dashed border-slate-200 bg-white px-8 py-10 text-center">
        {/* Preview ECG (fake push) */}
        {ecg ? (
          <div className="mx-auto w-full max-w-xl">
            <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <Image src={ecg.imageUrl} alt="Sample ECG" fill className="object-contain" />
            </div>
            <div className="mt-3 text-xs font-semibold text-slate-700">
              Pushed file: <span className="text-slate-900">{ecg.fileName}</span>
            </div>
          </div>
        ) : (
          <>
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-teal-500/10 text-teal-600">
              <svg
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 16V4m0 0 4 4M12 4 8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-6 text-base font-semibold text-slate-800">
              Push sample ECG (mock)
            </div>
            <div className="mt-1 text-sm text-slate-500">
              Dùng ảnh ECG giả để demo UI trước khi có API.
            </div>

            <div className="mt-4 text-xs text-slate-500">
              Supported formats: PNG, JPG, PDF (Max 10MB) — (mock: sample PNG)
            </div>
          </>
        )}

        {/* Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setMode("normal")}
            className={
              "h-10 rounded-full px-5 text-sm font-semibold " +
              (mode === "normal"
                ? "bg-slate-900 text-white"
                : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50")
            }
          >
            Label: Normal
          </button>

          <button
            type="button"
            onClick={() => setMode("abnormal")}
            className={
              "h-10 rounded-full px-5 text-sm font-semibold " +
              (mode === "abnormal"
                ? "bg-slate-900 text-white"
                : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50")
            }
          >
            Label: Suspected Abnormal
          </button>
        </div>

        {/* Profile mock (dựa hồ sơ) */}
        <div className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left sm:grid-cols-3">
          <div>
            <div className="text-xs font-semibold text-slate-700">Age</div>
            <input
              value={profile.age}
              onChange={(e) =>
                setProfile({ ...profile, age: Number(e.target.value || 0) })
              }
              className={inputBase}
              type="number"
            />
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-700">BMI</div>
            <input
              value={profile.bmi}
              onChange={(e) =>
                setProfile({ ...profile, bmi: Number(e.target.value || 0) })
              }
              className={inputBase}
              type="number"
              step="0.1"
            />
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-700">History</div>
            <select
              className={selectBase}
              value={profile.history[0] ?? ""}
              onChange={(e) =>
                setProfile({
                  ...profile,
                  history: e.target.value ? [e.target.value] : [],
                })
              }
            >
              <option value="">None</option>
              <option value="hypertension">Hypertension</option>
              <option value="diabetes">Diabetes</option>
              <option value="heart_disease">Heart disease</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={pushSample}
            className="inline-flex h-11 items-center justify-center rounded-full bg-teal-500 px-6 text-sm font-semibold text-white shadow-sm hover:bg-teal-600"
          >
            Use sample ECG (Push)
          </button>

          <button
            type="button"
            onClick={resetAll}
            className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
