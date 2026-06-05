export default function Loading() {
  return (
    <div className="min-h-[80dvh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated gold bar */}
        <div className="w-12 h-px bg-border overflow-hidden rounded-full">
          <div
            className="h-full bg-primary rounded-full"
            style={{
              animation: "loading-bar 1.2s ease-in-out infinite",
              width: "40%",
            }}
          />
        </div>
        <style>{`
          @keyframes loading-bar {
            0%   { transform: translateX(-200%); }
            100% { transform: translateX(400%); }
          }
        `}</style>
      </div>
    </div>
  );
}
