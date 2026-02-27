interface TabBarProps {
  tabs: string[];
  activeTab: number;
}

export function TabBar({ tabs, activeTab }: TabBarProps) {
  return (
    <div className="w-full px-5 md:px-8 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Toggle tabs */}
        <div 
          className="inline-flex p-0.5 rounded-full"
          style={{
            backgroundColor: 'var(--color-bg-tertiary)',
            border: '1px solid var(--color-border-primary)'
          }}
        >
          <button
            className="px-6 py-2 rounded-full text-small transition-all"
            style={{
              backgroundColor: activeTab === 0 ? 'var(--color-bg-secondary)' : 'transparent',
              color: activeTab === 0 ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              fontWeight: activeTab === 0 ? 'var(--font-medium)' : 'var(--font-normal)',
              transition: 'var(--transition-fast)'
            }}
          >
            Tab01
          </button>
          <button
            className="px-6 py-2 rounded-full text-small transition-all"
            style={{
              backgroundColor: activeTab === 1 ? 'var(--color-bg-secondary)' : 'transparent',
              color: activeTab === 1 ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              fontWeight: activeTab === 1 ? 'var(--font-medium)' : 'var(--font-normal)',
              transition: 'var(--transition-fast)'
            }}
          >
            Tab02
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full text-small border transition-all hover:opacity-80"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border-primary)',
                color: 'var(--color-text-primary)',
                transition: 'var(--transition-fast)'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Empty space for balance */}
        <div className="hidden lg:block w-[179px]" />
      </div>
    </div>
  );
}
