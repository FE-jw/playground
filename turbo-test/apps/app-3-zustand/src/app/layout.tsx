import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "app-3-zustand",
  description: "app-3-zustand test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
