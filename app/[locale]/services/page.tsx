import Navbar from "../components/navbar";
import ServiceCard from "../components/serviceCard";
import Link from 'next/link'
import { getDictionary } from "../layout";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dataText = await getDictionary(locale as "th" | "en");

  return (
    <>
      <Navbar locale={locale} />

      <section className="bg-blue-950/50 min-h-screen px-6 sm:px-8 lg:px-20 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center flex-col text-white text-3xl font-bold mb-16">
            <h1>{dataText.servicesTitle}</h1>
            <div className="h-1 w-80 bg-blue-600 mx-auto mt-5 rounded-full"></div>
          </div>

        <Link href={`/${locale}/contact`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataText.services.map((service: {
              title: string;
              description: string;
              price?: string;
              features?: string[];
            }) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                price={service.price}
                features={service.features}
              />
            ))}
          </div>
        </Link>

        </div>
      </section>
    </>
  );
}
