import "./globals.css";

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  th: () => import('../../dictionaries/th.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'th') => dictionaries[locale]()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased bg-gray-800"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
