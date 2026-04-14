import "./globals.css";

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  th: () => import('../../dictionaries/th.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'th') => dictionaries[locale]()

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      className="h-full antialiased bg-gray-800"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
