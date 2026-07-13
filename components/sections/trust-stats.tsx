import { Counter } from "@/components/shared/counter";
import { siteConfig } from "@/lib/site-config";

export function TrustStats() {
  return (
    <section className="relative -mt-14 z-10">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-[var(--border)] bg-white p-8 shadow-[0_20px_60px_-20px_rgba(35,48,59,0.15)] sm:grid-cols-4 sm:p-10">
          {siteConfig.trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-semibold text-[var(--turquoise-dark)] sm:text-5xl lg:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[var(--ink-muted)] sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
