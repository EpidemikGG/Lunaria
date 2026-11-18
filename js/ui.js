// Lunaria — UI wiring

const $ = id => document.getElementById(id);

function show(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  $(screenId).classList.remove('hidden');
}

function updateHUD() {
  $('hud-round').textContent = `Round ${Math.min(state.round + 1, ROUND_COUNT)}/${ROUND_COUNT}`;
  $('hud-points').textContent = `${state.totalPoints} pts`;
  const alt = altitudeFor(state.totalPoints);
  $('hud-altitude').textContent = alt.toLocaleString('en-US') + ' km';
  const pct = ((alt - LAUNCH_ALT) / (TOTAL_ALTITUDE - LAUNCH_ALT)) * 100;
  $('progress-fill').style.height = pct + '%';
  $('ship').style.bottom = `calc(${pct}% - 8px)`;
}

function startGame() {
  state.round = 0;
  state.totalPoints = 0;
  state.history = [];
  state.answered = [];
  show('screen-game');
  loadRound();
}

function loadRound() {
  const q = nextQuestion();
  $('question-text').textContent = q.q;
  $('answer-input').value = '';
  $('btn-submit').disabled = false;
  $('answer-input').disabled = false;
  $('question-card').classList.remove('hidden');
  $('reveal').classList.add('hidden');
  updateHUD();
  $('answer-input').focus();
}

function onSubmit() {
  const raw = $('answer-input').value;
  if (!raw.trim()) return;
  const result = submitAnswer(raw);
  updateHUD();

  const badge = $('tier-badge');
  const info = $('tier-info');
  if (result) {
    badge.textContent = result.tier.name;
    badge.style.background = result.tier.color;
    badge.style.color = '#111';
    info.innerHTML = `“${result.keyword}” — ${result.volume.toLocaleString('en-US')} monthly searches vs a question average of ${result.avgVolume.toLocaleString('en-US')} → <b>+${result.tier.points} pts</b> <em>(${result.tier.desc})</em>`;
  } else {
    badge.textContent = 'Miss';
    badge.style.background = '#555';
    badge.style.color = '#fff';
    info.textContent = `“${raw.trim()}” isn’t an accepted answer. No points this round — no altitude gained, no time lost.`;
  }

  $('btn-submit').disabled = true;
  $('answer-input').disabled = true;
  $('question-card').classList.add('hidden');
  $('reveal').classList.remove('hidden');
}

function onNext() {
  if (state.round >= ROUND_COUNT) {
    showResults();
  } else {
    loadRound();
  }
}

function showResults() {
  const alt = altitudeFor(state.totalPoints);
  const reached = alt >= TOTAL_ALTITUDE;
  $('result-title').textContent = reached ? 'You reached the Moon! 🌕' : 'Mission complete 🌕';
  $('result-summary').textContent = `${state.totalPoints} points · final altitude ${alt.toLocaleString('en-US')} km`;
  const list = $('history-list');
  list.innerHTML = '';
  state.history.forEach(h => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="chip ${h.tier.toLowerCase()}">${h.tier}</span> ${h.q} → “${h.keyword}” (+${h.points})`;
    list.appendChild(li);
  });
  show('screen-results');
}

document.addEventListener('DOMContentLoaded', () => {
  $('btn-start').addEventListener('click', startGame);
  $('btn-submit').addEventListener('click', onSubmit);
  $('btn-next').addEventListener('click', onNext);
  $('btn-restart').addEventListener('click', startGame);
  $('answer-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') onSubmit();
  });
});
