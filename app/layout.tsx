// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

// App Metadata
export const metadata: Metadata = {
  title: "Hatem Hamdy Portfolio",
  description: "Portfolio — AI and technology projects by Hatem Hamdy",
  icons: {
    icon: "/favicon.ico",
  },
};

// Optional viewport & theme
export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Body classes match your page.tsx style */}
      <body className="bg-black text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
