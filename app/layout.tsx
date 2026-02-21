import "./globals.css";

export const metadata = {
  title: "DecisionGraph Core",
  description: "A deterministic kernel for recording, traversing, and replaying human decisions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-paper)] text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
