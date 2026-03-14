import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";

const ingredients = [
  {
    name: "High-Fructose Corn Syrup (HFCS)",
    severity: "Critical",
    description:
      "HFCS is a cheap sweetener derived from corn starch, used pervasively since the 1970s. Unlike glucose, fructose is metabolized almost entirely by the liver, contributing directly to fatty liver disease, insulin resistance, and metabolic syndrome.",
    foundIn: [
      "Sodas & sweetened beverages",
      "Bread & baked goods",
      "Ketchup & condiments",
      "Breakfast cereals",
    ],
    effects: [
      "Promotes visceral fat accumulation",
      "Drives insulin resistance and type 2 diabetes",
      "Does not trigger satiety hormones like glucose",
    ],
  },
  {
    name: "Trans Fats / Partially Hydrogenated Oils",
    severity: "Critical",
    description:
      "Artificially created by hydrogenating vegetable oils, trans fats dramatically raise LDL cholesterol while lowering HDL. The FDA banned them in 2018, but trace amounts persist in many products, and they remain common in countries with looser regulations.",
    foundIn: [
      "Margarine & shortening",
      "Fried fast food",
      "Commercial pastries",
      "Microwave popcorn",
    ],
    effects: [
      "Raises LDL (bad) cholesterol by 21%",
      "Directly increases heart disease and stroke risk",
      "Linked to systemic inflammation",
    ],
  },
  {
    name: "Artificial Food Dyes (Red 40, Yellow 5, Blue 1)",
    severity: "High",
    description:
      "Petroleum-derived synthetic dyes are added purely for visual appeal. Several are already banned in the EU. Studies in children link them to hyperactivity and ADHD-like behavior, with some dyes containing benzidine — a known human carcinogen.",
    foundIn: [
      "Candy & gummies",
      "Sports drinks",
      "Breakfast cereals",
      "Maraschino cherries",
    ],
    effects: [
      "Linked to hyperactivity and ADHD in children",
      "Red 40 may contain carcinogenic benzidine",
      "Can trigger allergic reactions and hives",
    ],
  },
  {
    name: "Monosodium Glutamate (MSG)",
    severity: "Moderate",
    description:
      "MSG is the sodium salt of glutamic acid, used to enhance savory flavor. While the FDA labels it 'generally recognized as safe,' research suggests it may dysregulate appetite signaling and the hypothalamus in large doses, contributing to overconsumption.",
    foundIn: [
      "Fast food seasoning",
      "Instant noodles",
      "Chips & crackers",
      "Frozen meals",
    ],
    effects: [
      "May impair hypothalamic appetite regulation",
      "Reported to cause headaches in sensitive individuals",
      "Encourages overeating by enhancing flavor beyond satiety",
    ],
  },
  {
    name: "BHA & BHT (Preservatives)",
    severity: "High",
    description:
      "Butylated hydroxyanisole (BHA) and butylated hydroxytoluene (BHT) are synthetic antioxidants used to prevent rancidity in oils and fats. BHA is listed as a possible human carcinogen by the National Toxicology Program, and both disrupt endocrine function in animal studies.",
    foundIn: ["Potato chips", "Cereals", "Chewing gum", "Butter & lard"],
    effects: [
      "BHA classified as possible human carcinogen (NTP)",
      "Endocrine-disrupting effects in animal studies",
      "Accumulates in body fat over time",
    ],
  },
  {
    name: "Sodium Nitrate / Nitrite",
    severity: "High",
    description:
      "Used to cure and preserve processed meats, sodium nitrate converts to nitrosamines during cooking or digestion — compounds the WHO has classified as Group 1 carcinogens. The World Cancer Research Fund recommends avoiding processed meat entirely.",
    foundIn: [
      "Hot dogs & sausages",
      "Bacon & deli meats",
      "Pepperoni",
      "Smoked fish",
    ],
    effects: [
      "Forms nitrosamines — Group 1 carcinogens (WHO)",
      "Strongly linked to colorectal cancer",
      "WHO classifies processed meat as 'carcinogenic to humans'",
    ],
  },
  {
    name: "Carrageenan",
    severity: "Moderate",
    description:
      "Extracted from red seaweed, carrageenan is used as a thickener and stabilizer. Though derived from a natural source, animal studies show it triggers intestinal inflammation, and 'degraded' carrageenan (poligeenan) is a known carcinogen.",
    foundIn: ["Chocolate milk", "Ice cream", "Infant formula", "Deli meats"],
    effects: [
      "Induces intestinal inflammation in animal models",
      "May worsen IBS and inflammatory bowel conditions",
      "Degraded form (poligeenan) is a confirmed carcinogen",
    ],
  },
  {
    name: "Acrylamide",
    severity: "High",
    description:
      "Acrylamide forms naturally when starchy foods are cooked at high temperatures (above 120°C/248°F). It's not an additive — it's a byproduct of frying and baking. The International Agency for Research on Cancer classifies it as a 'probable human carcinogen.'",
    foundIn: ["French fries", "Potato chips", "Coffee", "Toast & biscuits"],
    effects: [
      "Probable human carcinogen (IARC Group 2A)",
      "Damages DNA and disrupts nerve function",
      "Higher levels in darker, more crisped foods",
    ],
  },
  {
    name: "Artificial Sweeteners (Aspartame, Sucralose)",
    severity: "Moderate",
    description:
      "Marketed as healthier alternatives to sugar, artificial sweeteners may paradoxically disrupt gut microbiome composition, alter glucose metabolism, and increase sweet cravings. The WHO in 2023 recommended against their use for weight management.",
    foundIn: [
      "Diet sodas",
      "Sugar-free gum",
      "Protein bars",
      "'Light' yogurts",
    ],
    effects: [
      "WHO (2023): does not aid long-term weight management",
      "Disrupts gut microbiome diversity",
      "May increase insulin response despite no calories",
    ],
  },
  {
    name: "Phosphoric Acid",
    severity: "High",
    description:
      "Added to colas for tartness and as a preservative, phosphoric acid directly acidifies the mouth, eroding dental enamel on contact. High dietary phosphate intake also disrupts calcium balance, leaching calcium from bones and increasing osteoporosis risk.",
    foundIn: [
      "Cola drinks",
      "Energy drinks",
      "Processed cheese",
      "Fast food meat products",
    ],
    effects: [
      "Erodes tooth enamel directly on contact",
      "Disrupts calcium-phosphorus balance in bones",
      "Linked to lower bone density and kidney stones",
    ],
  },
];

const severityColor: Record<string, string> = {
  Critical: "bg-vermillion-100 text-vermillion-700 border-vermillion-200",
  High: "bg-amber-300/30 text-amber-600 border-amber-300",
  Moderate: "bg-muted text-muted-foreground border-border",
};

const severityBar: Record<string, string> = {
  Critical: "bg-vermillion-500",
  High: "bg-amber-500",
  Moderate: "bg-charcoal-400",
};

export default function Ingredients() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="inline-block bg-vermillion-100 text-vermillion-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
          What's Actually In There
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
          Harmful Ingredients Decoded
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Food labels hide a chemical alphabet soup. These are the 10 most
          dangerous ingredients found in everyday junk food — what they are,
          where they hide, and what they do to your body.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {ingredients.map((ing, i) => (
          <motion.div
            key={ing.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{
              delay: i * 0.05,
              duration: 0.5,
              type: "spring",
              stiffness: 280,
            }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
              <div className={`h-1 ${severityBar[ing.severity]}`} />
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="font-display text-lg leading-snug">
                    {ing.name}
                  </CardTitle>
                  <Badge
                    className={`text-xs border flex-shrink-0 ${severityColor[ing.severity]}`}
                  >
                    {ing.severity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ing.description}
                </p>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                    Found In
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {ing.foundIn.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                    Health Effects
                  </p>
                  <ul className="space-y-1.5">
                    {ing.effects.map((effect) => (
                      <motion.li
                        key={effect}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start gap-2 text-xs text-foreground"
                      >
                        <span className="text-vermillion-500 mt-0.5 flex-shrink-0">
                          ▸
                        </span>
                        {effect}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
