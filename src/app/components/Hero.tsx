export function Hero() {
  return (
    <section 
      className="w-full border-b"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border-primary)'
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 flex flex-col items-center gap-8 md:gap-12">
        <h2 
          className="title-2 md:title-1 text-center"
          style={{ 
            color: 'var(--color-text-primary)',
            letterSpacing: 'var(--title-2-letter-spacing)'
          }}
        >
          타이틀이 들어갑니다
        </h2>
        <button 
          className="px-8 py-3 md:px-10 md:py-4 rounded-full transition-all hover:opacity-90 active:scale-95"
          style={{
            backgroundColor: 'var(--color-accent-blue)',
            color: 'var(--color-text-primary)',
            fontSize: 'var(--text-large-size)',
            fontWeight: 'var(--font-medium)',
            transition: 'var(--transition-base)'
          }}
        >
          CTA button
        </button>
      </div>
    </section>
  );
}
