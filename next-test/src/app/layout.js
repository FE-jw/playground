import './globals.css';

export const metadata = {
  title: 'jw app',
  description: 'jw app Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
