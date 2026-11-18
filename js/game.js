// Lunaria — game logic
// Scoring: a keyword's rarity is judged against the average monthly search
// volume of all accepted answers for that question. The further below the
// average (relative), the higher the tier.

const TIERS = [
  { name: "Diamond",  points: 50, mult: 0.010, color: "#7dd8ff", desc: "almost impossible" },
  { name: "Platinum", points: 40, mult: 0.030, color: "#b9f2ff", desc: "very rare" },
  { name: "Gold",     points: 30, mult: 0.080, color: "#ffd24a", desc: "rare" },
  { name: "Silver",   points: 20, mult: 0.200, color: "#d9d9e3", desc: "common" },
  { name: "Bronze",   points: 10, mult: Infinity, color: "#e0a06a", desc: "very common" }
];

const ROUND_COUNT = 10;
const TOTAL_ALTITUDE = 384400; // km, Earth to Moon
const LAUNCH_ALT = 40000;      // km starting altitude (low Earth orbit-ish)

const state = {
  round: 0,
  totalPoints: 0,
  history: [],      // {q, keyword, tier, points, volume, avgVolume}
  answered: [],     // question indexes already served
  question: null
};

function scoreKeyword(question, keyword) {
  const norm = keyword.trim().toLowerCase();
  const hit = question.answers.find(a => a[0] === norm);
  if (!hit) return null;

  const avgVolume = question.answers.reduce((s, a) => s + a[1], 0) / question.answers.length;
  const ratio = hit[1] / avgVolume;
  const tier = TIERS.find(t => ratio < t.mult) || TIERS[TIERS.length - 1];
  return {
    keyword: norm,
    volume: hit[1],
    avgVolume: Math.round(avgVolume),
    ratio: ratio,
    tier: tier
  };
}

function altitudeFor(points) {
  return Math.min(TOTAL_ALTITUDE, LAUNCH_ALT + Math.round((points / (ROUND_COUNT * 50)) * (TOTAL_ALTITUDE - LAUNCH_ALT)));
}

function nextQuestion() {
  if (state.answered.length >= QUESTIONS.length) state.answered = [];
  let idx;
  do { idx = Math.floor(Math.random() * QUESTIONS.length); } while (state.answered.includes(idx));
  state.answered.push(idx);
  state.question = QUESTIONS[idx];
  return state.question;
}

function submitAnswer(raw) {
  if (!state.question) return null;
  const result = scoreKeyword(state.question, raw);
  if (result) {
    state.history.push({
      q: state.question.q,
      keyword: result.keyword,
      tier: result.tier.name,
      points: result.tier.points,
      volume: result.volume,
      avgVolume: result.avgVolume
    });
    state.totalPoints += result.tier.points;
  }
  state.round++;
  return result;
}
