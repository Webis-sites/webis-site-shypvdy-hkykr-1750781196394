import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'שיפודי הכיכר',
  description: 'מסעדת גריל ישראלית אותנטית המתמחה במגוון שיפודים עסיסיים וטריים, המוכנים על האש במקום – באווירה חמה, עממית ומשפחתית. המסעדה מציעה חוויית אירוח אותנטית עם בשרים איכותיים, סלטים טריים, לחמים חמים מהטאבון ושירות מכל הלב.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#eaf73b" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {/* Navbar will be inserted here */}

          {children}

        </div>
      </body>
    </html>
  );
}
