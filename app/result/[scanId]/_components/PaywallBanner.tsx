"use client";

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface PaywallBannerProps {
  onUnlock?: () => void;
}

export default function PaywallBanner({ onUnlock }: PaywallBannerProps) {
  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-8 text-center space-y-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 mx-auto">
        <LockIcon />
      </div>

      <div className="space-y-1">
        <p className="text-lg font-bold text-slate-900">
          You&apos;re almost there
        </p>
        <p className="text-sm text-slate-500">
          Unlock all dishes and see the complete menu
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={onUnlock}
          className="w-full sm:w-auto px-8 h-13 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-base shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-200 hover:scale-[1.02] active:scale-[0.97] transition-all animate-pulse"
          style={{ animationDuration: "3s" }}
        >
          Unlock all dishes
        </button>
        <p className="text-xs text-slate-400">5 scans · $0.99</p>
      </div>
    </div>
  );
}
