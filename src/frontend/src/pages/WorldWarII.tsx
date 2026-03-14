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

export default function WorldWarII() {
  return (
    <div>
      <header className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">
            1939 – 1945
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            World War II
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl">
            The deadliest conflict in human history — a global struggle against
            fascism and imperial aggression that reshaped the world order.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Section title="Overview">
          <p>
            World War II was a global conflict lasting from September 1, 1939 to
            September 2, 1945. It involved the vast majority of the world's
            nations, forming two opposing military alliances: the Allies (led by
            the United States, United Kingdom, Soviet Union, and France) and the
            Axis (led by Germany, Italy, and Japan).
          </p>
          <p>
            The war was the deadliest conflict in human history, resulting in
            70–85 million fatalities, including an estimated 50–55 million
            civilians. Mass atrocities, including the Holocaust and Japanese war
            crimes, characterized the conflict's genocidal dimension.
          </p>
        </Section>

        <Section title="Causes">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Rise of Fascism and Nazism:</strong> The rise of Adolf
              Hitler's National Socialist party in Germany and Benito
              Mussolini's Fascists in Italy established authoritarian,
              expansionist regimes that destabilized European peace.
            </li>
            <li>
              <strong>Treaty of Versailles Resentment:</strong> Germany's
              humiliation under the terms of the 1919 peace treaty — heavy
              reparations, territorial losses, and the "war guilt" clause —
              fuelled extreme nationalist sentiment that Hitler exploited.
            </li>
            <li>
              <strong>Appeasement Policy:</strong> Britain and France's policy
              of appeasing Hitler's territorial demands, most notably at the
              Munich Agreement (1938) which ceded the Sudetenland to Germany,
              emboldened further Nazi aggression.
            </li>
            <li>
              <strong>German Invasion of Poland:</strong> On September 1, 1939,
              Germany invaded Poland using Blitzkrieg tactics. Britain and
              France, bound by treaty, declared war on Germany two days later.
            </li>
            <li>
              <strong>Japanese Expansionism:</strong> Japan's aggressive
              expansion in East Asia and the Pacific — including the invasion of
              China and seizure of European colonies — ultimately led to the
              attack on Pearl Harbor, drawing the United States into the war.
            </li>
          </ul>
        </Section>

        <Section title="Key Battles">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Battle of Britain (1940):</strong> Germany's attempt to
              gain air superiority over Britain was defeated by the Royal Air
              Force, preventing a planned Nazi invasion. Winston Churchill's
              leadership and the RAF's resilience proved pivotal.
            </li>
            <li>
              <strong>Battle of Stalingrad (1942–1943):</strong> One of the
              largest and bloodiest battles in history, ending with the
              encirclement and surrender of Germany's 6th Army. It marked the
              decisive turning point on the Eastern Front.
            </li>
            <li>
              <strong>Battle of El Alamein (1942):</strong> British General
              Bernard Montgomery defeated Field Marshal Rommel's Afrika Korps in
              Egypt, securing Allied control of North Africa and the
              Mediterranean.
            </li>
            <li>
              <strong>D-Day — Normandy Invasion (June 6, 1944):</strong> The
              largest seaborne invasion in history, with Allied forces landing
              on five beaches in northern France, opening the decisive Western
              Front and beginning the liberation of Western Europe.
            </li>
            <li>
              <strong>Battle of Midway (June 1942):</strong> A decisive U.S.
              naval victory over Japan that destroyed four Japanese aircraft
              carriers, permanently shifting the balance of power in the Pacific
              War.
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
                  🇺🇸 United States — became the arsenal of democracy from 1941
                </li>
                <li>
                  🇬🇧 United Kingdom — resisted German air attacks and led
                  European operations
                </li>
                <li>
                  🇷🇺 Soviet Union — suffered the most casualties; decisive on
                  Eastern Front
                </li>
                <li>
                  🇫🇷 Free France — continued resistance under General de Gaulle
                </li>
                <li>🇨🇳 China — fought Japan in Asia since 1937</li>
                <li>
                  🇨🇦 Canada / Australia — significant contributions from
                  Commonwealth nations
                </li>
              </ul>
            </div>
            <div className="bg-parchment-100 rounded-lg p-4 border border-border">
              <h3 className="font-display font-bold text-navy-800 mb-2">
                Axis Powers
              </h3>
              <ul className="text-sm space-y-1">
                <li>🇩🇪 Nazi Germany — the primary aggressor in Europe</li>
                <li>🇯🇵 Imperial Japan — dominated East Asia and the Pacific</li>
                <li>
                  🇮🇹 Fascist Italy — fought in North Africa and southern Europe
                </li>
                <li>🇭🇺 Hungary, Romania, Bulgaria — minor Axis members</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Key Figures">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Adolf Hitler",
                role: "Führer of Nazi Germany; principal architect of WWII and the Holocaust",
              },
              {
                name: "Winston Churchill",
                role: "British Prime Minister whose leadership inspired Allied resistance",
              },
              {
                name: "Franklin D. Roosevelt",
                role: "U.S. President who guided America through the war",
              },
              {
                name: "Joseph Stalin",
                role: "Soviet leader who directed the Eastern Front campaign",
              },
              {
                name: "Dwight D. Eisenhower",
                role: "Supreme Allied Commander in Europe; led D-Day invasion",
              },
              {
                name: "Hideki Tojo",
                role: "Japanese Prime Minister and military leader during the Pacific War",
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

        <Section title="The Holocaust">
          <p>
            The Holocaust was the systematic, state-sponsored persecution and
            murder of six million Jews by the Nazi regime and its collaborators
            between 1941 and 1945. Two-thirds of the entire Jewish population of
            Europe was annihilated. The Nazis also targeted Roma, people with
            disabilities, Soviet civilians and prisoners of war, homosexuals,
            and political opponents.
          </p>
          <p>
            The mass killings were carried out through mobile killing units
            (Einsatzgruppen), ghettoization, deportations, and a network of
            concentration and extermination camps including Auschwitz-Birkenau,
            Treblinka, and Sobibor. The Nuremberg Trials (1945–1946) established
            the precedent for prosecuting crimes against humanity.
          </p>
        </Section>

        <Section title="Outcome & Legacy">
          <p>
            Germany surrendered unconditionally on May 8, 1945 (V-E Day). Japan
            surrendered on September 2, 1945 (V-J Day), following the atomic
            bombings of Hiroshima (August 6) and Nagasaki (August 9) and Soviet
            declaration of war against Japan.
          </p>
          <p>
            The post-war world was fundamentally reorganized. The United Nations
            was established in 1945 to maintain international peace. Europe was
            divided between Western democracies and Soviet-dominated Eastern
            bloc, initiating the Cold War. The Marshall Plan helped rebuild
            Western Europe, while Germany and Japan were occupied and
            democratized.
          </p>
          <p>
            The State of Israel was established in 1948 in response to the
            Holocaust. Decolonization movements accelerated throughout Africa
            and Asia. The nuclear age began, defining geopolitics for the
            remainder of the 20th century.
          </p>
        </Section>
      </div>
    </div>
  );
}
