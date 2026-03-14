import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  AlertTriangle,
  Brain,
  Droplets,
  Flame,
  Heart,
  Microscope,
  ShieldAlert,
  Smile,
  Wind,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const risks = [
  {
    icon: Activity,
    title: "Obesity",
    severity: "Critical",
    color: "bg-vermillion-500",
    description:
      "Excess calories from junk food cause the body to store fat, particularly around the abdomen. Visceral fat is metabolically active and drives inflammation, increasing risk for virtually every chronic disease.",
    facts: [
      "39% of adults globally are overweight",
      "BMI over 30 triples heart disease risk",
      "Obesity reduces life expectancy by up to 10 years",
    ],
  },
  {
    icon: Droplets,
    title: "Type 2 Diabetes",
    severity: "Critical",
    color: "bg-vermillion-500",
    description:
      "Frequent consumption of high-sugar, high-glycemic foods causes chronic blood sugar spikes, leading to insulin resistance. Over time the pancreas can no longer compensate, resulting in type 2 diabetes.",
    facts: [
      "537 million adults live with diabetes worldwide",
      "Sugary drink consumption raises diabetes risk 26%",
      "Type 2 diabetes was rare before processed food era",
    ],
  },
  {
    icon: Heart,
    title: "Heart Disease",
    severity: "Critical",
    color: "bg-vermillion-500",
    description:
      "Trans fats and excess sodium from junk food raise LDL cholesterol and lower HDL, while promoting arterial inflammation. Atherosclerosis — plaque buildup in arteries — is the leading cause of heart attacks.",
    facts: [
      "Cardiovascular disease kills 17.9 million/year globally",
      "Trans fats increase heart disease risk by 21%",
      "High sodium raises blood pressure within hours",
    ],
  },
  {
    icon: ShieldAlert,
    title: "High Blood Pressure",
    severity: "High",
    color: "bg-amber-500",
    description:
      "Sodium causes the body to retain water, increasing blood volume and arterial pressure. Junk foods are among the top contributors to daily sodium intake, often hiding salt in unexpected amounts.",
    facts: [
      "1 in 3 adults has high blood pressure",
      "A single fast food meal can exceed daily sodium limit",
      "Hypertension is the leading preventable cause of stroke",
    ],
  },
  {
    icon: Smile,
    title: "Dental Decay",
    severity: "High",
    color: "bg-amber-500",
    description:
      "Sugar feeds oral bacteria that produce acids, eroding tooth enamel. Sticky sweets, acidic sodas, and frequent snacking create a constant acid attack on teeth, leading to cavities and gum disease.",
    facts: [
      "Dental caries affects 3.5 billion people worldwide",
      "Soda can reduce tooth enamel pH within minutes",
      "Sugary drinks are the #1 dietary cause of cavities",
    ],
  },
  {
    icon: Brain,
    title: "Mental Health",
    severity: "High",
    color: "bg-amber-500",
    description:
      "Emerging research links ultra-processed food consumption to increased rates of depression and anxiety. The gut-brain axis means poor gut microbiome health — driven by low-fiber junk diets — directly affects mood and cognition.",
    facts: [
      "High junk food intake increases depression risk by 58%",
      "Gut microbiome produces ~90% of the body's serotonin",
      "Mediterranean diet reduces depression risk significantly",
    ],
  },
  {
    icon: Flame,
    title: "Food Addiction",
    severity: "Moderate",
    color: "bg-charcoal-700",
    description:
      'Hyper-palatable foods trigger dopamine release similar to addictive substances. Food scientists deliberately engineer the "bliss point" — the exact combination of sugar, fat, and salt that maximizes craving without satisfaction.',
    facts: [
      "Ultra-processed foods activate the same reward pathways as drugs",
      "Withdrawal symptoms occur when cutting junk food",
      "Food industry spends $14B/year marketing to children",
    ],
  },
  {
    icon: Zap,
    title: "Nutritional Deficiency",
    severity: "Moderate",
    color: "bg-charcoal-700",
    description:
      'Junk foods are calorie-dense but nutrient-poor — sometimes called "empty calories." Frequent consumption crowds out nutrient-rich foods, leading to deficiencies in vitamins, minerals, and fiber critical for health.',
    facts: [
      "2 billion people suffer from micronutrient deficiency",
      "Ultra-processed foods lack fiber, causing gut dysbiosis",
      "Vitamin D and magnesium deficiency are epidemic in junk-food eaters",
    ],
  },
  {
    icon: Activity,
    title: "Non-Alcoholic Fatty Liver Disease",
    severity: "High",
    color: "bg-amber-500",
    description:
      "NAFLD occurs when excess fat accumulates in the liver, driven primarily by high fructose intake from sugary foods and beverages. It now affects 25% of the global population and can progress to cirrhosis and liver failure.",
    facts: [
      "NAFLD affects 1 in 4 adults worldwide",
      "Fructose is converted directly to liver fat, unlike glucose",
      "Cases have doubled in children over the past 20 years",
    ],
  },
  {
    icon: Wind,
    title: "Digestive Issues",
    severity: "Moderate",
    color: "bg-charcoal-700",
    description:
      "Ultra-processed foods are almost completely devoid of dietary fiber, starving the gut microbiome. A disrupted microbiome is linked to IBS, bloating, constipation, and increased intestinal permeability — often called 'leaky gut.'",
    facts: [
      "A typical fast food diet provides under 10g of fiber/day (need: 25–38g)",
      "Gut microbiome diversity drops within 72 hours on a junk food diet",
      "Emulsifiers in processed food damage the gut mucus layer",
    ],
  },
  {
    icon: Microscope,
    title: "Cancer Risk",
    severity: "High",
    color: "bg-amber-500",
    description:
      "The WHO classifies processed meat as a Group 1 carcinogen. Acrylamide in fried and baked foods is a probable carcinogen. Large-scale studies show each 10% increase in ultra-processed food consumption raises overall cancer risk by 12%.",
    facts: [
      "Processed meat is a confirmed carcinogen (WHO Group 1)",
      "Acrylamide is classified as a probable human carcinogen (IARC)",
      "Ultra-processed food linked to 12% higher overall cancer risk per 10% increase in consumption",
    ],
  },
];

const severityColor: Record<string, string> = {
  Critical: "bg-vermillion-100 text-vermillion-700 border-vermillion-200",
  High: "bg-amber-300/30 text-amber-600 border-amber-300",
  Moderate: "bg-muted text-muted-foreground border-border",
};

const food3dImages = [
  {
    src: "/assets/generated/food-3d-burger-transparent.dim_400x400.png",
    alt: "3D Burger",
  },
  {
    src: "/assets/generated/food-3d-fries-transparent.dim_400x400.png",
    alt: "3D Fries",
  },
  {
    src: "/assets/generated/food-3d-soda-transparent.dim_400x400.png",
    alt: "3D Soda",
  },
  {
    src: "/assets/generated/food-3d-pizza-transparent.dim_400x400.png",
    alt: "3D Pizza",
  },
  {
    src: "/assets/generated/food-3d-donut-transparent.dim_400x400.png",
    alt: "3D Donut",
  },
  {
    src: "/assets/generated/food-3d-chips-transparent.dim_400x400.png",
    alt: "3D Chips",
  },
];

export default function HealthRisks() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="inline-block bg-vermillion-100 text-vermillion-600 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-3">
          Health Impacts
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
          The Real Cost of Junk Food
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Every bag of chips, every soda, every drive-through meal compounds
          into systemic damage. Here's the evidence — condition by condition.
        </p>
      </motion.div>

      {/* 3D food image decorative banner — desktop only */}
      <div className="hidden md:flex justify-center gap-8 mb-10">
        {food3dImages.map((img, i) => (
          <motion.img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className="w-20 h-20 object-contain drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, y: -4 }}
            transition={{
              delay: i * 0.08,
              duration: 0.45,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {risks.map((risk, i) => {
          const Icon = risk.icon;
          return (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{
                delay: i * 0.06,
                duration: 0.5,
                type: "spring",
                stiffness: 280,
              }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                        className={`p-2.5 rounded-lg ${risk.color} text-white flex-shrink-0`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <CardTitle className="font-display text-xl">
                        {risk.title}
                      </CardTitle>
                    </div>
                    <Badge
                      className={`text-xs border ${severityColor[risk.severity]} flex-shrink-0`}
                    >
                      {risk.severity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {risk.description}
                  </p>
                  <ul className="space-y-1.5">
                    {risk.facts.map((fact, j) => (
                      <motion.li
                        key={fact}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.06 + j * 0.07,
                          duration: 0.35,
                        }}
                        className="flex items-start gap-2 text-xs text-foreground"
                      >
                        <span className="text-vermillion-500 mt-0.5 flex-shrink-0">
                          ▸
                        </span>
                        {fact}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
