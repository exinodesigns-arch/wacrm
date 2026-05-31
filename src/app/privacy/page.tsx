export const metadata = {
  title: "Privacy Policy | Anvee CRM",
  description: "Privacy policy for Anvee CRM WhatsApp messaging workflows.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <article className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
            Anvee CRM
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">Last updated: June 1, 2026</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Information We Process</h2>
          <p className="leading-7 text-slate-300">
            Anvee CRM processes customer contact details, WhatsApp message
            content, message delivery statuses, and related conversation records
            so the Anvee team can respond to enquiries, manage leads, and
            provide customer support.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">How We Use Information</h2>
          <p className="leading-7 text-slate-300">
            We use this information only to operate the CRM, reply to customer
            messages, send requested updates, manage sales conversations, and
            improve internal support workflows. We do not sell customer personal
            information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Meta and WhatsApp Data</h2>
          <p className="leading-7 text-slate-300">
            WhatsApp messages are received through Meta's WhatsApp Business
            Platform. Message data is stored in the CRM database for the
            business account owner and is used to provide the messaging service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Data Security</h2>
          <p className="leading-7 text-slate-300">
            Access tokens are encrypted before storage. Access to CRM data is
            restricted to authenticated users for the business account. We use
            standard technical safeguards to protect stored records.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="leading-7 text-slate-300">
            For privacy requests or questions about data handled by Anvee CRM,
            contact the Anvee team through the official business channels listed
            on the Anvee website.
          </p>
        </section>
      </article>
    </main>
  );
}
