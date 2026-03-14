import { motion } from "motion/react";

interface TimelineEvent {
  year: string;
  date: string;
  title: string;
  description: string;
  war: "WWI" | "WWII" | "Inter-war";
}

const events: TimelineEvent[] = [
  {
    year: "1914",
    date: "June 28, 1914",
    title: "Assassination of Archduke Franz Ferdinand",
    description:
      "Archduke Franz Ferdinand of Austria-Hungary is assassinated in Sarajevo by Gavrilo Princip, a Bosnian-Serb nationalist, setting off the chain of events leading to war.",
    war: "WWI",
  },
  {
    year: "1914",
    date: "August 1, 1914",
    title: "Germany Declares War on Russia",
    description:
      "Following Austria-Hungary's declaration of war on Serbia and Russia's mobilization, Germany declares war on Russia, triggering France's entry and beginning the wider European conflict.",
    war: "WWI",
  },
  {
    year: "1914",
    date: "September 1914",
    title: "First Battle of the Marne",
    description:
      "Allied forces halt Germany's advance into France, ending the Schlieffen Plan's hope of a swift victory and establishing years of trench warfare on the Western Front.",
    war: "WWI",
  },
  {
    year: "1916",
    date: "February–December 1916",
    title: "Battle of Verdun",
    description:
      "The longest battle of WWI, lasting ten months with nearly 700,000 total casualties. France successfully defended the fortress city from sustained German assault.",
    war: "WWI",
  },
  {
    year: "1916",
    date: "July–November 1916",
    title: "Battle of the Somme",
    description:
      "British-led offensive on the Western Front resulted in over one million casualties. Tanks were used in battle for the first time on September 15, 1916.",
    war: "WWI",
  },
  {
    year: "1917",
    date: "April 6, 1917",
    title: "United States Enters WWI",
    description:
      "The U.S. declares war on Germany, citing unrestricted submarine warfare and the Zimmermann Telegram. American troops and resources reinvigorate the Allied effort.",
    war: "WWI",
  },
  {
    year: "1917",
    date: "November 1917",
    title: "Russian Revolution",
    description:
      "The Bolshevik Revolution led by Lenin overthrows the Russian Provisional Government. Russia exits the war via the Treaty of Brest-Litovsk in March 1918.",
    war: "WWI",
  },
  {
    year: "1918",
    date: "November 11, 1918",
    title: "Armistice Ends World War I",
    description:
      "At 11 a.m. on the 11th day of the 11th month, the Armistice of Compiègne takes effect, ending fighting on the Western Front and concluding World War I.",
    war: "WWI",
  },
  {
    year: "1919",
    date: "June 28, 1919",
    title: "Treaty of Versailles Signed",
    description:
      "The peace treaty ending WWI imposes harsh terms on Germany, including $33 billion in reparations, territorial losses, and the 'war guilt' clause — Article 231.",
    war: "Inter-war",
  },
  {
    year: "1933",
    date: "January 30, 1933",
    title: "Hitler Becomes Chancellor of Germany",
    description:
      "Adolf Hitler is appointed Chancellor of Germany by President Hindenburg. Within months he consolidates power, establishing a totalitarian Nazi state.",
    war: "Inter-war",
  },
  {
    year: "1939",
    date: "September 1, 1939",
    title: "Germany Invades Poland",
    description:
      "Nazi Germany launches a Blitzkrieg invasion of Poland, prompting Britain and France to declare war on Germany two days later, officially beginning World War II.",
    war: "WWII",
  },
  {
    year: "1940",
    date: "July–October 1940",
    title: "Battle of Britain",
    description:
      "The RAF successfully defends Britain against the Luftwaffe's air campaign, denying Germany the air superiority needed for a naval invasion of the British Isles.",
    war: "WWII",
  },
  {
    year: "1941",
    date: "June 22, 1941",
    title: "Operation Barbarossa",
    description:
      "Germany launches a massive invasion of the Soviet Union with 3.8 million troops — the largest military operation in history — opening the devastating Eastern Front.",
    war: "WWII",
  },
  {
    year: "1941",
    date: "December 7, 1941",
    title: "Attack on Pearl Harbor",
    description:
      "Japan's surprise attack on the U.S. naval base at Pearl Harbor, Hawaii kills 2,403 Americans and sinks or damages 19 naval vessels, bringing the U.S. into WWII.",
    war: "WWII",
  },
  {
    year: "1942",
    date: "June 4–7, 1942",
    title: "Battle of Midway",
    description:
      "U.S. forces decisively defeat Japan's naval fleet, sinking four fleet carriers. This battle turned the tide of the Pacific War in America's favor.",
    war: "WWII",
  },
  {
    year: "1943",
    date: "February 2, 1943",
    title: "German Surrender at Stalingrad",
    description:
      "Field Marshal Paulus surrenders Germany's 6th Army at Stalingrad, marking the turning point on the Eastern Front. Over 800,000 Axis casualties were suffered in the battle.",
    war: "WWII",
  },
  {
    year: "1944",
    date: "June 6, 1944",
    title: "D-Day: Normandy Invasion",
    description:
      "Operation Overlord launches with 156,000 Allied troops landing on five Normandy beaches. The largest seaborne invasion in history opens the crucial second front in Western Europe.",
    war: "WWII",
  },
  {
    year: "1945",
    date: "May 8, 1945",
    title: "V-E Day: Germany Surrenders",
    description:
      "Nazi Germany surrenders unconditionally. Hitler had died by suicide on April 30. Victory in Europe Day marks the end of the war on the European continent.",
    war: "WWII",
  },
  {
    year: "1945",
    date: "August 6 & 9, 1945",
    title: "Atomic Bombings of Japan",
    description:
      "The U.S. drops atomic bombs on Hiroshima (August 6) and Nagasaki (August 9), killing an estimated 129,000–226,000 people and shocking Japan into surrender negotiations.",
    war: "WWII",
  },
  {
    year: "1945",
    date: "September 2, 1945",
    title: "V-J Day: Japan Surrenders",
    description:
      "Japan formally surrenders aboard USS Missouri in Tokyo Bay, ending World War II. The 31-year period of global conflict that began with WWI comes to a close.",
    war: "WWII",
  },
];

const warColors: Record<string, string> = {
  WWI: "bg-navy-700 text-white",
  WWII: "bg-gold-600 text-navy-900",
  "Inter-war": "bg-muted text-muted-foreground border border-border",
};

export default function Timeline() {
  return (
    <div>
      <header className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">
            1914 – 1945
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Historical Timeline
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl">
            Key events from both World Wars in chronological order.
          </p>
          <div className="flex gap-4 mt-6 flex-wrap">
            <span className="flex items-center gap-2 text-sm">
              <span className="inline-block w-3 h-3 rounded-full bg-navy-700" />
              World War I
            </span>
            <span className="flex items-center gap-2 text-sm">
              <span className="inline-block w-3 h-3 rounded-full bg-muted border border-border" />
              Inter-War Period
            </span>
            <span className="flex items-center gap-2 text-sm">
              <span className="inline-block w-3 h-3 rounded-full bg-gold-500" />
              World War II
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="timeline-container">
          {events.map((event, i) => {
            const isLeft = i % 2 === 0;
            const ocidIndex = i + 1;
            return (
              <motion.div
                key={event.title}
                data-ocid={`timeline.item.${ocidIndex}`}
                className={`flex items-start gap-8 mb-12 ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                } max-md:flex-row max-md:pl-12`}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`flex-1 ${isLeft ? "text-right max-md:text-left" : "text-left"}`}
                >
                  <span
                    className={`inline-block text-xs font-bold px-2 py-0.5 rounded mb-2 ${warColors[event.war]}`}
                  >
                    {event.war}
                  </span>
                  <p className="text-xs text-muted-foreground mb-1">
                    {event.date}
                  </p>
                  <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-navy-900 text-white flex items-center justify-center z-10 shadow-lg relative">
                  <span className="font-display font-bold text-xs text-center leading-tight text-gold-400">
                    {event.year}
                  </span>
                </div>

                <div className="flex-1 max-md:hidden" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
