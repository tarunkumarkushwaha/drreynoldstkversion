export default function Eyebrow({ children, align = "left" }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-widest text-teal-700 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}
