import BadgePill from "./BadgePill";
import InstantDemoReveal from "./InstantDemoReveal";

function MenuPlaceholder() {
  const rows = [
    { nameW: "w-2/3", descW: "w-1/2", priceW: "w-10" },
    { nameW: "w-1/2", descW: "w-2/5", priceW: "w-8" },
    { nameW: "w-3/4", descW: "w-3/5", priceW: "w-10" },
    { nameW: "w-1/2", descW: "w-2/5", priceW: "w-9" },
    { nameW: "w-2/3", descW: "w-1/2", priceW: "w-10" },
  ];

  return (
    <div
      className="rounded-2xl bg-slate-50 border border-slate-200 p-6 blur-[1.5px] select-none"
      aria-hidden="true"
    >
      <div className="text-center mb-5">
        <div className="h-4 w-32 bg-slate-400 rounded mx-auto mb-2" />
        <div className="h-3 w-20 bg-slate-300 rounded mx-auto" />
      </div>
      <div className="h-px bg-slate-200 mb-4" />
      <div className="space-y-4">
        {rows.map((row, i) => (
          <div key={i} className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-1.5">
              <div className={`h-3 ${row.nameW} bg-slate-400 rounded`} />
              <div className={`h-2 ${row.descW} bg-slate-200 rounded`} />
            </div>
            <div className={`h-3 ${row.priceW} bg-slate-300 rounded shrink-0`} />
          </div>
        ))}
      </div>
      <div className="h-px bg-slate-200 my-4" />
      <div className="space-y-4">
        {rows.slice(0, 3).map((row, i) => (
          <div key={i} className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-1.5">
              <div className={`h-3 ${row.nameW} bg-slate-400 rounded`} />
              <div className={`h-2 ${row.descW} bg-slate-200 rounded`} />
            </div>
            <div className={`h-3 ${row.priceW} bg-slate-300 rounded shrink-0`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InstantDemoSection() {
  return (
    <section className="bg-white py-16 px-4" aria-label="Example dish cards">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <BadgePill label="Live example" variant="orange" />
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Here&apos;s what you&apos;ll get
          </h2>
          <p className="mt-3 text-slate-500">
            Real dish cards from a Japanese restaurant menu
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Your menu photo
            </p>
            <MenuPlaceholder />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              AI result
            </p>
            <InstantDemoReveal />
          </div>
        </div>
      </div>
    </section>
  );
}
