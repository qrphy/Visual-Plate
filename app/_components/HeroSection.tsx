import BadgePill from "./BadgePill";
import CtaButton from "./CtaButton";
import DishCard from "./DishCard";
import MobileStickyUploadBar from "./MobileStickyUploadBar";

const PREVIEW_CARDS = [
  {
    id: "1",
    name: "Tonkotsu Ramen",
    description: "Rich pork bone broth, soft-boiled egg, chashu pork",
    imagePlaceholderBg: "bg-amber-100",
    emoji: "🍜",
  },
  {
    id: "2",
    name: "Gyoza",
    description: "Pan-fried dumplings, ponzu sauce",
    imagePlaceholderBg: "bg-orange-100",
    emoji: "🥟",
  },
  {
    id: "3",
    name: "Karaage",
    description: "Crispy fried chicken, Japanese mayo",
    imagePlaceholderBg: "bg-yellow-100",
    emoji: "🍗",
  },
];

export default function HeroSection() {
  return (
    <section
      className="bg-[#FAFAFA] pt-16 pb-24 px-4"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <BadgePill label="AI-Powered · No account needed" variant="green" />
          <h1
            id="hero-heading"
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900"
          >
            See your food
            <br />
            before you order.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-md">
            Upload any menu. Instantly see what each dish looks like.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CtaButton label="Take Photo" href="/upload?mode=camera" size="lg" />
            <CtaButton
              label="Upload Photo"
              href="/upload"
              size="lg"
              variant="secondary"
            />
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Free to try · No sign-up required · Works in any language
          </p>
        </div>

        <div className="hidden md:flex flex-col gap-3" aria-hidden="true">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
            Example result
          </p>
          {PREVIEW_CARDS.map((card) => (
            <DishCard
              key={card.id}
              name={card.name}
              description={card.description}
              imagePlaceholderBg={card.imagePlaceholderBg}
              emoji={card.emoji}
            />
          ))}
        </div>
      </div>
      <MobileStickyUploadBar />
    </section>
  );
}
