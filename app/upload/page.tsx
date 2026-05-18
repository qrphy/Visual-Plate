"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UploadZone from "./_components/UploadZone";
import ProcessingSteps from "./_components/ProcessingSteps";
import SkeletonCard from "./_components/SkeletonCard";

type Stage = "idle" | "processing";

export default function UploadPage() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>("idle");
  const [currentStep, setCurrentStep] = useState<0 | 1 | 2 | 3>(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [cameraMode] = useState(
    () =>
      typeof window !== "undefined" &&
      window.location.search.includes("mode=camera")
  );

  const handleFileSelected = (file: File) => {
    setPreviewUrl(URL.createObjectURL(file));
    setStage("processing");
  };

  useEffect(() => {
    if (stage !== "processing") return;

    const timers = [
      setTimeout(() => setCurrentStep(1), 300),
      setTimeout(() => setCurrentStep(2), 1200),
      setTimeout(() => setCurrentStep(3), 2100),
      setTimeout(() => router.push("/result/demo"), 3000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [stage, router]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <main className="min-h-screen bg-[#FAFAFA] px-4 py-12">
      <div className="max-w-xl mx-auto space-y-8">
        {stage === "idle" ? (
          <>
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Scan your menu
              </h1>
              <p className="text-slate-500 mt-2">
                Take a photo or upload an image of any restaurant menu.
              </p>
            </div>
            <UploadZone
              onFileSelected={handleFileSelected}
              initialMode={cameraMode ? "camera" : undefined}
            />
          </>
        ) : (
          <>
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-900">
                Analyzing your menu…
              </p>
              <p className="text-sm text-slate-400 mt-1">
                This takes just a few seconds
              </p>
            </div>

            {previewUrl && (
              <div className="rounded-2xl overflow-hidden border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt="Your menu"
                  className="w-full max-h-48 object-cover blur-sm opacity-70"
                />
              </div>
            )}

            <ProcessingSteps currentStep={currentStep} />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
