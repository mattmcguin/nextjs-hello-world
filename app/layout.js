export const metadata = {
  title: 'Next.js Hello World',
  description: 'GitOps deployed Next.js demo'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>{children}</body>
    </html>
  );
}
