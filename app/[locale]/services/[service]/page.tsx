

import Navbar from "../../components/navbar";
import Testimonials from "../../components/testimonials";
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
                                    <h3 className="text-lg font-semibold mb-3 text-blue-100">{dataText.servicesInSessionLabel || "Features"}</h3>
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

                            {svc.deliverables && (
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold mb-3 text-blue-100">{dataText.servicesDeliverablesLabel || "Deliverables"}</h3>
                                    <div className="flex flex-col gap-3">
                                        {svc.deliverables.map((d: string) => (
                                            <div key={d} className="inline-flex items-start gap-3">
                                                <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#06C755]/20 text-[#06C755] text-xs">↓</span>
                                                <span className="text-blue-100">{d}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {svc.price && (
                                <div className="mt-6 rounded-lg border border-[#06C755]/40 bg-[#06C755]/10 p-4">
                                    <p className="text-[#06C755] font-semibold">{svc.price}</p>
                                </div>
                            )}

                            {svc.testimonials && svc.testimonials.length > 0 && (
                                <Testimonials
                                    testimonials={svc.testimonials}
                                    label={dataText.servicesTestimonialsLabel}
                                />
                            )}

                            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                                <Link href="https://line.me/ti/p/ug_Pi9pHKx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#06C755] text-white px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-[#05b34c]">
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