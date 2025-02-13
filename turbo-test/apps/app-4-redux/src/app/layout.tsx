import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'app-4-redux',
  description: 'app-4-redux',
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
