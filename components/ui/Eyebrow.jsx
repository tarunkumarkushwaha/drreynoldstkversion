export default function Eyebrow({ children, align = "left", className = "" }) {
  return (
    <p
      className={`font-sans text-[16px] font-normal uppercase tracking-[0.3em] text-[#A67B5B]  ${className} ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}
