import Navbar from "../../components/navbar";
import { getDictionary } from "../../layout";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {

  const { locale } = await params ;
  const dataText  = await getDictionary(locale as "th" | "en") 

  return (
    <>
      <Navbar locale={locale} />

      {/* Me Section */}
      <section className="bg-blue-950/50  min-h-screen flex flex-col md:flex-row items-center px-6 sm:px-8 lg:px-20 pt-24 ">
      </section>

    </>
  );
}