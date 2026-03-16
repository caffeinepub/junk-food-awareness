import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import Calculator from "./pages/Calculator";
import CommonJunkFoods from "./pages/CommonJunkFoods";
import FactsStats from "./pages/FactsStats";
import HealthRisks from "./pages/HealthRisks";
import HealthySwaps from "./pages/HealthySwaps";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Leaderboard from "./pages/Leaderboard";
import Quiz from "./pages/Quiz";
import TakeAction from "./pages/TakeAction";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: Home,
});

const healthRisksRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/health-risks",
  component: HealthRisks,
});

const commonJunkFoodsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/common-junk-foods",
  component: CommonJunkFoods,
});

const healthySwapsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/healthy-swaps",
  component: HealthySwaps,
});

const factsStatsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/facts-stats",
  component: FactsStats,
});

const ingredientsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/ingredients",
  component: Ingredients,
});

const takeActionRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/take-action",
  component: TakeAction,
});

const quizRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/quiz",
  component: Quiz,
});

const leaderboardRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/leaderboard",
  component: Leaderboard,
});

const calculatorRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/calculator",
  component: Calculator,
});

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    homeRoute,
    healthRisksRoute,
    commonJunkFoodsRoute,
    healthySwapsRoute,
    factsStatsRoute,
    ingredientsRoute,
    takeActionRoute,
    quizRoute,
    leaderboardRoute,
    calculatorRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
