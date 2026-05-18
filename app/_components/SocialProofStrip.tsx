const STATS = [
  { value: "1,200+", label: "menus scanned today" },
  { value: "28,000+", label: "dishes recognized" },
  { value: "40+", label: "languages supported" },
];

export default function SocialProofStrip() {
  return (
    <div
      className="bg-slate-900 py-6 px-4"
      role="region"
      aria-label="Usage statistics"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-orange-100 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
