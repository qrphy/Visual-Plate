import CtaButton from "./CtaButton";

export default function BottomCtaSection() {
  return (
    <section className="bg-stone-900 py-20 px-4" aria-label="Call to action">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
          Your next meal starts here.
        </h2>
        <p className="text-stone-400 mb-8 text-base leading-relaxed">
          Scan any menu in seconds. No account, no app, no friction.
        </p>
        <CtaButton label="Scan your menu" href="/upload" size="lg" />
        <p className="text-stone-500 text-sm mt-4">
          Free to start · Instant results
        </p>
      </div>
    </section>
  );
}
