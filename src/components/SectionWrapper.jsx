export default function SectionWrapper({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 lg:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
}
