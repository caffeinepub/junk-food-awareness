import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const stats = [
  { value: "1 in 3", label: "Adults worldwide are obese", icon: Users },
  {
    value: "11M",
    label: "Deaths per year linked to poor diet",
    icon: TrendingUp,
  },
  {
    value: "$147B",
    label: "Annual cost of obesity in the US alone",
    icon: Zap,
  },
  { value: "65%", label: "Of children consume junk food daily", icon: Users },
];

const highlights = [
  {
    title: "Health Risks",
    desc: "Obesity, diabetes, heart disease and more — the toll junk food takes on your body.",
    to: "/health-risks",
    ocid: "home.health-risks.link",
  },
  {
    title: "Common Junk Foods",
    desc: "A closer look at burgers, fries, soda, chips — what's really inside your favorite snacks.",
    to: "/common-junk-foods",
    ocid: "home.junk-foods.link",
  },
  {
    title: "Healthy Swaps",
    desc: "Simple, delicious alternatives that don't sacrifice flavor or satisfaction.",
    to: "/healthy-swaps",
    ocid: "home.healthy-swaps.link",
  },
  {
    title: "Facts & Statistics",
    desc: "The numbers behind the global junk food epidemic — data that demands action.",
    to: "/facts-stats",
    ocid: "home.facts-stats.link",
  },
  {
    title: "Ingredients",
    desc: "Decode food labels: the 10 most harmful chemicals hiding in everyday products.",
    to: "/ingredients",
    ocid: "home.ingredients.link",
  },
  {
    title: "Take Action",
    desc: "Practical steps, a 30-day challenge, and ways to advocate for healthier communities.",
    to: "/take-action",
    ocid: "home.take-action.link",
  },
];

const didYouKnowFacts = [
  "The average American eats 17 teaspoons of added sugar per day — nearly 3x the recommended limit.",
  "Junk food companies spend $2 million every hour marketing their products worldwide.",
  "Ultra-processed foods are engineered so precisely that you can eat past fullness without realizing it.",
  "Children who eat fast food 3+ times per week are 50% more likely to develop asthma.",
  "Replacing just one daily soda with water can reduce your annual sugar intake by 25 pounds.",
];

const heroWords = ["Know", "What"];
const heroWords2 = ["You", "Eat."];

const floatingFoods = [
  {
    src: "/assets/generated/food-3d-burger-transparent.dim_400x400.png",
    alt: "3D Burger",
    style: { top: "10%", right: "22%" },
    duration: 5,
    delay: 0,
    size: "w-36",
  },
  {
    src: "/assets/generated/food-3d-fries-transparent.dim_400x400.png",
    alt: "3D Fries",
    style: { top: "50%", right: "8%" },
    duration: 4,
    delay: 0.8,
    size: "w-28",
  },
  {
    src: "/assets/generated/food-3d-soda-transparent.dim_400x400.png",
    alt: "3D Soda",
    style: { top: "15%", right: "5%" },
    duration: 6,
    delay: 1.6,
    size: "w-24",
  },
  {
    src: "/assets/generated/food-3d-donut-transparent.dim_400x400.png",
    alt: "3D Donut",
    style: { bottom: "8%", right: "18%" },
    duration: 4.5,
    delay: 0.4,
    size: "w-28",
  },
];

export default function Home() {
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % didYouKnowFacts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[420px] md:min-h-[520px] flex items-center overflow-hidden">
        <img
          src="/assets/generated/hero-junkfood.dim_1200x500.jpg"
          alt="Array of junk food"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Floating 3D food images — desktop only */}
        {floatingFoods.map((food) => (
          <motion.img
            key={food.alt}
            src={food.src}
            alt={food.alt}
            className={`hidden md:block absolute ${food.size} drop-shadow-2xl pointer-events-none select-none`}
            style={food.style}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: food.duration,
              delay: food.delay,
              ease: "easeInOut",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Floating badge */}
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
              className="inline-block bg-vermillion-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4"
            >
              Public Health Awareness
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-4">
              <span className="block">
                {heroWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.15,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block text-amber-400">
                {heroWords2.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.6 + i * 0.15,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-base md:text-lg text-white/85 mb-8 leading-relaxed"
            >
              Junk food is engineered to be irresistible — but the hidden cost
              is devastating. Explore the science, the statistics, and the
              simple steps toward a healthier life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                asChild
                size="lg"
                className="bg-vermillion-500 hover:bg-vermillion-600 text-white font-bold shadow-lg"
                data-ocid="home.explore.primary_button"
              >
                <Link to="/health-risks">
                  Explore Health Risks <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 bg-transparent font-bold"
                data-ocid="home.stats.secondary_button"
              >
                <Link to="/facts-stats">See the Stats</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-charcoal-900 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center cursor-default"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-vermillion-400 stat-pulse">
                  {stat.value}
                </p>
                <p className="text-xs text-charcoal-100 mt-1 leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            The Junk Food Problem Is Bigger Than You Think
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            Ultra-processed foods now make up over 60% of the average American
            diet. These products are deliberately designed — with precise
            combinations of sugar, fat, and salt — to override the brain's
            natural satiety signals.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            The consequences extend far beyond weight gain: chronic
            inflammation, addiction-like eating patterns, metabolic disease, and
            mental health disorders. Understanding the problem is the first step
            toward change.
          </p>
        </div>
      </section>

      {/* Did You Know */}
      <section className="bg-charcoal-900 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-xs font-bold uppercase tracking-widest text-vermillion-400 mb-6"
          >
            Did You Know?
          </motion.p>
          <div className="relative h-28 sm:h-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={factIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center px-4"
              >
                <p className="text-white text-base sm:text-lg md:text-xl font-medium text-center leading-snug">
                  {didYouKnowFacts[factIndex]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {didYouKnowFacts.map((fact, i) => (
              <button
                key={fact}
                type="button"
                onClick={() => setFactIndex(i)}
                data-ocid="home.fact.toggle"
                aria-label={`Show fact ${i + 1}`}
                className={
                  i === factIndex
                    ? "w-2 h-2 rounded-full transition-all duration-300 bg-vermillion-400 scale-125"
                    : "w-2 h-2 rounded-full transition-all duration-300 bg-charcoal-500 hover:bg-charcoal-400"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Highlight cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-display font-bold text-foreground mb-8">
          Explore the Guide
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 32px oklch(0% 0 0 / 0.12)",
              }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                type: "spring",
                stiffness: 300,
              }}
            >
              <Card className="group h-full border-border">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {h.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                    {h.desc}
                  </p>
                  <Link
                    to={h.to}
                    data-ocid={h.ocid}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-vermillion-500 hover:text-vermillion-600 transition-colors"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
