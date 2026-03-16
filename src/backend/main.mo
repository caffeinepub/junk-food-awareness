import Time "mo:core/Time";
import List "mo:core/List";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";

actor {
  type QuizQuestion = {
    id : Nat;
    question : Text;
    options : [Text];
    correct : Nat;
    fact : Text;
  };

  var siteVisits : Nat = 0;
  let leaderboard = List.empty<(Text, Nat, Int)>();

  stable let quizQuestions : [QuizQuestion] = [
    {
      id = 0;
      question = "How many calories are in a McDonald's Big Mac?";
      options = ["390 cal", "550 cal", "760 cal", "920 cal"];
      correct = 1;
      fact = "A Big Mac has about 550 calories - that's roughly 27% of the average adult's daily calorie needs!";
    },
    {
      id = 1;
      question = "How much sodium is in one pack of instant ramen noodles?";
      options = ["400mg", "800mg", "1,500mg+", "3,000mg+"];
      correct = 2;
      fact = "Most instant ramen packs contain 1,500-2,000mg of sodium - that's nearly the entire recommended daily limit of 2,300mg!";
    },
    {
      id = 2;
      question = "What year was Coca-Cola invented?";
      options = ["1862", "1886", "1901", "1923"];
      correct = 1;
      fact = "Coca-Cola was invented in 1886 by pharmacist John Stith Pemberton in Atlanta, Georgia. It originally contained cocaine from coca leaves!";
    },
    {
      id = 3;
      question = "Which fast food item has the most sodium per serving?";
      options = ["Large fries", "Chicken nuggets", "Crispy chicken sandwich", "Large cola"];
      correct = 2;
      fact = "A typical crispy chicken sandwich can pack over 1,400mg of sodium - far more than fries or nuggets. Sauces and breading are sodium bombs!";
    },
    {
      id = 4;
      question = "How many teaspoons of sugar are in a can of regular soda?";
      options = ["4 tsp", "7 tsp", "10 tsp", "13 tsp"];
      correct = 2;
      fact = "A 12oz can of cola contains about 10 teaspoons of sugar (39g). The WHO recommends no more than 6 teaspoons of added sugar per day for adults.";
    },
    {
      id = 5;
      question = "What do trans fats primarily do to your body?";
      options = [
        "Boost good cholesterol (HDL)",
        "Lower bad cholesterol (LDL)",
        "Raise bad cholesterol and lower good cholesterol",
        "Increase metabolism",
      ];
      correct = 2;
      fact = "Trans fats raise LDL (bad) cholesterol AND lower HDL (good) cholesterol - a double whammy for heart disease risk. They're now banned in many countries!";
    },
    {
      id = 6;
      question = "Which topping makes pizza the most calorie-dense?";
      options = ["Extra cheese", "Pepperoni", "Sausage", "Bacon"];
      correct = 0;
      fact = "Extra cheese adds the most calories per serving. One extra layer of cheese on a slice can add 70-100 calories. Double cheese = almost double the fat!";
    },
    {
      id = 7;
      question = "Which country consumes the most ice cream per person annually?";
      options = ["USA", "Australia", "New Zealand", "Canada"];
      correct = 2;
      fact = "New Zealand tops the chart at about 28 liters per person per year! They take their ice cream very seriously Down Under.";
    },
    {
      id = 8;
      question = "About how many potatoes does McDonald's use globally every year?";
      options = ["1 million lbs", "500 million lbs", "3.4 billion lbs", "10 billion lbs"];
      correct = 2;
      fact = "McDonald's uses roughly 3.4 billion pounds of potatoes per year - making them one of the world's largest potato buyers. That's a LOT of fries!";
    },
    {
      id = 9;
      question = "What ingredient in many snack foods is linked to cancer risk when heated?";
      options = ["High-fructose corn syrup", "Acrylamide", "Sodium benzoate", "Carrageenan"];
      correct = 1;
      fact = "Acrylamide forms naturally when starchy foods are cooked at high temperatures (baking, frying, roasting). It's found in chips, fries, and crackers and is classified as a probable carcinogen.";
    },
  ];

  public shared ({ caller }) func incrementSiteVisits() : async Nat {
    siteVisits += 1;
    siteVisits;
  };

  public shared ({ caller }) func getLeaderboard() : async [(Text, Nat, Int)] {
    let sorted = leaderboard.toArray().sort(
      func(a, b) {
        Nat.compare(b.1, a.1);
      }
    );

    let maxEntries = 20;
    let numEntries = if (sorted.size() < maxEntries) { sorted.size() } else {
      maxEntries;
    };
    sorted.sliceToArray(0, numEntries);
  };

  public shared ({ caller }) func getSiteVisits() : async Nat {
    siteVisits;
  };

  public shared ({ caller }) func submitScore(name : Text, score : Nat) : async () {
    let entry = (name, score, Time.now());
    leaderboard.add(entry);

    while (leaderboard.size() > 100) {
      ignore leaderboard.removeLast();
    };
  };

  public query func getQuestions() : async [QuizQuestion] {
    quizQuestions;
  };
};
