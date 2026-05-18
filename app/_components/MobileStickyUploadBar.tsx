export default function MobileStickyUploadBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-slate-100 shadow-lg md:hidden"
      aria-label="Mobile upload bar"
    >
      <a
        href="/upload?mode=camera"
        className="flex w-full items-center justify-center h-14 rounded-full bg-green-500 text-white font-semibold text-lg tracking-wide transition-all hover:bg-green-600 active:scale-[0.97]"
      >
        Take Photo
      </a>
    </div>
  );
}
