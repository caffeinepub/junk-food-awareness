import { Link, useRouterState } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { AlertTriangle, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home", ocid: "nav.home.link" },
  { to: "/health-risks", label: "Health Risks", ocid: "nav.health-risks.link" },
  {
    to: "/common-junk-foods",
    label: "Junk Foods",
    ocid: "nav.junk-foods.link",
  },
  {
    to: "/healthy-swaps",
    label: "Healthy Swaps",
    ocid: "nav.healthy-swaps.link",
  },
  { to: "/facts-stats", label: "Facts & Stats", ocid: "nav.facts-stats.link" },
  { to: "/ingredients", label: "Ingredients", ocid: "nav.ingredients.link" },
  { to: "/take-action", label: "Take Action", ocid: "nav.take-action.link" },
  { to: "/quiz", label: "Quiz", ocid: "nav.quiz.link" },
  { to: "/leaderboard", label: "Leaderboard 🏆", ocid: "nav.leaderboard.link" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-charcoal-900 text-white sticky top-0 z-50 shadow-lg border-b-2 border-vermillion-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-white no-underline shrink-0"
            >
              <AlertTriangle className="w-5 h-5 text-vermillion-400" />
              <span className="font-display font-bold text-base tracking-wide text-white">
                Junk Food Aware
              </span>
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive =
                  item.to === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(item.to);
                return (
                  <motion.div
                    key={item.to}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Link
                      to={item.to}
                      data-ocid={item.ocid}
                      className={`block px-2.5 py-1.5 rounded text-sm font-medium transition-colors whitespace-nowrap ${
                        isActive
                          ? "bg-vermillion-500 text-white"
                          : "text-charcoal-100 hover:bg-charcoal-700 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <button
              type="button"
              className="xl:hidden p-2 rounded-lg text-white hover:bg-charcoal-700 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.mobile.toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden pb-4 pt-2 flex flex-col gap-0.5 border-t border-charcoal-700 mt-1"
            >
              {navItems.map((item) => {
                const isActive =
                  item.to === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    data-ocid={item.ocid}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors block ${
                      isActive
                        ? "bg-vermillion-500 text-white"
                        : "text-charcoal-100 hover:bg-charcoal-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-charcoal-900 text-charcoal-100 mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-vermillion-400" />
                <span className="font-display text-white font-bold text-lg">
                  Junk Food Aware
                </span>
              </div>
              <p className="text-sm text-charcoal-100 max-w-xs">
                Empowering communities with knowledge about nutrition and
                healthy choices.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-100 mb-3">
                Pages
              </p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-charcoal-100 hover:text-vermillion-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-charcoal-700 text-center text-sm text-charcoal-100">
            © {new Date().getFullYear()}. Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              className="text-vermillion-400 hover:text-vermillion-400/80 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
