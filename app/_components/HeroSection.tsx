import BadgePill from "./BadgePill";
import CtaButton from "./CtaButton";

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-b from-amber-50 to-stone-50 pt-16 pb-24 px-4"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <BadgePill label="AI-Powered · No account needed" />
        <h1
          id="hero-heading"
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-stone-900"
        >
          See every dish.
          <br />
          Even if you can&apos;t read the menu.
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-stone-600 leading-relaxed max-w-xl mx-auto">
          Take a photo of any restaurant menu — we&apos;ll show you exactly what
          each dish looks like, in your language.
        </p>
        <div className="mt-8">
          <CtaButton label="Scan your menu" href="/upload" size="lg" />
        </div>
        <p className="mt-4 text-sm text-stone-400">
          Free to try · No sign-up required · Works in any language
        </p>
      </div>
    </section>
  );
}
