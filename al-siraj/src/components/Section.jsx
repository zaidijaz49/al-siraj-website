export function Section({ className = "", children, ...props }) {
  return (
    <section className={`py-20 ${className}`} {...props}>
      {children}
    </section>
  );
}

export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-2 text-brand text-xs font-semibold tracking-widest uppercase mb-4">
      <span className="w-6 h-px bg-brand inline-block" />
      {children}
    </div>
  );
}

export function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`font-display font-bold text-3xl sm:text-4xl text-brand-dark leading-tight ${className}`}>
      {children}
    </h2>
  );
}
