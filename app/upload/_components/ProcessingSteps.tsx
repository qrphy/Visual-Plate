"use client";

const STEPS = [
  { label: "Detecting text…" },
  { label: "Extracting dishes…" },
  { label: "Matching images…" },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PendingDot() {
  return (
    <span
      className="w-4 h-4 shrink-0 rounded-full border-2 border-current"
      aria-hidden="true"
    />
  );
}

interface ProcessingStepsProps {
  currentStep: 0 | 1 | 2 | 3;
}

export default function ProcessingSteps({ currentStep }: ProcessingStepsProps) {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        {STEPS.map((step, i) => {
          const stepNum = i + 1;
          const isDone = currentStep > stepNum;
          const isActive = currentStep === stepNum;
          const isPending = currentStep < stepNum;

          return (
            <div
              key={step.label}
              className={`flex items-center gap-2 text-sm font-medium ${
                isDone
                  ? "text-green-600"
                  : isActive
                  ? "text-slate-900 animate-pulse"
                  : "text-slate-400"
              }`}
            >
              {isDone ? <CheckIcon /> : <PendingDot />}
              <span>{step.label}</span>
            </div>
          );
        })}
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          data-testid="progress-bar"
          className="h-full bg-green-500 rounded-full transition-all duration-700"
          style={{ width: `${Math.round((currentStep / 3) * 100)}%` }}
        />
      </div>
    </div>
  );
}
