import "./globals.css";
import localFont from "next/font/local";

const brandSerif = localFont({
  src: "../public/fonts/PTSerif-Regular.ttf",
  variable: "--font-brand",
  weight: "400",
  style: "normal",
});

export const metadata = {
  title: "DecisionGraph Core",
  description:
    "A deterministic kernel for recording, traversing, and replaying human decisions.",
  openGraph: {
    images: [
      {
        url: "/og.png", // 静的フォールバック
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
