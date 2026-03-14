import { motion } from "motion/react";

const rows = [
  {
    label: "Duration",
    ww1: "4 years, 3 months\n(July 28, 1914 – November 11, 1918)",
    ww2: "6 years, 1 day\n(September 1, 1939 – September 2, 1945)",
  },
  {
    label: "Total Casualties",
    ww1: "~20 million deaths\n21 million wounded",
    ww2: "70–85 million deaths\n(~55M civilian, ~20–25M military)",
  },
  {
    label: "Countries Involved",
    ww1: "30+ nations\n(Triple Entente vs. Central Powers)",
    ww2: "30+ nations across 6 continents\n(Allies vs. Axis)",
  },
  {
    label: "Primary Cause",
    ww1: "Nationalism, militarism, imperial rivalries, and the alliance system triggered by the assassination of Archduke Franz Ferdinand",
    ww2: "Rise of fascism and Nazism, failure of collective security, Treaty of Versailles grievances, and German aggression under Hitler",
  },
  {
    label: "Main Theatres",
    ww1: "Western Front (France/Belgium), Eastern Front (Russia), Ottoman Middle East, Africa",
    ww2: "Europe (Western & Eastern Fronts), Pacific Ocean, North Africa, Southeast Asia",
  },
  {
    label: "Key Technology",
    ww1: "Poison gas, early tanks, machine guns, submarines, early aircraft, artillery",
    ww2: "Radar, atomic bombs, jet aircraft, advanced tanks, ballistic missiles, mass air power",
  },
  {
    label: "Outcome",
    ww1: "Allied victory; collapse of four empires; Treaty of Versailles; creation of League of Nations",
    ww2: "Allied victory; United Nations established; Cold War begins; decolonization; nuclear age begins",
  },
  {
    label: "Key Treaties",
    ww1: "Treaty of Versailles (Germany), Treaty of Saint-Germain (Austria), Treaty of Sèvres (Ottoman Empire)",
    ww2: "No single peace treaty — governed by Paris Peace Treaties (1947), Japanese Peace Treaty (1951), German reunification treaties",
  },
  {
    label: "Civilian Targeting",
    ww1: "Limited — mostly confined to naval blockades and occasional air raids",
    ww2: "Systematic — strategic bombing campaigns, Holocaust, Japanese atrocities, Soviet mass deportations",
  },
  {
    label: "Economic Cost",
    ww1: "~$186 billion (1914 USD)\nApprox. $4.7 trillion today",
    ww2: "~$4.1 trillion (1945 USD)\nLargest economic event in history",
  },
];

export default function Comparison() {
  return (
    <div>
      <header className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">
            Side-by-Side
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Comparison of WW1 & WW2
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl">
            A structured comparison of both world wars across duration,
            casualties, causes, technology, and outcomes.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto rounded-lg border border-border shadow"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="text-left px-4 py-4 font-display font-bold w-1/4">
                  Category
                </th>
                <th className="text-left px-4 py-4 font-display font-bold w-[37.5%]">
                  <span className="text-gold-400">World War I</span>
                  <span className="block text-navy-200 text-xs font-normal">
                    1914 – 1918
                  </span>
                </th>
                <th className="text-left px-4 py-4 font-display font-bold w-[37.5%]">
                  <span className="text-gold-400">World War II</span>
                  <span className="block text-navy-200 text-xs font-normal">
                    1939 – 1945
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  data-ocid={`comparison.row.${i + 1}`}
                  className={
                    i % 2 === 0 ? "bg-parchment-50" : "bg-parchment-100"
                  }
                >
                  <td className="px-4 py-4 font-semibold text-navy-800 align-top">
                    {row.label}
                  </td>
                  <td className="px-4 py-4 text-foreground align-top whitespace-pre-line leading-relaxed">
                    {row.ww1}
                  </td>
                  <td className="px-4 py-4 text-foreground align-top whitespace-pre-line leading-relaxed">
                    {row.ww2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="mt-12 bg-parchment-100 rounded-lg p-8 border border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-xl font-bold mb-4 text-foreground">
            Key Observations
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed text-foreground">
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">→</span>
              <span>
                WWII was significantly longer and produced roughly 3–4× more
                deaths than WWI, reflecting advances in the scale and
                destructiveness of industrial warfare.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">→</span>
              <span>
                WWI was primarily a European conflict fought from fixed
                positions; WWII was a truly global, highly mobile war that
                reshaped every continent.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">→</span>
              <span>
                The unresolved outcome of WWI — particularly the punishing
                Treaty of Versailles — directly created the conditions for WWII,
                making the two wars deeply interconnected.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-600 font-bold flex-shrink-0">→</span>
              <span>
                WWII deliberately targeted civilian populations at a scale and
                with an intentionality unprecedented in modern history,
                particularly through the Holocaust and strategic bombing
                campaigns.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
