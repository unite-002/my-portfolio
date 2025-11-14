// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

// App Metadata
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio — Created with Next.js",
  icons: {
    icon: "/favicon.ico",
  },
};

// Viewport & theme color (optional)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Tailwind utility classes: change bg/text to your preferred palette */}
      <body className="bg-white text-black antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
