

import Navbar from "../../components/navbar";
import Link from "next/link";
import { getDictionary } from "../../layout";

export default async function Page({
    params,
}: {
    params: Promise<{ locale: string; service: string }>;
}) {
    const { locale, service: serviceSlug } = await params;
    const dataText = await getDictionary(locale as "th" | "en");

    const slugify = (s: string) =>
        s.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

    const svc = dataText.services.find(
        (s: { slug?: string; title: string }) => (s.slug && s.slug === serviceSlug) || slugify(s.title) === serviceSlug,
    );

    if (!svc) {
        return (
            <>
                <Navbar locale={locale} />
                <section className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold">Service not found</h2>
                        <p className="mt-4">The requested service could not be located.</p>
                        <Link href={`/${locale}/services`} className="mt-6 inline-block text-blue-600">
                            Back to Services
                        </Link>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <Navbar locale={locale} />

            <section className="bg-blue-950/50 min-h-screen px-6 sm:px-8 lg:px-20 pt-28 pb-16">
                <div className="max-w-3xl mx-auto">
                    <div className="rounded-xl shadow-xl overflow-hidden">
                        <div className="p-8 r bg-blue-950/50  text-white">
                            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{svc.title}</h1>
                            <p className="text-sm text-blue-200 mb-4">{svc.description}</p>

                            {svc.features && (
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold mb-3 text-blue-100">Features</h3>
                                    <div className="flex flex-col gap-3">
                                        {svc.features.map((f: string) => (
                                            <div key={f} className="inline-flex items-start gap-3">
                                                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-xs">✓</span>
                                                <span className="text-blue-100">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                                <Link href={`/${locale}/contact`} className="inline-block bg-white text-blue-900 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-blue-50">
                                    {dataText.servicesCtaButton || 'Contact'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}