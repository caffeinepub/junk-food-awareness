import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

const bigStats = [
  {
    value: "2 Billion",
    label: "People are overweight or obese globally",
    source: "WHO, 2023",
  },
  {
    value: "60%+",
    label: "Of the average American diet is ultra-processed food",
    source: "NOVA Classification Study",
  },
  {
    value: "$147B",
    label: "Annual US medical costs attributable to obesity",
    source: "CDC, 2023",
  },
  {
    value: "11 Million",
    label: "Premature deaths per year linked to poor diet",
    source: "Global Burden of Disease, 2019",
  },
  {
    value: "$292B",
    label: "Global junk food industry revenue in 2023",
    source: "Statista, 2023",
  },
  {
    value: "500%",
    label: "Increase in obesity rates since 1975",
    source: "WHO",
  },
  {
    value: "75%",
    label:
      "Of US healthcare costs are from preventable diet-related chronic diseases",
    source: "CDC, 2022",
  },
  {
    value: "400M+",
    label: "Children and adolescents classified as overweight or obese",
    source: "WHO, 2023",
  },
  {
    value: "34%",
    label: "Of US adults have pre-diabetes, often driven by diet",
    source: "CDC, 2023",
  },
];

const categories = [
  {
    title: "Obesity & Weight",
    stats: [
      { label: "Adults overweight worldwide", value: "39%" },
      { label: "Adults obese worldwide", value: "13%" },
      { label: "US obesity rate (adults)", value: "41.9%" },
      { label: "Children classified as obese globally", value: "340 million" },
      {
        label: "Countries where obesity exceeds undernutrition",
        value: "Most nations",
      },
    ],
  },
  {
    title: "Sugar Consumption",
    stats: [
      { label: "Average American sugar intake (daily)", value: "77g" },
      { label: "WHO recommended max daily sugar", value: "25g" },
      { label: "Teaspoons of sugar in a 20oz soda", value: "16 tsp" },
      { label: "% of added sugars from beverages (US)", value: "47%" },
      { label: "Children's cereal average sugar content", value: "34%" },
    ],
  },
  {
    title: "Marketing to Children",
    stats: [
      {
        label: "Food industry spending on child-targeted ads",
        value: "$14 billion/year",
      },
      { label: "Junk food ads seen by US children daily", value: "12–20" },
      {
        label: "% of food ads during kids' TV that are junk food",
        value: "98%",
      },
      { label: "Age kids form brand loyalty", value: "As early as 2" },
      {
        label: "% of marketed foods meeting nutrition standards",
        value: "Under 15%",
      },
    ],
  },
  {
    title: "Healthcare Impact",
    stats: [
      {
        label: "Global cost of diet-related disease",
        value: "$2 trillion/year",
      },
      {
        label: "Portion of US healthcare costs from chronic diet diseases",
        value: "75%",
      },
      {
        label: "Annual cost of type 2 diabetes in the US",
        value: "$327 billion",
      },
      {
        label: "Preventable deaths from poor nutrition (US)",
        value: "678,000/year",
      },
      {
        label: "Return on investment for nutrition programs",
        value: "$16 per $1 spent",
      },
    ],
  },
];

const timeline = [
  {
    year: "1950s",
    event: "Fast food chains begin mass expansion across the US",
  },
  {
    year: "1970s",
    event:
      "High-fructose corn syrup introduced to replace cane sugar in food products",
  },
  {
    year: "1980s",
    event: "Obesity rates begin significant rise in the US and UK",
  },
  {
    year: "1990s",
    event: "Super-size portions become standard; soda cup sizes grow 50%",
  },
  {
    year: "2000s",
    event:
      "WHO declares obesity a global epidemic; 300 million adults affected",
  },
  {
    year: "2010s",
    event:
      "Ultra-processed food consumption surpasses 60% in developed nations",
  },
  {
    year: "2023",
    event:
      "2 billion adults overweight; diet-related disease now the leading cause of death",
  },
  {
    year: "2024",
    event:
      "GLP-1 drugs (Ozempic/Wegovy) surpass $10B in sales as diet-disease crisis deepens; WHO calls for global ultra-processed food regulation",
  },
];

export default function FactsStats() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="inline-block bg-vermillion-100 text-vermillion-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
          The Numbers
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
          Facts That Demand Attention
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Behind every statistic is a human being affected by preventable
          disease. These numbers tell the story of the global junk food
          epidemic.
        </p>
      </motion.div>

      {/* Big stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        {bigStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
              type: "spring",
              stiffness: 280,
            }}
          >
            <Card className="bg-charcoal-900 border-0 text-white h-full">
              <CardContent className="p-5">
                <p className="text-3xl md:text-4xl font-display font-black text-vermillion-400 leading-none mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-charcoal-100 leading-snug mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-charcoal-100/60 italic">
                  {stat.source}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Category breakdowns */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="font-display text-xl">
                  {cat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {cat.stats.map((s, j) => (
                    <div key={s.label}>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground flex-1">
                          {s.label}
                        </p>
                        <p className="text-sm font-bold text-foreground flex-shrink-0">
                          {s.value}
                        </p>
                      </div>
                      {j < cat.stats.length - 1 && (
                        <Separator className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-display font-bold text-foreground mb-6">
          The Junk Food Timeline
        </h2>
        <div className="space-y-0 relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden sm:block" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex gap-4 sm:gap-6 items-start pb-5"
            >
              <div className="flex-shrink-0 w-14 sm:w-16">
                <span className="text-xs font-bold text-vermillion-500 bg-vermillion-50 px-2 py-1 rounded">
                  {t.year}
                </span>
              </div>
              <motion.div
                whileInView={{ scale: [0, 1.4, 1] }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.1, duration: 0.4 }}
                className="hidden sm:block w-3 h-3 rounded-full bg-vermillion-500 mt-1.5 flex-shrink-0 relative z-10"
              />
              <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">
                {t.event}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
