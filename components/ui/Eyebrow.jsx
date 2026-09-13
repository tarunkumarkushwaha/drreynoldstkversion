export default function Eyebrow({ children, align = "left", className = "" }) {
  return (
    <p
      className={`font-sans text-[16px] font-normal uppercase tracking-[0.3em] text-[#86a7a7]  ${className} ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}
