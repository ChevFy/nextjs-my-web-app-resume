import Image from "next/image";

interface AchievementItem {
  title: string;
  track: string;
  status: string;
  organization: string;
  year: string;
  description: string;
}

interface AchievementsDictionary {
  achievementsTitle: string;
  achievements: AchievementItem[];
}

export default function Achievements({
  dataText,
}: {
  dataText: AchievementsDictionary;
}) {
  return (
    <div className="flex flex-col items-center w-3/4">
      <h2 className="text-xl font-bold text-gray-200 mb-8">
        {dataText.achievementsTitle}
      </h2>

      <div className="w-full flex flex-col gap-6">
        {dataText.achievements.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col sm:flex-row rounded-2xl border border-blue-800/60 bg-slate-900/80 p-6 shadow-xl hover:border-blue-400/70 hover:shadow-blue-900/20 transition-all duration-300"
          >
            <div className="flex-shrink-0 flex items-center justify-center p-4 mb-4 sm:mb-0 sm:mr-6">
              <Image
                src="/images/ywc21.jpg"
                alt=""
                width={80}
                height={80}
                className="object-contain drop-shadow-lg"
              />
            </div>

            <div className="flex flex-col flex-grow justify-center text-slate-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">{item.status}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-400">
                    {item.title}
                  </h3>
                  <p className="text-slate-400">{item.track}</p>
                  <p className="text-sm text-slate-400 pt-2">{item.description}</p>
                  <p className="text-sm text-slate-500 pt-1">{item.organization}</p>
                </div>

                <div className="inline-flex items-center justify-center self-start text-sm font-semibold text-blue-200 bg-blue-900/40 border border-blue-800/50 px-4 py-1.5 rounded-full whitespace-nowrap">
                  <p>{item.year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
