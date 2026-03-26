import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type BMICategory = "underweight" | "normal" | "overweight" | "obese";

interface BMIResult {
  bmi: number;
  category: BMICategory;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  position: number; // 0–100 on scale
  message: string;
}

interface CalorieResult {
  tdee: number;
  bmr: number;
  breakdown: { name: string; calories: number; emoji: string }[];
}

const JUNK_FOODS = [
  { name: "Large McDonald's Fries", calories: 490, emoji: "🍟" },
  { name: "Big Mac", calories: 563, emoji: "🍔" },
  { name: "Slice of Pepperoni Pizza", calories: 298, emoji: "🍕" },
  { name: "Can of Coca-Cola (355ml)", calories: 140, emoji: "🥤" },
  { name: "Krispy Kreme Glazed Donut", calories: 190, emoji: "🍩" },
  { name: "Bag of Lay's Chips (1oz)", calories: 160, emoji: "🧀" },
];

function getBMICategory(bmi: number): BMIResult {
  if (bmi < 18.5) {
    return {
      bmi,
      category: "underweight",
      label: "Underweight",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      position: Math.max(2, ((bmi - 10) / 8.5) * 20),
      message:
        "Junk food is calorie-dense but nutrient-poor — gaining weight healthily means choosing whole foods, not ultra-processed ones.",
    };
  }
  if (bmi < 25) {
    return {
      bmi,
      category: "normal",
      label: "Normal Weight",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-300",
      position: 20 + ((bmi - 18.5) / 6.4) * 30,
      message:
        "Great range! Regular junk food consumption can still erode this over time. Even a daily soda adds ~51,000 empty calories per year.",
    };
  }
  if (bmi < 30) {
    return {
      bmi,
      category: "overweight",
      label: "Overweight",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      position: 50 + ((bmi - 25) / 5) * 25,
      message:
        "Ultra-processed foods are engineered to override satiety signals. Cutting junk food is the single highest-leverage dietary change you can make.",
    };
  }
  return {
    bmi,
    category: "obese",
    label: "Obese",
    color: "text-vermillion-600",
    bgColor: "bg-vermillion-50",
    borderColor: "border-vermillion-400",
    position: Math.min(97, 75 + ((bmi - 30) / 10) * 22),
    message:
      "Obesity is strongly linked to ultra-processed food intake. Studies show reducing UPF consumption by 20% can improve metabolic markers within 8 weeks.",
  };
}

function calculateBMI(
  unit: string,
  weightKg: number,
  heightCm: number,
  weightLbs: number,
  heightFt: number,
  heightIn: number,
): BMIResult | null {
  let bmi: number;
  if (unit === "metric") {
    if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) return null;
    const heightM = heightCm / 100;
    bmi = weightKg / (heightM * heightM);
  } else {
    if (!weightLbs || !heightFt || weightLbs <= 0 || heightFt < 0) return null;
    const totalInches = heightFt * 12 + (heightIn || 0);
    if (totalInches <= 0) return null;
    bmi = (weightLbs / (totalInches * totalInches)) * 703;
  }
  return getBMICategory(Math.round(bmi * 10) / 10);
}

function calculateCalories(
  age: number,
  sex: string,
  weightKg: number,
  heightCm: number,
  activity: string,
): CalorieResult | null {
  if (!age || !sex || !weightKg || !heightCm || !activity) return null;
  if (age <= 0 || weightKg <= 0 || heightCm <= 0) return null;

  // Mifflin-St Jeor
  let bmr: number;
  if (sex === "male") {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  const multipliers: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725,
    super: 1.9,
  };
  const tdee = Math.round(bmr * (multipliers[activity] ?? 1.2));

  const breakdown = JUNK_FOODS.slice(0, 4).map((f) => ({ ...f }));
  return { tdee, bmr: Math.round(bmr), breakdown };
}

export default function Calculator() {
  // BMI state
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weightKg, setWeightKg] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [bmiResult, setBmiResult] = useState<BMIResult | null>(null);
  const [bmiError, setBmiError] = useState("");

  // Calorie state
  const [calAge, setCalAge] = useState("");
  const [calSex, setCalSex] = useState("");
  const [calWeight, setCalWeight] = useState("");
  const [calHeight, setCalHeight] = useState("");
  const [calActivity, setCalActivity] = useState("");
  const [calResult, setCalResult] = useState<CalorieResult | null>(null);
  const [calError, setCalError] = useState("");

  function handleBmiCalculate() {
    setBmiError("");
    const result = calculateBMI(
      unit,
      Number.parseFloat(weightKg),
      Number.parseFloat(heightCm),
      Number.parseFloat(weightLbs),
      Number.parseFloat(heightFt),
      Number.parseFloat(heightIn),
    );
    if (!result) {
      setBmiError("Please fill in all fields with valid values.");
      return;
    }
    setBmiResult(result);
  }

  function handleCalorieCalculate() {
    setCalError("");
    const result = calculateCalories(
      Number.parseFloat(calAge),
      calSex,
      Number.parseFloat(calWeight),
      Number.parseFloat(calHeight),
      calActivity,
    );
    if (!result) {
      setCalError("Please fill in all fields with valid values.");
      return;
    }
    setCalResult(result);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 via-background to-vermillion-50">
      {/* Hero */}
      <section className="bg-charcoal-900 text-white py-14 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-6 left-10 text-6xl">🧮</div>
          <div className="absolute top-4 right-16 text-5xl">📊</div>
          <div className="absolute bottom-4 left-1/3 text-4xl">⚖️</div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-vermillion-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Interactive Tool
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
              Health Calculators
            </h1>
            <p className="text-charcoal-100 text-lg max-w-xl mx-auto">
              Understand your body — then see exactly how junk food eats into
              your daily health budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <Tabs defaultValue="bmi">
          <TabsList className="w-full mb-8 bg-charcoal-900 p-1 rounded-xl h-auto">
            <TabsTrigger
              value="bmi"
              data-ocid="calculator.bmi.tab"
              className="flex-1 py-2.5 text-charcoal-100 data-[state=active]:bg-vermillion-500 data-[state=active]:text-white rounded-lg font-semibold transition-all"
            >
              ⚖️ BMI Calculator
            </TabsTrigger>
            <TabsTrigger
              value="calorie"
              data-ocid="calculator.calorie.tab"
              className="flex-1 py-2.5 text-charcoal-100 data-[state=active]:bg-vermillion-500 data-[state=active]:text-white rounded-lg font-semibold transition-all"
            >
              🔥 Calorie Calculator
            </TabsTrigger>
          </TabsList>

          {/* ── BMI TAB ── */}
          <TabsContent value="bmi">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-2 border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">
                    Body Mass Index
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    BMI is a screening tool. It doesn't measure body fat
                    directly but is a useful starting point.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Unit toggle */}
                  <div>
                    <Label className="mb-2 block font-semibold">
                      Unit System
                    </Label>
                    <ToggleGroup
                      type="single"
                      value={unit}
                      onValueChange={(v) => {
                        if (v) setUnit(v as "metric" | "imperial");
                        setBmiResult(null);
                      }}
                      data-ocid="calculator.unit.toggle"
                      className="w-full grid grid-cols-2 gap-2"
                    >
                      <ToggleGroupItem
                        value="metric"
                        className="border border-border data-[state=on]:bg-vermillion-500 data-[state=on]:text-white data-[state=on]:border-vermillion-500"
                      >
                        Metric (kg / cm)
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="imperial"
                        className="border border-border data-[state=on]:bg-vermillion-500 data-[state=on]:text-white data-[state=on]:border-vermillion-500"
                      >
                        Imperial (lbs / ft)
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <AnimatePresence mode="wait">
                    {unit === "metric" ? (
                      <motion.div
                        key="metric"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div className="space-y-1.5">
                          <Label htmlFor="height-cm">Height (cm)</Label>
                          <Input
                            id="height-cm"
                            type="number"
                            placeholder="e.g. 175"
                            value={heightCm}
                            onChange={(e) => setHeightCm(e.target.value)}
                            data-ocid="calculator.height.input"
                            min="50"
                            max="300"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="weight-kg">Weight (kg)</Label>
                          <Input
                            id="weight-kg"
                            type="number"
                            placeholder="e.g. 70"
                            value={weightKg}
                            onChange={(e) => setWeightKg(e.target.value)}
                            data-ocid="calculator.weight.input"
                            min="10"
                            max="500"
                          />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="imperial"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-3 gap-4"
                      >
                        <div className="space-y-1.5">
                          <Label htmlFor="height-ft">Feet</Label>
                          <Input
                            id="height-ft"
                            type="number"
                            placeholder="5"
                            value={heightFt}
                            onChange={(e) => setHeightFt(e.target.value)}
                            data-ocid="calculator.height.input"
                            min="1"
                            max="9"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="height-in">Inches</Label>
                          <Input
                            id="height-in"
                            type="number"
                            placeholder="10"
                            value={heightIn}
                            onChange={(e) => setHeightIn(e.target.value)}
                            min="0"
                            max="11"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="weight-lbs">Weight (lbs)</Label>
                          <Input
                            id="weight-lbs"
                            type="number"
                            placeholder="155"
                            value={weightLbs}
                            onChange={(e) => setWeightLbs(e.target.value)}
                            data-ocid="calculator.weight.input"
                            min="20"
                            max="1000"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {bmiError && (
                    <p className="text-vermillion-500 text-sm font-medium">
                      {bmiError}
                    </p>
                  )}

                  <Button
                    onClick={handleBmiCalculate}
                    data-ocid="calculator.bmi.submit_button"
                    className="w-full bg-vermillion-500 hover:bg-vermillion-600 text-white font-bold text-base py-5"
                  >
                    Calculate BMI
                  </Button>

                  {/* BMI Result */}
                  <AnimatePresence>
                    {bmiResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.45,
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                        data-ocid="calculator.bmi.success_state"
                        className={`rounded-xl border-2 ${bmiResult.borderColor} ${bmiResult.bgColor} p-5 space-y-4`}
                      >
                        {/* Number + badge */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                              Your BMI
                            </p>
                            <p
                              className={`font-display text-5xl font-bold ${bmiResult.color}`}
                            >
                              {bmiResult.bmi}
                            </p>
                          </div>
                          <Badge
                            className={`text-sm px-4 py-1.5 font-bold bounce-in ${
                              bmiResult.category === "obese"
                                ? "bg-vermillion-500 text-white"
                                : bmiResult.category === "overweight"
                                  ? "bg-amber-500 text-white"
                                  : bmiResult.category === "normal"
                                    ? "bg-emerald-500 text-white"
                                    : "bg-blue-500 text-white"
                            }`}
                          >
                            {bmiResult.label}
                          </Badge>
                        </div>

                        {/* Scale bar */}
                        <div>
                          <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 via-emerald-400 via-amber-400 to-red-500">
                            <motion.div
                              initial={{ left: "0%" }}
                              animate={{ left: `${bmiResult.position}%` }}
                              transition={{
                                duration: 0.8,
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                              }}
                              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-charcoal-900 rounded-full shadow-md -ml-2"
                            />
                          </div>
                          <div className="flex justify-between text-[10px] sm:text-xs text-muted-foreground mt-1 font-medium">
                            <span>Underweight</span>
                            <span>Normal</span>
                            <span>Overweight</span>
                            <span>Obese</span>
                          </div>
                        </div>

                        {/* Junk food note */}
                        <div className="bg-white/70 rounded-lg p-3 border border-border">
                          <p className="text-sm font-semibold text-charcoal-900 mb-1">
                            🍔 Junk Food & Your BMI
                          </p>
                          <p className="text-sm text-foreground leading-relaxed">
                            {bmiResult.message}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>

              {/* Reference table */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(
                  [
                    {
                      range: "< 18.5",
                      label: "Underweight",
                      color: "bg-blue-100 border-blue-300 text-blue-700",
                    },
                    {
                      range: "18.5 – 24.9",
                      label: "Normal",
                      color:
                        "bg-emerald-100 border-emerald-300 text-emerald-700",
                    },
                    {
                      range: "25 – 29.9",
                      label: "Overweight",
                      color: "bg-amber-100 border-amber-300 text-amber-700",
                    },
                    {
                      range: "≥ 30",
                      label: "Obese",
                      color:
                        "bg-vermillion-100 border-vermillion-400 text-vermillion-600",
                    },
                  ] as const
                ).map((c) => (
                  <div
                    key={c.label}
                    className={`rounded-lg border ${c.color} p-3 text-center`}
                  >
                    <p className="font-bold text-sm">{c.range}</p>
                    <p className="text-xs mt-0.5">{c.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* ── CALORIE TAB ── */}
          <TabsContent value="calorie">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-2 border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">
                    Daily Calorie Needs
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Uses the Mifflin-St Jeor equation — the most validated
                    formula for estimating maintenance calories.
                  </p>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="cal-age">Age (years)</Label>
                      <Input
                        id="cal-age"
                        type="number"
                        placeholder="e.g. 30"
                        value={calAge}
                        onChange={(e) => setCalAge(e.target.value)}
                        data-ocid="calculator.age.input"
                        min="10"
                        max="120"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label>Sex</Label>
                      <Select
                        value={calSex}
                        onValueChange={(v) => setCalSex(v)}
                      >
                        <SelectTrigger data-ocid="calculator.sex.select">
                          <SelectValue placeholder="Select sex" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="cal-height">Height (cm)</Label>
                      <Input
                        id="cal-height"
                        type="number"
                        placeholder="e.g. 170"
                        value={calHeight}
                        onChange={(e) => setCalHeight(e.target.value)}
                        data-ocid="calculator.height.input"
                        min="50"
                        max="300"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="cal-weight">Weight (kg)</Label>
                      <Input
                        id="cal-weight"
                        type="number"
                        placeholder="e.g. 70"
                        value={calWeight}
                        onChange={(e) => setCalWeight(e.target.value)}
                        data-ocid="calculator.weight.input"
                        min="10"
                        max="500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label>Activity Level</Label>
                    <Select
                      value={calActivity}
                      onValueChange={(v) => setCalActivity(v)}
                    >
                      <SelectTrigger data-ocid="calculator.activity.select">
                        <SelectValue placeholder="Select activity level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedentary">
                          Sedentary — little or no exercise
                        </SelectItem>
                        <SelectItem value="light">
                          Lightly Active — 1–3 days/week
                        </SelectItem>
                        <SelectItem value="moderate">
                          Moderately Active — 3–5 days/week
                        </SelectItem>
                        <SelectItem value="very">
                          Very Active — 6–7 days/week
                        </SelectItem>
                        <SelectItem value="super">
                          Super Active — physical job + exercise
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {calError && (
                    <p className="text-vermillion-500 text-sm font-medium">
                      {calError}
                    </p>
                  )}

                  <Button
                    onClick={handleCalorieCalculate}
                    data-ocid="calculator.calorie.submit_button"
                    className="w-full bg-vermillion-500 hover:bg-vermillion-600 text-white font-bold text-base py-5"
                  >
                    Calculate Daily Calories
                  </Button>

                  {/* Calorie result */}
                  <AnimatePresence>
                    {calResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.45,
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                        data-ocid="calculator.calorie.success_state"
                        className="space-y-4"
                      >
                        {/* Main number */}
                        <div className="rounded-xl bg-charcoal-900 text-white p-5 text-center">
                          <p className="text-charcoal-100 text-sm uppercase tracking-widest font-semibold mb-1">
                            Daily Maintenance Calories
                          </p>
                          <p className="font-display text-6xl font-bold text-vermillion-400">
                            {calResult.tdee.toLocaleString()}
                          </p>
                          <p className="text-charcoal-100 text-sm mt-1">
                            kcal / day · Base metabolic rate:{" "}
                            <span className="text-white font-semibold">
                              {calResult.bmr.toLocaleString()} kcal
                            </span>
                          </p>
                        </div>

                        {/* Junk food breakdown */}
                        <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-4">
                          <h3 className="font-display font-bold text-charcoal-900 mb-3 text-lg">
                            🍟 How Junk Food Eats Your Budget
                          </h3>
                          <div className="space-y-3">
                            {calResult.breakdown.map((food) => {
                              const pct = Math.round(
                                (food.calories / calResult.tdee) * 100,
                              );
                              return (
                                <motion.div
                                  key={food.name}
                                  initial={{ opacity: 0, x: -12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.35 }}
                                  className="space-y-1"
                                >
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="font-semibold text-charcoal-900">
                                      {food.emoji} {food.name}
                                    </span>
                                    <span className="text-muted-foreground font-medium">
                                      {food.calories} cal ·{" "}
                                      <span
                                        className={`font-bold ${
                                          pct >= 25
                                            ? "text-vermillion-600"
                                            : pct >= 15
                                              ? "text-amber-600"
                                              : "text-emerald-600"
                                        }`}
                                      >
                                        {pct}%
                                      </span>
                                    </span>
                                  </div>
                                  <div className="h-2 rounded-full bg-amber-200 overflow-hidden">
                                    <motion.div
                                      initial={{ width: "0%" }}
                                      animate={{
                                        width: `${Math.min(pct, 100)}%`,
                                      }}
                                      transition={{
                                        duration: 0.6,
                                        delay: 0.1,
                                        ease: "easeOut",
                                      }}
                                      className={`h-full rounded-full ${
                                        pct >= 25
                                          ? "bg-vermillion-500"
                                          : pct >= 15
                                            ? "bg-amber-500"
                                            : "bg-emerald-500"
                                      }`}
                                    />
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                          <p className="text-xs text-muted-foreground mt-3 italic">
                            Percentages show how much of your daily calorie
                            budget a single serving uses — before you've eaten a
                            real meal.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>

              {/* Activity reference */}
              <div className="mt-6 bg-charcoal-900 text-white rounded-xl p-5">
                <h3 className="font-display font-bold text-lg mb-3">
                  📋 Activity Level Guide
                </h3>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  {[
                    {
                      level: "Sedentary",
                      desc: "Desk job, no exercise",
                      multi: "×1.2",
                    },
                    {
                      level: "Lightly Active",
                      desc: "Walk + 1–3 gym sessions/week",
                      multi: "×1.375",
                    },
                    {
                      level: "Moderately Active",
                      desc: "3–5 workouts/week",
                      multi: "×1.55",
                    },
                    {
                      level: "Very Active",
                      desc: "Hard training 6–7 days/week",
                      multi: "×1.725",
                    },
                    {
                      level: "Super Active",
                      desc: "Physical job + daily exercise",
                      multi: "×1.9",
                    },
                  ].map((a) => (
                    <div
                      key={a.level}
                      className="flex items-start gap-2 bg-charcoal-800 rounded-lg p-2.5"
                    >
                      <span className="font-bold text-vermillion-400 shrink-0">
                        {a.multi}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{a.level}</p>
                        <p className="text-charcoal-100 text-xs">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
