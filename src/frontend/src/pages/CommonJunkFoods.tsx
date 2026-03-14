import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";

interface JunkFood {
  emoji: string;
  image: string;
  name: string;
  calories: string;
  problems: string[];
  detail: string;
  tags: string[];
}

const junkFoods: JunkFood[] = [
  {
    emoji: "🍔",
    image: "/assets/generated/food-3d-burger-transparent.dim_400x400.png",
    name: "Fast Food Burger",
    calories: "550–900",
    problems: ["Trans fats", "Excess sodium", "Refined carbs", "Added sugars"],
    detail:
      "A typical fast food double cheeseburger packs over 700 calories, 1,200mg of sodium (over half the daily limit), and refined buns that spike blood sugar rapidly.",
    tags: ["High Sodium", "Trans Fats", "Refined Carbs"],
  },
  {
    emoji: "🍟",
    image: "/assets/generated/food-3d-fries-transparent.dim_400x400.png",
    name: "French Fries",
    calories: "340–500",
    problems: ["Acrylamide", "Saturated fat", "High glycemic", "Excess salt"],
    detail:
      "Deep-fried in partially hydrogenated oils and heavily salted, fries also produce acrylamide — a potential carcinogen — when starchy foods are cooked at high temperatures.",
    tags: ["Fried", "High GI", "Carcinogen Risk"],
  },
  {
    emoji: "🥤",
    image: "/assets/generated/food-3d-soda-transparent.dim_400x400.png",
    name: "Soda & Energy Drinks",
    calories: "140–300",
    problems: [
      "Liquid sugar",
      "Phosphoric acid",
      "Caffeine overload",
      "Zero nutrition",
    ],
    detail:
      "A 20oz soda contains 65g of sugar — over 2.5 times the WHO daily limit. Phosphoric acid erodes tooth enamel, while high-fructose corn syrup bypasses satiety signals.",
    tags: ["Liquid Sugar", "Tooth Decay", "Empty Calories"],
  },
  {
    emoji: "🍕",
    image: "/assets/generated/food-3d-pizza-transparent.dim_400x400.png",
    name: "Pizza",
    calories: "250–400 per slice",
    problems: [
      "Saturated fat",
      "Refined flour",
      "Processed meat",
      "Excess cheese",
    ],
    detail:
      "Commercial pizza layers processed meat, refined flour crust, high-fat cheese, and sugary sauce. Two slices can easily exceed half a day's sodium and saturated fat.",
    tags: ["Saturated Fat", "High Sodium", "Processed Meat"],
  },
  {
    emoji: "🍪",
    image: "/assets/generated/food-3d-cookie-transparent.dim_400x400.png",
    name: "Cookies & Candy",
    calories: "150–400",
    problems: ["Added sugar", "Artificial colors", "Trans fats", "Addiction"],
    detail:
      'Engineered for the "bliss point," cookies and candy combine sugar, fat, and artificial flavors to trigger dopamine release. Artificial food dyes are linked to behavioral issues in children.',
    tags: ["Added Sugar", "Artificial Dyes", "Addictive"],
  },
  {
    emoji: "🥐",
    image: "/assets/generated/food-3d-donut-transparent.dim_400x400.png",
    name: "Donuts & Pastries",
    calories: "250–500",
    problems: ["Trans fats", "Sugar rush", "Refined flour", "Empty calories"],
    detail:
      "Fried donuts absorb substantial oil and are glazed with sugar. The combination of refined flour, frying fat, and sugar causes a rapid glucose spike followed by an energy crash.",
    tags: ["Fried", "Sugar Spike", "Trans Fats"],
  },
  {
    emoji: "🍫",
    image:
      "/assets/generated/food-3d-chocolate-bar-transparent.dim_400x400.png",
    name: "Chocolate Bars",
    calories: "200–350",
    problems: ["High sugar", "Palm oil", "Artificial flavors", "Emulsifiers"],
    detail:
      "Commercial chocolate bars contain far more sugar and fat than cocoa. Many use palm oil instead of cocoa butter, and emulsifiers like soy lecithin to maintain texture cheaply.",
    tags: ["High Sugar", "Palm Oil", "Additives"],
  },
  {
    emoji: "🥨",
    image: "/assets/generated/food-3d-chips-transparent.dim_400x400.png",
    name: "Chips & Crisps",
    calories: "150–280",
    problems: [
      "Acrylamide",
      "Sodium overload",
      "Addictive seasoning",
      "Low satiety",
    ],
    detail:
      "Potato chips are nutritionally designed for snacking without satisfaction — the crunch, fat, and salt hit the brain's reward center while the low fiber means you keep eating.",
    tags: ["High Sodium", "Low Satiety", "Addictive"],
  },
  {
    emoji: "🍜",
    image: "/assets/generated/food-3d-noodles-transparent.dim_400x400.png",
    name: "Instant Noodles",
    calories: "380–450",
    problems: ["Extreme sodium", "MSG", "Refined flour", "Synthetic flavoring"],
    detail:
      "A single packet of instant noodles can contain up to 1,800mg of sodium — nearly 80% of the daily limit — along with refined carbohydrates and synthetic flavoring agents with no nutritional value.",
    tags: ["High Sodium", "Additives", "Refined Carbs"],
  },
  {
    emoji: "🍦",
    image: "/assets/generated/food-3d-icecream-transparent.dim_400x400.png",
    name: "Ice Cream",
    calories: "200–400",
    problems: [
      "Added sugar",
      "Saturated fat",
      "Artificial flavors",
      "Emulsifiers",
    ],
    detail:
      "Commercial ice cream packs sugar, saturated fat, and a roster of artificial flavors and emulsifiers into every scoop. Premium brands average 24g of sugar per half-cup serving.",
    tags: ["High Sugar", "Saturated Fat", "Additives"],
  },
  {
    emoji: "🌭",
    image: "/assets/generated/food-3d-hotdog-transparent.dim_400x400.png",
    name: "Hot Dogs",
    calories: "150–300",
    problems: [
      "Sodium nitrate",
      "Processed meat",
      "High sodium",
      "Saturated fat",
    ],
    detail:
      "Hot dogs are classified by the WHO as Group 1 carcinogens due to sodium nitrate used in curing. A single hot dog contains up to 600mg of sodium and significant saturated fat from mechanically separated meat.",
    tags: ["Processed Meat", "Carcinogen Risk", "High Sodium"],
  },
  {
    emoji: "🥣",
    image: "/assets/generated/food-3d-cereal-transparent.dim_400x400.png",
    name: "Breakfast Cereals",
    calories: "110–250",
    problems: [
      "Added sugar",
      "Refined grains",
      "Artificial dyes",
      "Low protein",
    ],
    detail:
      "Despite health-food marketing, most breakfast cereals are 30–40% sugar by weight, made from refined grains stripped of fiber and nutrients. Brightly-colored varieties add petroleum-derived artificial dyes.",
    tags: ["High Sugar", "Artificial Dyes", "Refined Carbs"],
  },
];

const tagColors: Record<string, string> = {
  "Trans Fats": "bg-vermillion-100 text-vermillion-700",
  "High Sodium": "bg-amber-300/40 text-amber-700",
  "Refined Carbs": "bg-amber-300/40 text-amber-700",
  "Added Sugar": "bg-vermillion-100 text-vermillion-700",
  Fried: "bg-vermillion-100 text-vermillion-700",
  "High GI": "bg-amber-300/40 text-amber-700",
  "Carcinogen Risk": "bg-vermillion-100 text-vermillion-700",
  "Liquid Sugar": "bg-vermillion-100 text-vermillion-700",
  "Tooth Decay": "bg-amber-300/40 text-amber-700",
  "Empty Calories": "bg-muted text-muted-foreground",
  "Saturated Fat": "bg-amber-300/40 text-amber-700",
  "Processed Meat": "bg-vermillion-100 text-vermillion-700",
  "Artificial Dyes": "bg-vermillion-100 text-vermillion-700",
  Addictive: "bg-vermillion-100 text-vermillion-700",
  "Sugar Spike": "bg-amber-300/40 text-amber-700",
  "High Sugar": "bg-vermillion-100 text-vermillion-700",
  "Palm Oil": "bg-muted text-muted-foreground",
  Additives: "bg-muted text-muted-foreground",
  "Low Satiety": "bg-amber-300/40 text-amber-700",
};

export default function CommonJunkFoods() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="inline-block bg-vermillion-100 text-vermillion-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
          What's Really Inside
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
          Common Junk Foods, Unmasked
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          The foods we reach for most often are often the most processed and
          least nourishing. Here's what the science says about the staples of
          modern snacking.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {junkFoods.map((food, i) => (
          <motion.div
            key={food.name}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, rotate: 0.5 }}
            transition={{
              delay: i * 0.06,
              duration: 0.4,
              type: "spring",
              stiffness: 300,
            }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow group">
              <CardHeader className="pb-2">
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="mb-2 w-fit"
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-20 h-20 object-contain drop-shadow-lg"
                  />
                </motion.div>
                <CardTitle className="font-display text-lg">
                  {food.name}
                </CardTitle>
                <p className="text-xs text-muted-foreground font-medium">
                  {food.calories} cal/serving
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {food.detail}
                </p>
                <div className="mb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1.5">
                    Key Problems
                  </p>
                  <ul className="space-y-1">
                    {food.problems.map((p) => (
                      <li
                        key={p}
                        className="text-xs text-foreground flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-vermillion-500 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-1">
                  {food.tags.map((tag, tagIndex) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.06 + tagIndex * 0.05,
                        duration: 0.3,
                      }}
                    >
                      <Badge
                        className={`text-xs px-2 py-0.5 border-0 rounded-full font-medium ${
                          tagColors[tag] ?? "bg-muted text-muted-foreground"
                        }`}
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
