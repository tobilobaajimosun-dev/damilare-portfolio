export function BrandLogo() {
  return (
    <div className="flex items-center leading-none select-none">
      <span
        className="font-display font-normal text-foreground"
        style={{ fontSize: "2.6rem", lineHeight: 1 }}
      >
        D
      </span>
      <div className="flex flex-col justify-center ml-0.5">
        <span
          className="font-display font-normal text-foreground leading-none"
          style={{ fontSize: "0.95rem" }}
        >
          amilare
        </span>
        <span
          className="font-sans font-medium text-foreground leading-none tracking-[0.17em] uppercase"
          style={{ fontSize: "0.58rem", marginTop: "0.15rem" }}
        >
          Oshokoya
        </span>
      </div>
    </div>
  );
}
