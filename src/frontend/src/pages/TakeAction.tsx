import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Apple,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Globe,
  Heart,
  Megaphone,
  School,
  ShoppingCart,
  Smartphone,
  Utensils,
  Vote,
} from "lucide-react";
import { motion } from "motion/react";

const dailyHabits = [
  {
    icon: Apple,
    title: "Eat Whole Foods First",
    desc: "Fill half your plate with vegetables and whole foods before adding anything processed. Crowding out junk food is easier than eliminating it cold turkey.",
  },
  {
    icon: ShoppingCart,
    title: "Shop the Perimeter",
    desc: "Supermarkets stock fresh produce, meat, and dairy around the edges. The inner aisles are where the ultra-processed products live. Shop accordingly.",
  },
  {
    icon: Utensils,
    title: "Cook One Extra Meal Per Week",
    desc: "Each home-cooked meal replaces one processed one. Start with one extra meal a week and build from there — batch cooking on Sundays makes this effortless.",
  },
  {
    icon: ClipboardList,
    title: "Plan Before You Shop",
    desc: "Impulse buys drive most junk food purchases. A written grocery list created after a meal reduces both spending and processed food intake significantly.",
  },
  {
    icon: Heart,
    title: "Replace One Drink Per Day",
    desc: "Swapping one soda for water or unsweetened tea eliminates up to 25 pounds of sugar from your annual diet. It's one change with outsized impact.",
  },
  {
    icon: BookOpen,
    title: "Read One Ingredient Label",
    desc: "Challenge yourself to read at least one food label per shopping trip. Over time, identifying problematic ingredients becomes second nature.",
  },
];

const labelSteps = [
  {
    step: "01",
    title: "Check Serving Size First",
    detail:
      "All numbers on the label apply to ONE serving. A bag that looks single-serve often contains 2–3 servings. Multiply everything by the number of servings you actually eat.",
  },
  {
    step: "02",
    title: "Look at Added Sugar",
    detail:
      "The WHO recommends under 25g of added sugar per day. Added sugars are listed separately from natural sugars since 2020 FDA updates. Anything over 10g per serving is high.",
  },
  {
    step: "03",
    title: "Count the Ingredients",
    detail:
      "Products with more than 5–7 ingredients are generally ultra-processed. Ingredients are listed by weight — if sugar or oil appears first, that's the dominant component.",
  },
  {
    step: "04",
    title: "Spot the Sodium",
    detail:
      "The daily limit is 2,300mg. A single fast food meal often contains 1,500–2,000mg. Anything over 600mg per serving is considered high sodium by FDA standards.",
  },
  {
    step: "05",
    title: "Decode the Ingredient List",
    detail:
      "Watch for hidden names: sucrose, dextrose, maltose, corn syrup (sugars); partially hydrogenated oil (trans fats); sodium benzoate, BHA, BHT (preservatives); artificial flavors (synthetic chemicals).",
  },
];

const weeklyPlan = [
  {
    week: "Week 1",
    theme: "Awareness",
    goals: [
      "Read ingredient labels on 5 products you eat regularly",
      "Track your added sugar intake for 3 days using a free app",
      "Identify your top 3 junk food triggers (stress, boredom, social)",
    ],
  },
  {
    week: "Week 2",
    theme: "Replacement",
    goals: [
      "Replace all soda with sparkling water or herbal tea",
      "Swap one snack per day with fruit, nuts, or yogurt",
      "Cook at least 3 dinners at home this week",
    ],
  },
  {
    week: "Week 3",
    theme: "Environment",
    goals: [
      "Remove all junk food from visible countertops and desk",
      "Prepare a weekly meal plan and grocery list before shopping",
      "Add one new vegetable to a meal you already enjoy",
    ],
  },
  {
    week: "Week 4",
    theme: "Sustain",
    goals: [
      "Batch cook a healthy lunch for the entire week on Sunday",
      "Eat out only once this week and pre-choose from the menu",
      "Celebrate with a non-food reward — you've built real habits",
    ],
  },
];

const advocacyActions = [
  {
    icon: School,
    title: "Push for Healthier School Meals",
    desc: "Contact your school board or local representative. Many districts can improve lunch programs when parents organize. Model policies from USDA and the Alliance for a Healthier Generation provide templates.",
  },
  {
    icon: Vote,
    title: "Support Local Food Policy",
    desc: "Vote for candidates who support sugar taxes, junk food advertising restrictions, and zoning policies that bring grocery stores to food deserts. Local government has enormous power over the food environment.",
  },
  {
    icon: Smartphone,
    title: "Use Your Social Platform",
    desc: "Share credible nutrition information. Countering the $14 billion/year the food industry spends on marketing starts with community-level education. One honest post can reach hundreds.",
  },
  {
    icon: Globe,
    title: "Support Protective Legislation",
    desc: "Organizations like the Center for Science in the Public Interest and the Environmental Working Group track food safety legislation. Sign petitions, send letters, and support policies that require honest labeling.",
  },
];

export default function TakeAction() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <span className="inline-block bg-vermillion-100 text-vermillion-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
          Your Next Step
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
          Take Action Today
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Knowledge is only the beginning. Here are practical, evidence-based
          steps to reclaim your diet, decode what you eat, and drive systemic
          change — starting today.
        </p>
      </motion.div>

      {/* Section 1: Daily Habits */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Start With Your Plate
          </h2>
          <p className="text-muted-foreground">
            Six actionable daily habits that reduce junk food without requiring
            willpower.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dailyHabits.map((habit, i) => {
            const Icon = habit.icon;
            return (
              <motion.div
                key={habit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                      className="w-10 h-10 rounded-lg bg-vermillion-500 text-white flex items-center justify-center mb-3"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <h3 className="font-display font-bold text-base text-foreground mb-1.5">
                      {habit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {habit.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Read the Label */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Read the Label
          </h2>
          <p className="text-muted-foreground">
            Five steps to decoding any nutrition label in under 60 seconds.
          </p>
        </motion.div>
        <div className="space-y-4">
          {labelSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="flex gap-5 items-start p-5 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-vermillion-500 text-white flex items-center justify-center font-display font-black text-sm">
                {step.step}
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: 30-Day Challenge */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            The 30-Day Challenge
          </h2>
          <p className="text-muted-foreground">
            A week-by-week plan designed to build lasting habits, not temporary
            restrictions.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {weeklyPlan.map((week, i) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{
                delay: i * 0.08,
                duration: 0.4,
                type: "spring",
                stiffness: 300,
              }}
            >
              <Card className="h-full bg-charcoal-900 border-0 text-white hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <p className="text-vermillion-400 text-xs font-bold uppercase tracking-widest">
                    {week.week}
                  </p>
                  <CardTitle className="font-display text-xl text-white">
                    {week.theme}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {week.goals.map((goal, j) => (
                      <motion.li
                        key={goal}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.08 + j * 0.06,
                          duration: 0.3,
                        }}
                        className="flex items-start gap-2 text-sm text-charcoal-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-vermillion-400 flex-shrink-0 mt-0.5" />
                        {goal}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Advocate for Change */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
            Advocate for Change
          </h2>
          <p className="text-muted-foreground">
            Individual choices matter — but systemic change can protect
            everyone, especially children.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {advocacyActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 280,
                }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex gap-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                      className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h3 className="font-display font-bold text-base text-foreground mb-1.5">
                        {action.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {action.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Closing callout */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-vermillion-500 text-white p-8 md:p-12 text-center"
      >
        <Megaphone className="w-10 h-10 mx-auto mb-4 opacity-90" />
        <h2 className="text-3xl font-display font-black mb-3">
          Every Choice Adds Up
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
          You don't have to be perfect. Replacing 20% of ultra-processed food in
          your diet with whole foods can reduce chronic disease risk by over
          30%. Small, consistent changes outperform drastic short-term diets
          every time. Start today — one meal, one label, one conversation.
        </p>
      </motion.div>
    </div>
  );
}
