export default function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm">
      <div className="aspect-[4/3] w-full bg-slate-200 animate-pulse" />
      <div className="p-3 space-y-2">
        <div className="h-3 w-2/3 bg-slate-200 rounded animate-pulse" />
        <div className="h-2 w-1/2 bg-slate-100 rounded animate-pulse" />
      </div>
    </div>
  );
}
