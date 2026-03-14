import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const swaps = [
  {
    before: {
      emoji: "🥤",
      name: "Soda",
      issue: "65g sugar, 0 nutrients, addictive",
    },
    after: {
      emoji: "💧",
      name: "Sparkling Water + Citrus",
      benefit: "0 sugar, hydrating, refreshing",
    },
    tip: "Add lemon, lime, or cucumber slices to plain sparkling water for a satisfying fizzy drink without any sugar.",
  },
  {
    before: {
      emoji: "🥨",
      name: "Chips & Crisps",
      issue: "Acrylamide, sodium overload, low satiety",
    },
    after: {
      emoji: "🥜",
      name: "Mixed Nuts & Seeds",
      benefit: "Healthy fats, protein, fiber, satisfying",
    },
    tip: "A handful of unsalted almonds, walnuts, and pumpkin seeds satisfies crunch cravings with nutrients that sustain energy.",
  },
  {
    before: {
      emoji: "🍫",
      name: "Candy & Chocolate Bars",
      issue: "Added sugars, artificial dyes, addictive",
    },
    after: {
      emoji: "🍓",
      name: "Fresh Fruit",
      benefit: "Natural sugars, antioxidants, fiber",
    },
    tip: "Berries, melon, and mango satisfy sweet cravings while delivering vitamins and fiber that processed candy never provides.",
  },
  {
    before: {
      emoji: "🍔",
      name: "Fast Food Burger",
      issue: "Trans fats, 1200mg sodium, refined carbs",
    },
    after: {
      emoji: "🥙",
      name: "Homemade Wrap",
      benefit: "Lean protein, whole grains, controlled sodium",
    },
    tip: "Grilled chicken or beans, avocado, salsa, and whole-wheat wrap — faster than the drive-through and under 500 calories.",
  },
  {
    before: {
      emoji: "🍟",
      name: "French Fries",
      issue: "Fried, acrylamide, 500+ calories",
    },
    after: {
      emoji: "🥕",
      name: "Baked Sweet Potato Fries",
      benefit: "Vitamin A, fiber, low fat when baked",
    },
    tip: "Slice sweet potatoes thin, toss with olive oil and smoked paprika, bake at 425°F for 25 minutes — crispy and delicious.",
  },
  {
    before: {
      emoji: "🥐",
      name: "Donuts & Pastries",
      issue: "Trans fats, sugar spike, refined flour",
    },
    after: {
      emoji: "🫐",
      name: "Overnight Oats",
      benefit: "Whole grains, slow energy release, fiber",
    },
    tip: "Oats, chia seeds, milk or plant milk, and blueberries prepared overnight — grab it in the morning with no cooking needed.",
  },
  {
    before: {
      emoji: "🍕",
      name: "Delivery Pizza",
      issue: "Saturated fat, processed meat, excess sodium",
    },
    after: {
      emoji: "🫓",
      name: "Whole Grain Flatbread Pizza",
      benefit: "Fiber, controlled portions, fresh toppings",
    },
    tip: "Whole grain pita, tomato sauce, mozzarella, spinach, and mushrooms — ready in 10 minutes and far lower in sodium.",
  },
  {
    before: {
      emoji: "🍪",
      name: "Packaged Cookies",
      issue: "Artificial colors, preservatives, palm oil",
    },
    after: {
      emoji: "🍌",
      name: "Banana Nice Cream",
      benefit: "Potassium, no added sugar, natural sweetness",
    },
    tip: "Freeze ripe bananas and blend them — the result is a creamy, ice-cream-like dessert with zero added sugar.",
  },
];

const tips = [
  "Read the ingredients list — if you can't pronounce it, reconsider",
  "Cook one batch meal per week to reduce reliance on fast food",
  "Keep fruit and nuts visible on the counter (proximity = consumption)",
  "Drink water before meals to reduce overeating by up to 13%",
  "Never shop hungry — it leads to 50% more impulse junk food purchases",
  "Replace soda with sparkling water as a first step — it's the easiest swap",
];

export default function HealthySwaps() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="inline-block bg-vermillion-100 text-vermillion-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
          Better Choices
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
          Smart Swaps That Actually Taste Good
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Healthy eating isn't about deprivation — it's about finding equally
          satisfying alternatives that work with your body instead of against
          it.
        </p>
      </motion.div>

      <div className="space-y-5 mb-16">
        {swaps.map((swap, i) => (
          <motion.div
            key={swap.before.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Before */}
              <div className="flex-1 flex items-start gap-3 bg-vermillion-50 rounded-lg p-3 min-w-0">
                <span className="text-3xl flex-shrink-0">
                  {swap.before.emoji}
                </span>
                <div className="min-w-0">
                  <p className="font-display font-bold text-foreground text-sm">
                    {swap.before.name}
                  </p>
                  <p className="text-xs text-vermillion-600 leading-snug">
                    {swap.before.issue}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 hidden sm:block">
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-6 h-6 text-vermillion-500" />
                </motion.div>
              </div>
              <div className="flex-shrink-0 sm:hidden text-vermillion-500 text-lg font-bold self-center">
                ↓
              </div>

              {/* After */}
              <div className="flex-1 flex items-start gap-3 bg-green-50 rounded-lg p-3 min-w-0">
                <span className="text-3xl flex-shrink-0">
                  {swap.after.emoji}
                </span>
                <div className="min-w-0">
                  <p className="font-display font-bold text-foreground text-sm">
                    {swap.after.name}
                  </p>
                  <p className="text-xs text-green-700 leading-snug">
                    {swap.after.benefit}
                  </p>
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                <span className="font-semibold text-foreground not-italic">
                  💡 How to do it:{" "}
                </span>
                {swap.tip}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* General tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-charcoal-900 text-white rounded-2xl p-8"
      >
        <h2 className="text-2xl font-display font-bold mb-6 text-white">
          6 Quick Wins to Start Today
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {tips.map((tip) => (
            <motion.div
              key={tip}
              whileHover={{ backgroundColor: "oklch(96% 0.01 75)" }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-3 rounded-lg p-2"
            >
              <CheckCircle className="w-4 h-4 text-vermillion-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-charcoal-100 leading-snug">{tip}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
