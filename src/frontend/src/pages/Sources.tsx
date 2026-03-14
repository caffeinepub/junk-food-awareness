import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface Citation {
  id: number;
  type: "book" | "article" | "online" | "primary";
  author: string;
  title: string;
  rest: string;
  url?: string;
}

const citations: Citation[] = [
  {
    id: 1,
    type: "book",
    author: "Keegan, John.",
    title: "The First World War.",
    rest: "New York: Alfred A. Knopf, 1999. A definitive narrative history of WWI that combines military analysis with individual human experiences.",
  },
  {
    id: 2,
    type: "book",
    author: "Gilbert, Martin.",
    title: "The First World War: A Complete History.",
    rest: "New York: Henry Holt and Company, 1994. Comprehensive account drawing on diaries, letters, and official records.",
  },
  {
    id: 3,
    type: "book",
    author: "Keegan, John.",
    title: "The Second World War.",
    rest: "New York: Viking, 1989. Sweeping global history of WWII analyzing the conflict's decisive campaigns and strategic turning points.",
  },
  {
    id: 4,
    type: "book",
    author: "Beevor, Antony.",
    title: "The Second World War.",
    rest: "New York: Little, Brown and Company, 2012. Comprehensive single-volume WWII history praised for its narrative clarity and archival depth.",
  },
  {
    id: 5,
    type: "book",
    author: "Hilberg, Raul.",
    title: "The Destruction of the European Jews.",
    rest: "3rd ed. New Haven: Yale University Press, 2003. The foundational scholarly work on the Holocaust, exhaustively documented from Nazi archives.",
  },
  {
    id: 6,
    type: "book",
    author: "MacMillan, Margaret.",
    title: "The War That Ended Peace: The Road to 1914.",
    rest: "New York: Random House, 2013. Examines the political decisions and miscalculations that led Europe into war.",
  },
  {
    id: 7,
    type: "book",
    author: "Evans, Richard J.",
    title: "The Third Reich Trilogy.",
    rest: "New York: Penguin Press, 2003–2008. Three-volume magisterial history of Nazi Germany from rise to fall, extensively cited.",
  },
  {
    id: 8,
    type: "article",
    author: "Howard, Michael.",
    title: '"The Causes of Wars."',
    rest: "Wilson Quarterly 8, no. 3 (1984): 90–103. Influential analysis of the structural and contingent factors that produce major wars.",
  },
  {
    id: 9,
    type: "primary",
    author: "Wilson, Woodrow.",
    title: '"Fourteen Points Address to Congress."',
    rest: "January 8, 1918. U.S. National Archives. President Wilson's vision for a postwar world order based on self-determination and collective security.",
  },
  {
    id: 10,
    type: "primary",
    author: "",
    title: "Nuremberg Trial Proceedings, Vol. 1.",
    rest: "International Military Tribunal, 1945–1946. Avalon Project, Yale Law School. Transcripts of the trial of major Nazi war criminals for crimes against peace, war crimes, and crimes against humanity.",
  },
  {
    id: 11,
    type: "online",
    author: "Imperial War Museum.",
    title: '"First World War."',
    rest: "IWM.org.uk. Accessed 2024. Extensive digital archive of photographs, personal testimonies, and primary documents from WWI.",
    url: "https://www.iwm.org.uk/history/first-world-war",
  },
  {
    id: 12,
    type: "online",
    author: "United States Holocaust Memorial Museum.",
    title: '"Holocaust Encyclopedia."',
    rest: "USHMM.org. Accessed 2024. Authoritative online encyclopaedia of the Holocaust with primary sources, photographs, and survivor testimonies.",
    url: "https://encyclopedia.ushmm.org",
  },
  {
    id: 13,
    type: "online",
    author: "National WWII Museum, New Orleans.",
    title: '"Road to War" and "Road to Berlin" interactive exhibits.',
    rest: "nationalww2museum.org. Accessed 2024.",
    url: "https://www.nationalww2museum.org",
  },
  {
    id: 14,
    type: "book",
    author: "Tuchman, Barbara W.",
    title: "The Guns of August.",
    rest: "New York: Macmillan, 1962. Pulitzer Prize-winning account of the first month of WWI, examining how European leaders stumbled into catastrophe.",
  },
  {
    id: 15,
    type: "book",
    author: "Churchill, Winston S.",
    title: "The Second World War.",
    rest: "6 vols. London: Cassell, 1948–1954. Churchill's own account of WWII, combining personal memoir with grand strategic narrative. Winner of the Nobel Prize in Literature.",
  },
];

const typeLabels = {
  book: { label: "Book", color: "bg-navy-700 text-white" },
  article: { label: "Journal", color: "bg-gold-600 text-navy-900" },
  primary: {
    label: "Primary",
    color: "bg-muted text-muted-foreground border border-border",
  },
  online: {
    label: "Online",
    color: "bg-parchment-200 text-navy-800 border border-border",
  },
};

export default function Sources() {
  return (
    <div>
      <header className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-2">
            Bibliography
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Sources
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl">
            Academic references, primary sources, and recommended further
            reading. Citations follow Chicago/MLA style guidelines.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex gap-4 flex-wrap mb-8">
          {Object.entries(typeLabels).map(([key, val]) => (
            <span
              key={key}
              className={`text-xs font-medium px-2 py-1 rounded ${val.color}`}
            >
              {val.label}
            </span>
          ))}
        </div>

        <ol className="space-y-4">
          {citations.map((cite, i) => {
            const tag = typeLabels[cite.type];
            return (
              <motion.li
                key={cite.id}
                className="flex gap-4 p-5 bg-card border border-border rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                <span className="font-display font-bold text-lg text-gold-500 flex-shrink-0 w-6 text-right">
                  {cite.id}.
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    {cite.author && <span>{cite.author} </span>}
                    <em>{cite.title}</em> {cite.rest}
                  </p>
                  {cite.url && (
                    <a
                      href={cite.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gold-600 hover:text-gold-500 mt-2 transition-colors"
                    >
                      Visit resource <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ol>

        <motion.div
          className="mt-12 bg-parchment-100 border border-border rounded-lg p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-xl mb-3 text-foreground">
            A Note on Sources
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This educational resource draws on a combination of scholarly
            monographs, peer-reviewed journal articles, primary documents, and
            reputable museum archives. For original research, readers are
            encouraged to consult primary sources directly and to
            cross-reference multiple secondary sources. Dates, casualty figures,
            and historical interpretations may vary between scholars and are
            subject to ongoing historical revision.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
