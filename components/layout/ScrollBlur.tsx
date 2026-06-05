"use client";

export function ScrollBlur() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 pointer-events-none z-40"
      style={{
        height: "120px",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        maskImage: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)",
      }}
    />
  );
}
