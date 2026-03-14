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

function StatCard({
  value,
  label,
  sub,
}: { value: string; label: string; sub?: string }) {
  return (
    <div className="bg-navy-900 text-white rounded-lg p-6 text-center">
      <p className="font-display text-3xl font-bold text-gold-400">{value}</p>
      <p className="font-medium mt-1">{label}</p>
      {sub && <p className="text-navy-200 text-xs mt-1">{sub}</p>}
    </div>
  );
}

export default function Effects() {
  return (
    <div>
      <header className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">
            Human & Global Impact
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Effects of the Wars
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl">
            The two world wars fundamentally and permanently reshaped human
            civilization — demographically, economically, politically, and
            culturally.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Section title="Human Cost">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard
              value="20M"
              label="WWI Deaths"
              sub="Military & civilian"
            />
            <StatCard
              value="70M+"
              label="WWII Deaths"
              sub="Military & civilian"
            />
            <StatCard
              value="6M"
              label="Holocaust Victims"
              sub="Jewish victims alone"
            />
            <StatCard
              value="21M"
              label="Spanish Flu Deaths"
              sub="Linked to WWI displacement"
            />
          </div>
          <p>
            World War I resulted in approximately 20 million deaths and 21
            million wounded. Beyond the battlefield, the 1918 influenza pandemic
            — facilitated by the movement of troops — killed an estimated 50–100
            million globally, dwarfing the war's own toll.
          </p>
          <p>
            World War II produced history's highest death toll: between 70 and
            85 million people, including 50–55 million civilians. The Soviet
            Union alone suffered approximately 27 million deaths — nearly 14% of
            its pre-war population. Poland lost approximately 6 million people,
            representing 17% of its population.
          </p>
        </Section>

        <Section title="Economic Impact">
          <p>
            World War I cost the combatant nations an estimated $186 billion
            (1914 dollars), roughly equivalent to $4.7 trillion today. Britain
            emerged from the war deeply indebted to the United States, marking
            the beginning of the decline of British economic and imperial power
            and the rise of American dominance.
          </p>
          <p>
            The reparations imposed on Germany under the Treaty of Versailles
            contributed to hyperinflation in the early 1920s — at its peak in
            November 1923, a loaf of bread cost 200 billion German marks. This
            economic devastation created the social conditions for extreme
            political movements.
          </p>
          <p>
            World War II cost an estimated $4.1 trillion (1945 dollars). The
            United States, largely untouched by physical destruction, emerged as
            the world's dominant economic power. The Marshall Plan ($13.3
            billion, or roughly $150 billion today) rebuilt Western Europe and
            created strong, stable democracies allied with the U.S.
          </p>
        </Section>

        <Section title="Political Changes">
          <p>
            World War I destroyed four great empires: the Ottoman,
            Austro-Hungarian, Russian, and German Empires. In their place arose
            new nation-states including Poland, Czechoslovakia, Yugoslavia,
            Hungary, and the Baltic states, along with the Soviet Union. The
            League of Nations — the first attempt at international collective
            security — was established in 1920 but failed without U.S.
            membership.
          </p>
          <p>
            World War II produced an even more profound political
            transformation. The United Nations was established in 1945 with the
            full participation of the major powers. Europe was divided between
            NATO's Western democracies and the Soviet-dominated Warsaw Pact,
            beginning the Cold War that would define global politics for 45
            years.
          </p>
          <p>
            Decolonization accelerated dramatically after 1945. Britain, France,
            the Netherlands, and Belgium — weakened by war and facing
            nationalist independence movements — granted independence to dozens
            of colonies throughout Africa and Asia between 1945 and 1975.
          </p>
        </Section>

        <Section title="Social Changes">
          <p>
            World War I dramatically accelerated women's entry into the
            workforce and their political emancipation. Women in Britain gained
            the right to vote in 1918, in the U.S. in 1920, and in most other
            Allied nations shortly thereafter, directly linked to their wartime
            contributions.
          </p>
          <p>
            World War II's "Rosie the Riveter" era brought millions of women
            into industrial jobs previously reserved for men. The subsequent
            conservative cultural backlash of the 1950s ultimately gave way to
            the feminist movements of the 1960s–70s that permanently changed
            gender roles in Western societies.
          </p>
          <p>
            Both wars produced major migration events. WWI displaced millions
            across Europe and the Middle East. WWII produced 40–60 million
            displaced persons, and the post-war partition of countries like
            Germany, India, and Korea created refugee crises of unprecedented
            scale.
          </p>
        </Section>

        <Section title="Long-term Legacy">
          <p>
            The creation of the United Nations, International Monetary Fund,
            World Bank, and General Agreement on Tariffs and Trade (GATT)
            established the rules-based international order that has governed
            global politics and economics since 1945. These institutions were
            explicitly designed to prevent a repetition of the conditions that
            led to the World Wars.
          </p>
          <p>
            The nuclear age began with the bombing of Hiroshima and Nagasaki.
            Nuclear deterrence — the doctrine of Mutual Assured Destruction —
            prevented direct military conflict between superpowers throughout
            the Cold War, but also created the existential threat of nuclear
            annihilation that remains with humanity today.
          </p>
          <p>
            The wars also gave birth to modern human rights law. The Universal
            Declaration of Human Rights (1948) and the Genocide Convention
            (1948) emerged directly from the horrors of the Holocaust. The
            Nuremberg Trials established that leaders could be held personally
            accountable for crimes against humanity — a principle that underpins
            the International Criminal Court today.
          </p>
        </Section>
      </div>
    </div>
  );
}
