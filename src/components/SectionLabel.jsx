export default function SectionLabel({ text, dark = false }) {
  return (
    <p className={`font-mono text-xs tracking-[0.3em] uppercase mb-3 ${dark ? 'text-arch-gold' : 'text-arch-gold'}`}>
      — {text}
    </p>
  );
}
