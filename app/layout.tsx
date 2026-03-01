import "./globals.css";
import localFont from "next/font/local";

const brandSerif = localFont({
  src: "../public/fonts/PTSerif-Regular.ttf",
  variable: "--font-brand",
  weight: "400",
  style: "normal",
});

export const metadata = {
  title:
    "DecisionGraph Core – Deterministic Decision Kernel for Replayable Judgment Systems",
  description:
    "DecisionGraph Core is a deterministic decision kernel for recording, traversing, and replaying human decisions as append-only graph structures. Designed for auditability, replayability, and constitutional integrity.",
  keywords: [
    "deterministic decision kernel",
    "decision graph infrastructure",
    "append-only decision log",
    "replayable decision history",
    "auditable decision system",
    "constitutional graph model",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "DecisionGraph Core",
    description:
      "Deterministic decision kernel for replayable, immutable decision graphs.",
    url: "https://izumix77.github.io/decisiongraph-core-site/",
    siteName: "DecisionGraph Core",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${brandSerif.variable} bg-[var(--color-paper)] text-[var(--color-ink)]`}
      >
        {children}
      </body>
    </html>
  );
}
