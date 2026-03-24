import { Card } from "@ui/Card";
import type { Release } from "@/types/changelog";

type Props = {
  releases: Release[];
};

export default function Changelog({ releases }: Props) {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {releases.map((release) => (
        <Card key={release.version} title={`v${release.version}`}>
          {/* Header */}
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-bold">v{release.version}</h2>
            <span className="text-sm text-[color:var(--color-ink-subtle)]">
              {release.date}
            </span>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {release.sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>

                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-sm leading-relaxed">
                      <div>{item.text}</div>

                      {/* Packages */}
                      {item.packages && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.packages.map((pkg) => (
                            <a
                              key={pkg.name}
                              href={`https://www.npmjs.com/package/${pkg.name}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs px-2 py-1 rounded-full border hover:bg-[var(--color-paper-hover)] transition"
                            >
                              {pkg.name}@{pkg.version}
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Children */}
                      {item.children && (
                        <ul className="mt-2 ml-4 list-disc text-[color:var(--color-ink-subtle)]">
                          {item.children.map((child, i) => (
                            <li key={i}>{child}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
