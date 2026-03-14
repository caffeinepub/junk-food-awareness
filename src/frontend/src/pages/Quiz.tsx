import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useActor } from "@/hooks/useActor";
import { Link } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const questions = [
  {
    question: "🍔 How many calories are in a McDonald's Big Mac?",
    options: ["390 cal", "550 cal", "760 cal", "920 cal"],
    correct: 1,
    fact: "A Big Mac has about 550 calories — that's roughly 27% of the average adult's daily calorie needs!",
  },
  {
    question: "🍜 How much sodium is in one pack of instant ramen noodles?",
    options: ["400mg", "800mg", "1,500mg+", "3,000mg+"],
    correct: 2,
    fact: "Most instant ramen packs contain 1,500–2,000mg of sodium — that's nearly the entire recommended daily limit of 2,300mg!",
  },
  {
    question: "🥤 What year was Coca-Cola invented?",
    options: ["1862", "1886", "1901", "1923"],
    correct: 1,
    fact: "Coca-Cola was invented in 1886 by pharmacist John Stith Pemberton in Atlanta, Georgia. It originally contained cocaine from coca leaves!",
  },
  {
    question: "🍟 Which fast food item has the most sodium per serving?",
    options: [
      "Large fries",
      "Chicken nuggets",
      "Crispy chicken sandwich",
      "Large cola",
    ],
    correct: 2,
    fact: "A typical crispy chicken sandwich can pack over 1,400mg of sodium — far more than fries or nuggets. Sauces and breading are sodium bombs!",
  },
  {
    question: "🧁 How many teaspoons of sugar are in a can of regular soda?",
    options: ["4 tsp", "7 tsp", "10 tsp", "13 tsp"],
    correct: 2,
    fact: "A 12oz can of cola contains about 10 teaspoons of sugar (39g). The WHO recommends no more than 6 teaspoons of added sugar per day for adults.",
  },
  {
    question: "🫀 What do trans fats primarily do to your body?",
    options: [
      "Boost good cholesterol (HDL)",
      "Lower bad cholesterol (LDL)",
      "Raise bad cholesterol and lower good cholesterol",
      "Increase metabolism",
    ],
    correct: 2,
    fact: "Trans fats raise LDL (bad) cholesterol AND lower HDL (good) cholesterol — a double whammy for heart disease risk. They're now banned in many countries!",
  },
  {
    question: "🍕 Which topping makes pizza the most calorie-dense?",
    options: ["Extra cheese", "Pepperoni", "Sausage", "Bacon"],
    correct: 0,
    fact: "Extra cheese adds the most calories per serving. One extra layer of cheese on a slice can add 70–100 calories. Double cheese = almost double the fat!",
  },
  {
    question:
      "🍦 Which country consumes the most ice cream per person annually?",
    options: ["USA", "Australia", "New Zealand", "Canada"],
    correct: 2,
    fact: "New Zealand tops the chart at about 28 liters per person per year! They take their ice cream very seriously Down Under. 🇳🇿",
  },
  {
    question:
      "🥔 About how many potatoes does McDonald's use globally every year?",
    options: [
      "1 million lbs",
      "500 million lbs",
      "3.4 billion lbs",
      "10 billion lbs",
    ],
    correct: 2,
    fact: "McDonald's uses roughly 3.4 billion pounds of potatoes per year — making them one of the world's largest potato buyers. That's a LOT of fries!",
  },
  {
    question:
      "🔬 What ingredient in many snack foods is linked to cancer risk when heated?",
    options: [
      "High-fructose corn syrup",
      "Acrylamide",
      "Sodium benzoate",
      "Carrageenan",
    ],
    correct: 1,
    fact: "Acrylamide forms naturally when starchy foods are cooked at high temperatures (baking, frying, roasting). It's found in chips, fries, and crackers and is classified as a probable carcinogen.",
  },
];

const scoreRanks = [
  {
    min: 10,
    title: "🏆 Junk Food Genius!",
    desc: "You know everything about the junk food world. Impressive — and a little scary.",
    color: "text-amber-500",
  },
  {
    min: 7,
    title: "🤓 Nutrition Nerd",
    desc: "You clearly pay attention to labels. Your gut thanks you.",
    color: "text-green-600",
  },
  {
    min: 4,
    title: "🍿 Snack Savvy",
    desc: "You know your stuff, but there's always more to learn about what's in your food.",
    color: "text-blue-600",
  },
  {
    min: 0,
    title: "🎮 Junk Food Rookie",
    desc: "Don't worry — now you know! Knowledge is the first step to healthier choices.",
    color: "text-vermillion-500",
  },
];

type Phase = "quiz" | "result";
type SubmitState = "idle" | "loading" | "success" | "error";

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState(1);

  // Leaderboard submission state
  const [playerName, setPlayerName] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState("");

  const { actor } = useActor();

  const question = questions[current];
  const progress = (current / questions.length) * 100;

  function handleAnswer(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === question.correct) setScore((s) => s + 1);
  }

  function handleNext() {
    setDirection(1);
    if (current + 1 >= questions.length) {
      setPhase("result");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function handleRetake() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDirection(1);
    setPhase("quiz");
    setPlayerName("");
    setSubmitState("idle");
    setSubmitError("");
  }

  async function handleSubmitScore() {
    if (!playerName.trim() || !actor) return;
    setSubmitState("loading");
    setSubmitError("");
    try {
      await actor.submitScore(playerName.trim(), BigInt(score));
      setSubmitState("success");
    } catch (_e) {
      setSubmitError("Failed to submit. Please try again.");
      setSubmitState("error");
    }
  }

  const rank =
    scoreRanks.find((r) => score >= r.min) ?? scoreRanks[scoreRanks.length - 1];

  const variants = {
    enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-vermillion-500/10 text-vermillion-500 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-vermillion-500/20">
            Junk Food Quiz
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-900 leading-tight">
            How Well Do You Know{" "}
            <span className="text-vermillion-500">Junk Food?</span>
          </h1>
          <p className="mt-3 text-charcoal-600 text-lg max-w-lg mx-auto">
            10 questions. No cheating. Find out if you're a snack scholar or a
            junk food rookie.
          </p>
        </motion.div>

        <AnimatePresence mode="wait" custom={direction}>
          {phase === "quiz" && (
            <motion.div
              key="quiz"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {/* Progress */}
              <div
                data-ocid="quiz.progress.panel"
                className="bg-white rounded-2xl border border-border shadow-sm p-5 mb-6"
              >
                <div className="flex items-center justify-between text-sm font-medium text-charcoal-600 mb-3">
                  <span>
                    Question {current + 1} of {questions.length}
                  </span>
                  <span className="text-vermillion-500 font-bold">
                    Score: {score}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question Card */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-white rounded-2xl border border-border shadow-md p-6 md:p-8"
                >
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-900 mb-8 leading-snug">
                    {question.question}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {question.options.map((option, idx) => {
                      let btnClass =
                        "w-full text-left px-5 py-4 rounded-xl border-2 font-medium text-base transition-all duration-200 ";

                      if (selected === null) {
                        btnClass +=
                          "border-border text-charcoal-800 bg-secondary hover:border-vermillion-500 hover:bg-vermillion-500/5 hover:text-vermillion-600";
                      } else if (idx === question.correct) {
                        btnClass +=
                          "border-green-500 bg-green-50 text-green-800";
                      } else if (idx === selected) {
                        btnClass += "border-red-400 bg-red-50 text-red-700";
                      } else {
                        btnClass +=
                          "border-border text-charcoal-400 bg-secondary opacity-60";
                      }

                      const ocidIdx = idx + 1;

                      return (
                        <motion.button
                          key={option}
                          type="button"
                          data-ocid={`quiz.answer.button.${ocidIdx}`}
                          className={btnClass}
                          onClick={() => handleAnswer(idx)}
                          disabled={selected !== null}
                          whileHover={selected === null ? { scale: 1.02 } : {}}
                          whileTap={selected === null ? { scale: 0.98 } : {}}
                        >
                          <span className="inline-flex items-center gap-3">
                            <span className="w-7 h-7 rounded-full bg-border text-charcoal-600 text-xs font-bold flex items-center justify-center shrink-0">
                              {["A", "B", "C", "D"][idx]}
                            </span>
                            {option}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Fun fact reveal */}
                  <AnimatePresence>
                    {selected !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`rounded-xl p-4 mb-6 border-l-4 ${
                          selected === question.correct
                            ? "bg-green-50 border-green-500 text-green-800"
                            : "bg-orange-50 border-vermillion-500 text-charcoal-800"
                        }`}
                      >
                        <p className="text-sm font-medium">
                          <span className="font-bold">
                            {selected === question.correct
                              ? "✅ Correct! "
                              : "❌ Not quite! "}
                          </span>
                          {question.fact}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selected !== null && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      <Button
                        data-ocid="quiz.next.button"
                        onClick={handleNext}
                        className="w-full bg-vermillion-500 hover:bg-vermillion-600 text-white font-bold py-3 text-base rounded-xl"
                        size="lg"
                      >
                        {current + 1 >= questions.length
                          ? "See Results 🎉"
                          : "Next Question →"}
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {phase === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-border shadow-lg p-8 md:p-12 text-center"
            >
              {/* Score circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
                className="mx-auto mb-6 w-32 h-32 rounded-full bg-vermillion-500/10 border-4 border-vermillion-500 flex flex-col items-center justify-center"
              >
                <span className="font-display text-4xl font-bold text-vermillion-500">
                  {score}
                </span>
                <span className="text-sm text-charcoal-500 font-medium">
                  out of 10
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2
                  className={`font-display text-3xl md:text-4xl font-bold mb-3 ${rank.color}`}
                >
                  {rank.title}
                </h2>
                <p className="text-charcoal-600 text-lg max-w-md mx-auto mb-8">
                  {rank.desc}
                </p>

                {/* Score breakdown */}
                <div className="flex justify-center gap-6 mb-8">
                  <div className="bg-green-50 rounded-xl px-6 py-4 border border-green-200">
                    <div className="font-display text-2xl font-bold text-green-700">
                      {score}
                    </div>
                    <div className="text-xs text-green-600 font-medium mt-1">
                      Correct
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-xl px-6 py-4 border border-red-200">
                    <div className="font-display text-2xl font-bold text-red-600">
                      {10 - score}
                    </div>
                    <div className="text-xs text-red-500 font-medium mt-1">
                      Incorrect
                    </div>
                  </div>
                  <div className="bg-secondary rounded-xl px-6 py-4 border border-border">
                    <div className="font-display text-2xl font-bold text-charcoal-800">
                      {Math.round((score / 10) * 100)}%
                    </div>
                    <div className="text-xs text-charcoal-500 font-medium mt-1">
                      Accuracy
                    </div>
                  </div>
                </div>

                {/* Leaderboard submission */}
                <div className="border border-border rounded-xl p-6 mb-6 text-left">
                  <h3 className="font-display text-lg font-bold text-charcoal-900 mb-1">
                    Submit to Leaderboard
                  </h3>
                  <p className="text-sm text-charcoal-600 mb-4">
                    Enter your name to claim your rank on the global
                    leaderboard.
                  </p>

                  {submitState === "success" ? (
                    <motion.div
                      data-ocid="quiz.submit.success_state"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
                    >
                      <p className="text-green-800 font-semibold mb-2">
                        🎉 Score submitted successfully!
                      </p>
                      <Link
                        to="/leaderboard"
                        data-ocid="quiz.leaderboard.link"
                        className="text-vermillion-500 hover:text-vermillion-600 font-semibold text-sm underline underline-offset-2"
                      >
                        View the Leaderboard →
                      </Link>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        data-ocid="quiz.name.input"
                        type="text"
                        placeholder="Enter your name"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleSubmitScore()
                        }
                        disabled={submitState === "loading"}
                        className="flex-1 rounded-xl border-border focus:border-vermillion-500 focus:ring-vermillion-500"
                        maxLength={50}
                      />
                      <Button
                        data-ocid="quiz.submit.button"
                        onClick={handleSubmitScore}
                        disabled={
                          !playerName.trim() || submitState === "loading"
                        }
                        className="bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold px-6 rounded-xl whitespace-nowrap"
                      >
                        {submitState === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting…
                          </>
                        ) : (
                          "Submit Score 🏆"
                        )}
                      </Button>
                    </div>
                  )}

                  {submitState === "error" && (
                    <p
                      data-ocid="quiz.submit.error_state"
                      className="text-red-600 text-sm mt-2"
                    >
                      {submitError}
                    </p>
                  )}
                </div>

                <Button
                  data-ocid="quiz.retake.button"
                  onClick={handleRetake}
                  variant="outline"
                  className="border-vermillion-500 text-vermillion-500 hover:bg-vermillion-500 hover:text-white font-bold px-10 py-3 text-base rounded-xl"
                  size="lg"
                >
                  🔄 Retake Quiz
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
