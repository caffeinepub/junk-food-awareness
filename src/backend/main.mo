import Time "mo:core/Time";
import List "mo:core/List";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Migration "migration";

(with migration = Migration.run)
actor {
  var siteVisits = 0;
  let leaderboard = List.empty<(Text, Nat, Int)>();

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

    // Maintain max of 100 entries
    while (leaderboard.size() > 100) {
      ignore leaderboard.removeLast();
    };
  };
};
