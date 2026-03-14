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

function WeaponCard({
  name,
  description,
}: { name: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h4 className="font-display font-bold text-sm text-navy-800 mb-1">
        {name}
      </h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function WeaponsTechnology() {
  return (
    <div>
      <header className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">
            Innovation in Warfare
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Weapons & Technology
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl">
            Both world wars transformed military technology — forcing rapid
            innovation that would define modern warfare and civilian life for
            generations.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Section title="WWI Weapons">
          <p>
            World War I introduced industrial-scale killing weapons that shocked
            the world. The static nature of trench warfare drove the development
            of new armaments designed to break the stalemate.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <WeaponCard
              name="Poison Gas"
              description="First used by Germany in April 1915 at Ypres. Chlorine, phosgene, and mustard gas were deployed, causing horrific casualties and prompting the use of gas masks."
            />
            <WeaponCard
              name="Machine Guns"
              description="Heavy water-cooled machine guns like the Maxim could fire 400–600 rounds per minute, making frontal infantry assaults suicidal and cementing the power of defensive warfare."
            />
            <WeaponCard
              name="Artillery"
              description="Heavy artillery was the dominant weapon, responsible for approximately 60% of casualties. The German 'Paris Gun' could fire shells 120 km — the longest-ranged artillery in history at the time."
            />
            <WeaponCard
              name="Flamethrowers"
              description="German Flammenwerfer units introduced portable flamethrowers for clearing enemy trenches, creating psychological terror as much as physical harm to defenders."
            />
          </div>
        </Section>

        <Section title="WWI Technology">
          <div className="grid sm:grid-cols-2 gap-4">
            <WeaponCard
              name="Tanks"
              description="The British Mark I tank debuted at the Somme in September 1916, designed to cross no-man's-land and crush barbed wire. Early models were slow and unreliable, but demonstrated decisive potential."
            />
            <WeaponCard
              name="Military Aircraft"
              description="From observation balloons to fighter aces like the Red Baron, air power evolved rapidly. The Sopwith Camel and Fokker Dr.I defined dogfighting, while strategic bombing began with Zeppelin raids on London."
            />
            <WeaponCard
              name="Submarines (U-boats)"
              description="German U-boats nearly defeated Britain through unrestricted submarine warfare, sinking over 5,000 Allied ships. Convoy systems and ASDIC sonar were developed in response."
            />
            <WeaponCard
              name="Radio Communication"
              description="Wireless radio allowed commanders to coordinate operations across vast battlefronts, though signals security was poor. Coded communication and cryptanalysis became strategically vital."
            />
          </div>
        </Section>

        <Section title="WWII Weapons">
          <p>
            WWII produced an arms race of unprecedented scale. Nations invested
            enormous resources in developing weapons of ever-greater destructive
            power, culminating in the atomic bomb.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <WeaponCard
              name="Atomic Bomb"
              description="The Manhattan Project produced the world's first nuclear weapons. 'Little Boy' and 'Fat Man' were dropped on Hiroshima and Nagasaki in August 1945, killing over 100,000 immediately and ending the Pacific War."
            />
            <WeaponCard
              name="V-2 Rocket"
              description="Germany's Vergeltungswaffe 2 was the world's first ballistic missile, capable of carrying a one-ton warhead at supersonic speeds. Over 3,000 V-2s were fired at Allied cities. It was the direct precursor to space rockets."
            />
            <WeaponCard
              name="Advanced Tanks"
              description="The Soviet T-34 and German Tiger I/Panther represented the pinnacle of WWII tank design. The Battle of Kursk (1943) involved over 6,000 tanks in the largest armored engagement in history."
            />
            <WeaponCard
              name="Submachine Guns"
              description="Weapons like the German MP40, British Sten, and American Thompson SMG gave infantry enormous firepower in close combat, changing infantry squad tactics fundamentally."
            />
          </div>
        </Section>

        <Section title="WWII Technology">
          <div className="grid sm:grid-cols-2 gap-4">
            <WeaponCard
              name="Radar"
              description="Britain's Chain Home radar network was crucial in the Battle of Britain, giving RAF Fighter Command advance warning of Luftwaffe attacks. Radar technology transformed both air and naval warfare."
            />
            <WeaponCard
              name="Enigma & Codebreaking"
              description="Alan Turing and Bletchley Park's codebreakers cracked Germany's Enigma cipher machine, providing the Allies with invaluable intelligence. Historians credit this with shortening the war by 2–4 years."
            />
            <WeaponCard
              name="Jet Aircraft"
              description="Germany's Messerschmitt Me 262 was the world's first operational jet fighter, far faster than any Allied piston-engine aircraft. Allied bombing of jet fuel supplies prevented it from changing the air war."
            />
            <WeaponCard
              name="Penicillin"
              description="Mass production of penicillin from 1943 onwards saved tens of thousands of soldiers' lives by treating bacterial infections that would previously have been fatal, revolutionizing military medicine."
            />
          </div>
        </Section>

        <Section title="Naval Warfare">
          <p>
            Naval technology evolved dramatically between the wars. Aircraft
            carriers replaced battleships as the dominant capital ship after
            Pearl Harbor demonstrated their decisive striking power over
            traditional gun-armed vessels.
          </p>
          <p>
            The Battle of the Atlantic (1939–1945) was the longest continuous
            military campaign of WWII, with Germany's U-boat fleet attempting to
            starve Britain into submission. Allied development of sonar, depth
            charges, long-range patrol aircraft, and convoy systems ultimately
            defeated the U-boat threat, with Germany losing 783 of its 1,162
            operational submarines.
          </p>
        </Section>

        <Section title="Air Power">
          <p>
            Strategic bombing became a central element of WWII strategy. The
            Allied Combined Bomber Offensive dropped over 1.4 million tons of
            bombs on Germany and German-occupied Europe. The bombing of Dresden
            in February 1945 remains controversial, killing an estimated 22,700
            civilians in a city of questionable military value.
          </p>
          <p>
            Japan's kamikaze strategy — using suicide pilots to crash bomb-laden
            aircraft into Allied warships — sank 47 ships and damaged 300
            others, demonstrating a willingness to absorb enormous losses that
            contributed to the Allied decision to use atomic weapons.
          </p>
        </Section>
      </div>
    </div>
  );
}
