import '@/app/ui/global.css';
import { carlito } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${carlito.className} antialiased`}>{children}</body>
    </html>
  );
}
