import { motion } from "motion/react";

function Section({
  title,
  children,
}: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-display text-2xl font-bold mb-4 pb-2 border-b-2 border-gold-500 inline-block text-foreground">
        {title}
      </h2>
      <div className="space-y-3 text-foreground leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
}

export default function WorldWarI() {
  return (
    <div>
      <header className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">
            1914 – 1918
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            World War I
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl">
            The Great War — a conflict that shattered empires, killed millions,
            and permanently altered the course of history.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Section title="Overview">
          <p>
            World War I, known at the time as the Great War, was a global
            conflict fought primarily in Europe from 28 July 1914 to 11 November
            1918. It pitted the Allied Powers — principally France, the British
            Empire, Russia, Italy, and the United States — against the Central
            Powers of Germany, Austria-Hungary, the Ottoman Empire, and
            Bulgaria.
          </p>
          <p>
            The war was unprecedented in scale and destructiveness, introducing
            industrialized warfare, trench systems stretching hundreds of miles,
            and new weapons including poison gas, tanks, and airplanes. By the
            time the Armistice was signed on November 11, 1918, approximately 20
            million people had died.
          </p>
        </Section>

        <Section title="Causes (M.A.I.N.)">
          <p>
            Historians have identified four primary long-term causes of World
            War I, summarized by the acronym MAIN:{" "}
            <strong>
              Militarism, Alliances, Imperialism, and Nationalism.
            </strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Militarism:</strong> The major European powers had engaged
              in a decades-long arms race, dramatically expanding their armies
              and navies. Germany and Britain, in particular, competed fiercely
              in naval construction.
            </li>
            <li>
              <strong>Alliances:</strong> Europe was divided into two armed
              camps — the Triple Entente (France, Russia, Britain) and the
              Triple Alliance (Germany, Austria-Hungary, Italy), creating a
              hair-trigger system where any conflict could escalate rapidly.
            </li>
            <li>
              <strong>Imperialism:</strong> Competition for colonies and
              resources in Africa and Asia created tensions between European
              powers, particularly between Germany, which sought a larger
              colonial empire, and the established powers of Britain and France.
            </li>
            <li>
              <strong>Nationalism:</strong> Pan-Slavic nationalism in the
              Balkans threatened Austria-Hungary's multi-ethnic empire. The
              assassination of Archduke Franz Ferdinand in Sarajevo on June 28,
              1914 by Gavrilo Princip, a Bosnian-Serb nationalist, was the
              immediate trigger for the war.
            </li>
          </ul>
        </Section>

        <Section title="Key Battles">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Battle of the Marne (September 1914):</strong> The Allies
              halted the German advance into France, ending hopes of a quick
              German victory and establishing the Western Front's trench warfare
              that would persist for four years.
            </li>
            <li>
              <strong>Battle of Verdun (February–December 1916):</strong> One of
              the longest and most devastating battles in history, resulting in
              approximately 700,000 casualties. Fought between France and
              Germany over control of the fortress city of Verdun.
            </li>
            <li>
              <strong>Battle of the Somme (July–November 1916):</strong> A
              British-led offensive resulting in over one million casualties. On
              the first day alone, July 1, the British Army suffered nearly
              60,000 casualties — the bloodiest day in its history.
            </li>
            <li>
              <strong>Battle of Jutland (May–June 1916):</strong> The largest
              naval battle of the war, fought between the British Royal Navy and
              the Imperial German Navy in the North Sea. Though tactically
              inconclusive, Britain retained strategic control of the seas.
            </li>
            <li>
              <strong>Spring Offensive (1918):</strong> Germany's last major
              offensive on the Western Front, initially successful but
              ultimately exhausting Germany's remaining reserves and leading to
              the Allied counter-offensive and German collapse.
            </li>
          </ul>
        </Section>

        <Section title="Major Powers">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-parchment-100 rounded-lg p-4 border border-border">
              <h3 className="font-display font-bold text-navy-800 mb-2">
                Allied Powers
              </h3>
              <ul className="text-sm space-y-1">
                <li>
                  🇫🇷 France — suffered devastating losses on the Western Front
                </li>
                <li>
                  🇬🇧 British Empire — contributed forces from across its global
                  colonies
                </li>
                <li>
                  🇷🇺 Russia — fought on the Eastern Front until 1917 Revolution
                </li>
                <li>🇮🇹 Italy — switched sides from Triple Alliance in 1915</li>
                <li>🇺🇸 United States — entered the war in April 1917</li>
                <li>
                  🇯🇵 Japan — joined Allies, seized German possessions in Asia
                </li>
              </ul>
            </div>
            <div className="bg-parchment-100 rounded-lg p-4 border border-border">
              <h3 className="font-display font-bold text-navy-800 mb-2">
                Central Powers
              </h3>
              <ul className="text-sm space-y-1">
                <li>
                  🇩🇪 Germany — the primary military power of the Central
                  Alliance
                </li>
                <li>
                  🇦🇹 Austria-Hungary — multi-ethnic empire whose heir was
                  assassinated
                </li>
                <li>
                  🇹🇷 Ottoman Empire — fought on multiple fronts including the
                  Middle East
                </li>
                <li>🇧🇬 Bulgaria — joined the Central Powers in October 1915</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Key Figures">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Archduke Franz Ferdinand",
                role: "Heir to Austria-Hungary, whose assassination sparked the war",
              },
              {
                name: "Kaiser Wilhelm II",
                role: "German Emperor, whose aggressive foreign policy contributed to the war",
              },
              {
                name: "Field Marshal Douglas Haig",
                role: "British Commander-in-Chief on the Western Front",
              },
              {
                name: "General Philippe Pétain",
                role: "French general who led the defence of Verdun",
              },
              {
                name: "Woodrow Wilson",
                role: "U.S. President who brought America into the war and proposed the Fourteen Points",
              },
              {
                name: "T.E. Lawrence",
                role: "'Lawrence of Arabia,' British officer who organized Arab revolts against the Ottomans",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-card border border-border rounded-lg p-4"
              >
                <h4 className="font-display font-bold text-sm text-foreground">
                  {person.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Outcome & Legacy">
          <p>
            The Armistice of November 11, 1918 ended the fighting. The
            subsequent Treaty of Versailles (1919) imposed harsh terms on
            Germany — including the "war guilt" clause, reparations of 132
            billion gold marks, and significant territorial losses. Germany lost
            13% of its territory and 10% of its population.
          </p>
          <p>
            Four great empires — Ottoman, Austro-Hungarian, Russian, and German
            — collapsed as a direct result of the war. The Austro-Hungarian
            Empire dissolved into numerous successor states. The Russian Empire
            became the Soviet Union following the 1917 Revolution.
          </p>
          <p>
            The punishing peace terms, combined with global economic depression,
            sowed the seeds of resentment in Germany that Adolf Hitler and the
            Nazi Party would exploit in the 1930s, ultimately leading to World
            War II just two decades later.
          </p>
        </Section>
      </div>
    </div>
  );
}
