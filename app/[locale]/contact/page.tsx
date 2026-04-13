import Navbar from "../components/navbar";
import { getDictionary } from "../layout";

export default async function ContactPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const dataText = await getDictionary(locale as "th" | "en");

  return (
    <>
      <Navbar locale={locale} />

      <section className="bg-blue-950/50 min-h-screen px-6 sm:px-8 lg:px-20 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
           <div className="flex  items-center flex-col text-white text-3xl font-bold mb-10"> 
                <h1>{dataText.contactTitle}</h1>
                <div className="h-1 w-80 bg-blue-600 mx-auto mt-5 rounded-full"></div>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl">
              <h2 className="text-white text-2xl font-bold">{dataText.contactCardTitle}</h2>
              <p className="text-slate-300 mt-3 leading-relaxed">{dataText.contactCardDescription}</p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-blue-300 text-sm font-semibold">{dataText.contactEmailLabel}</p>
                    <p className="text-white text-lg font-medium">
                    koonchevychpai123@gmail.com
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-blue-300 text-sm font-semibold">{dataText.contactPhoneLabel}</p>
                  <p className="text-white text-lg font-medium">
                    +66 94 2261 664
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-blue-300 text-sm font-semibold">LINE</p>
                    <p className="text-white text-lg font-medium">
                    0942261664
                  </p>
                </div>


                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-blue-300 text-sm font-semibold">{dataText.contactLocationLabel}</p>
                  <p className="text-white text-lg font-medium">Bangkok, Thailand</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-slate-900/70 p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{dataText.contactActionTitle}</h3>
                <p className="text-slate-300 mt-3 leading-relaxed">{dataText.contactActionDescription}</p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                  <a
                  href="https://line.me/ti/p/ug_Pi9pHKx"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-600"
                > {dataText.contactActionLine}
                </a>
                <a
                  href="mailto:nantapong.pt@gmail.com"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-4 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-600"
                >
                  {dataText.contactActionMail}
                </a>
                <a
                  href="https://smallpdf.com/file#s=be201c89-9c27-4129-9e0b-197a6ecbfb19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-400/40 bg-blue-500/10 px-4 py-3 text-base font-semibold text-blue-200 transition-all hover:bg-blue-500/20"
                >
                  {dataText.contactActionResume}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
