import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useActor } from "@/hooks/useActor";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { motion } from "motion/react";

function useleaderboard() {
  const { actor, isFetching } = useActor();
  return useQuery<Array<[string, bigint, bigint]>>({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLeaderboard();
    },
    enabled: !!actor && !isFetching,
  });
}

function medalFor(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return rank.toString();
}

function formatDate(ts: bigint) {
  // Backend timestamps in nanoseconds
  const ms = Number(ts / 1_000_000n);
  return new Date(ms).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Leaderboard() {
  const { data: entries = [], isLoading } = useleaderboard();

  // Sort descending by score, then by timestamp ascending (earlier = better)
  const sorted = [...entries]
    .sort((a, b) => {
      const scoreDiff = Number(b[1]) - Number(a[1]);
      if (scoreDiff !== 0) return scoreDiff;
      return Number(a[2]) - Number(b[2]);
    })
    .slice(0, 20);

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-vermillion-500/10 text-vermillion-500 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-vermillion-500/20">
            <Trophy className="w-4 h-4" />
            Hall of Fame
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
            Quiz <span className="text-vermillion-500">Leaderboard</span>
          </h1>
          <p className="mt-3 text-charcoal-600 text-base md:text-lg max-w-lg mx-auto">
            The top junk food scholars, ranked by quiz score. Think you can beat
            them?
          </p>
          <Link to="/quiz">
            <Button
              data-ocid="leaderboard.quiz.primary_button"
              className="mt-6 bg-vermillion-500 hover:bg-vermillion-600 text-white font-bold px-8 py-3 rounded-xl text-base"
              size="lg"
            >
              Take the Quiz
            </Button>
          </Link>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-2xl border border-border shadow-md overflow-hidden"
        >
          {isLoading ? (
            <div
              data-ocid="leaderboard.loading_state"
              className="flex flex-col items-center justify-center py-20 gap-4"
            >
              <div className="w-10 h-10 rounded-full border-4 border-vermillion-500 border-t-transparent animate-spin" />
              <p className="text-charcoal-600 font-medium">Loading scores…</p>
            </div>
          ) : sorted.length === 0 ? (
            <div
              data-ocid="leaderboard.empty_state"
              className="flex flex-col items-center justify-center py-20 gap-4 text-center px-8"
            >
              <span className="text-5xl">🏆</span>
              <h2 className="font-display text-2xl font-bold text-charcoal-900">
                No scores yet
              </h2>
              <p className="text-charcoal-600 max-w-xs">
                Be the first to take the quiz and claim the top spot!
              </p>
              <Link to="/quiz">
                <Button className="bg-vermillion-500 hover:bg-vermillion-600 text-white font-bold px-8 rounded-xl">
                  Take the Quiz
                </Button>
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table data-ocid="leaderboard.table">
                <TableHeader>
                  <TableRow className="bg-charcoal-900 hover:bg-charcoal-900">
                    <TableHead className="text-charcoal-100 font-bold text-xs uppercase tracking-widest w-16 text-center">
                      Rank
                    </TableHead>
                    <TableHead className="text-charcoal-100 font-bold text-xs uppercase tracking-widest">
                      Player
                    </TableHead>
                    <TableHead className="text-charcoal-100 font-bold text-xs uppercase tracking-widest text-center">
                      Score
                    </TableHead>
                    <TableHead className="text-charcoal-100 font-bold text-xs uppercase tracking-widest text-center">
                      Accuracy
                    </TableHead>
                    <TableHead className="text-charcoal-100 font-bold text-xs uppercase tracking-widest text-right hidden sm:table-cell">
                      Date
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sorted.map((entry, i) => {
                    const rank = i + 1;
                    const name = entry[0];
                    const score = Number(entry[1]);
                    const ts = entry[2];
                    const accuracy = Math.round((score / 10) * 100);
                    const isTop3 = rank <= 3;
                    return (
                      <motion.tr
                        key={`${name}-${Number(entry[1])}-${Number(entry[2])}`}
                        data-ocid={`leaderboard.row.${rank}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
                        className={`border-b border-border last:border-b-0 ${
                          isTop3
                            ? "bg-vermillion-50 hover:bg-vermillion-100/60"
                            : "hover:bg-secondary/60"
                        }`}
                      >
                        <TableCell className="text-center font-bold text-lg py-4">
                          {isTop3 ? (
                            <span className="text-xl">{medalFor(rank)}</span>
                          ) : (
                            <span className="text-charcoal-600 text-sm font-semibold">
                              {rank}
                            </span>
                          )}
                        </TableCell>
                        <TableCell className="font-semibold text-charcoal-900 py-4">
                          {name}
                        </TableCell>
                        <TableCell className="text-center py-4">
                          <span
                            className={`inline-block font-bold text-base ${
                              score >= 8
                                ? "text-green-600"
                                : score >= 5
                                  ? "text-amber-500"
                                  : "text-vermillion-500"
                            }`}
                          >
                            {score}
                            <span className="text-charcoal-400 font-normal text-sm">
                              /10
                            </span>
                          </span>
                        </TableCell>
                        <TableCell className="text-center py-4">
                          <span
                            className={`text-sm font-semibold px-2.5 py-0.5 rounded-full ${
                              accuracy >= 80
                                ? "bg-green-100 text-green-700"
                                : accuracy >= 50
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {accuracy}%
                          </span>
                        </TableCell>
                        <TableCell className="text-right text-sm text-charcoal-500 py-4 hidden sm:table-cell">
                          {formatDate(ts)}
                        </TableCell>
                      </motion.tr>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
