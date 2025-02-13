import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'app-4-redux title',
  description: 'app-4-redux description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
