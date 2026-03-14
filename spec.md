# Junk Food Awareness

## Current State
Multi-page React + Motoko educational site with Home, Health Risks, Common Junk Foods, Healthy Swaps, Facts & Stats, Ingredients, Take Action, and Quiz pages. The quiz has 10 questions with instant feedback and score ranking. Build passes cleanly. The last deployment failed due to a transient error.

## Requested Changes (Diff)

### Add
- Leaderboard page (`/leaderboard`) — visitors submit their name + score after the quiz, scores are stored in the Motoko backend, and the leaderboard displays the top 20 entries sorted by score descending.
- Backend API: `submitScore(name: Text, score: Nat): async ()` and `getLeaderboard(): async [LeaderboardEntry]` where `LeaderboardEntry = { name: Text; score: Nat; timestamp: Int }`.
- Nav link to Leaderboard in Layout.tsx.

### Modify
- Quiz result screen: add a name input + "Submit Score" button that calls `submitScore` and links to the leaderboard.
- General professional polish: tighten typography, spacing, and card hierarchy across all pages.

### Remove
- Nothing removed.

## Implementation Plan
1. Update `main.mo` with leaderboard data model and two new query/update functions.
2. Regenerate `backend.d.ts` with the new types.
3. Create `src/frontend/src/pages/Leaderboard.tsx`.
4. Update `App.tsx` to add `/leaderboard` route.
5. Update `Layout.tsx` to add Leaderboard nav link.
6. Update `Quiz.tsx` result screen with score-submission UI.
7. Apply professional polish across all existing pages.
