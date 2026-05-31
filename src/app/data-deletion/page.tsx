export const metadata = {
  title: "Data Deletion Instructions | Anvee CRM",
  description: "How to request deletion of data processed by Anvee CRM.",
};

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
            Anvee CRM
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Data Deletion Instructions
          </h1>
          <p className="text-sm text-slate-400">Last updated: June 1, 2026</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">How To Request Deletion</h2>
          <p className="leading-7 text-slate-300">
            To request deletion of personal data processed by Anvee CRM, contact
            the Anvee team through the official business channels listed on the
            Anvee website. Include the phone number or email address associated
            with your request so the team can identify the relevant records.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What We Delete</h2>
          <p className="leading-7 text-slate-300">
            After verifying the request, Anvee will delete or anonymize CRM
            contact details, conversation records, and related message data that
            are no longer required for legal, security, or operational reasons.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Processing Time</h2>
          <p className="leading-7 text-slate-300">
            Deletion requests are reviewed as soon as reasonably possible. Some
            information may remain in backups for a limited period before
            automatic rotation removes it.
          </p>
        </section>
      </article>
    </main>
  );
}
