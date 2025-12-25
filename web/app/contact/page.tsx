import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-extrabold text-slate-900">Contact</h1>
          <p className="mt-2 text-slate-600">Placeholder page.</p>
        </div>
      </main>
    </div>
  );
}
