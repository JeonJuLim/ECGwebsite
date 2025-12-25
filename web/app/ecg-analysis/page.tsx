"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import UploadPanel from "./UploadPanel";
import ResultPanel from "./ResultPanel";
import { AnalysisResult } from "./types";

export default function EcgAnalysisPage() {
  const [result, setResult] = useState<AnalysisResult | undefined>(undefined);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            ECG Analysis
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Upload your electrocardiogram image for AI-powered analysis and risk assessment
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <UploadPanel onResult={setResult} />
          <ResultPanel result={result} />
        </div>
      </main>
    </div>
  );
}
