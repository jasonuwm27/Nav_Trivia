import { useState, useCallback } from 'react';
import navCategories from './data/questions';
import { wisconsinCategories } from './data/questions';

const GAMES = [
  { name: 'Nav Night', categories: navCategories },
  { name: 'Wisconsin Edition', categories: wisconsinCategories },
];
import Board from './components/Board';
import QuestionModal from './components/QuestionModal';
import ScoreBoard from './components/ScoreBoard';

const TEAM_COLORS = ['#ff4444', '#44aaff', '#44dd44', '#ff9f1a', '#cc44ff', '#ff69b4', '#00ced1', '#ffd700'];

function makeTeam(index) {
  return { name: `Team ${index + 1}`, color: TEAM_COLORS[index % TEAM_COLORS.length] };
}

const DEFAULT_TEAMS = [makeTeam(0), makeTeam(1), makeTeam(2)];

function initScores(teams) {
  return teams.reduce((acc, _, i) => ({ ...acc, [i]: 0 }), {});
}

function App() {
  const [teams, setTeams] = useState(DEFAULT_TEAMS);
  const [scores, setScores] = useState(() => initScores(DEFAULT_TEAMS));
  const [activeTeam, setActiveTeam] = useState(0);
  const [usedClues, setUsedClues] = useState({});
  const [activeClue, setActiveClue] = useState(null);
  const [gameIdx, setGameIdx] = useState(0);

  const currentCategories = GAMES[gameIdx].categories;

  // Add a new team (max 8)
  const handleAddTeam = useCallback(() => {
    setTeams((prev) => {
      if (prev.length >= 8) return prev;
      const next = [...prev, makeTeam(prev.length)];
      setScores((s) => ({ ...s, [next.length - 1]: 0 }));
      return next;
    });
  }, []);

  // Remove the last team (min 1)
  const handleRemoveTeam = useCallback(() => {
    setTeams((prev) => {
      if (prev.length <= 1) return prev;
      const next = prev.slice(0, -1);
      setScores((s) => {
        const copy = { ...s };
        delete copy[prev.length - 1];
        return copy;
      });
      // Keep activeTeam in bounds
      setActiveTeam((a) => Math.min(a, next.length - 1));
      return next;
    });
  }, []);

  const handleSelectClue = useCallback((catIdx, clueIdx) => {
    const key = `${catIdx}-${clueIdx}`;
    if (usedClues[key]) return;
    const category = currentCategories[catIdx];
    const clue = category.clues[clueIdx];
    setActiveClue({ catIdx, clueIdx, category: category.name, ...clue });
  }, [usedClues, currentCategories]);

  const handleCloseClue = useCallback((teamIdx, pointsDelta) => {
    if (!activeClue) return;
    const key = `${activeClue.catIdx}-${activeClue.clueIdx}`;
    setUsedClues((prev) => ({ ...prev, [key]: true }));
    if (teamIdx !== null && pointsDelta !== 0) {
      setScores((prev) => ({ ...prev, [teamIdx]: prev[teamIdx] + pointsDelta }));
    }
    setActiveClue(null);
  }, [activeClue]);

  const handleAdjust = useCallback((teamIdx, amount) => {
    setScores((prev) => ({ ...prev, [teamIdx]: prev[teamIdx] + amount }));
  }, []);

  const handleSwitchGame = useCallback(() => {
    setGameIdx((prev) => (prev + 1) % GAMES.length);
    setScores(initScores(teams));
    setUsedClues({});
    setActiveClue(null);
    setActiveTeam(0);
  }, [teams]);

  const handleReset = useCallback(() => {
    setScores(initScores(teams));
    setUsedClues({});
    setActiveClue(null);
    setActiveTeam(0);
  }, [teams]);

  return (
    <div className="app">
      <div className="disclaimer">The 700-point questions are not for the faint of heart.</div>
      <ScoreBoard
        teams={teams}
        scores={scores}
        activeTeam={activeTeam}
        onSelectTeam={setActiveTeam}
        onAdjust={handleAdjust}
        onAddTeam={handleAddTeam}
        onRemoveTeam={handleRemoveTeam}
        onReset={handleReset}
        onSwitchGame={handleSwitchGame}
        gameName={GAMES[gameIdx].name}
      />
      <Board
        categories={currentCategories}
        usedClues={usedClues}
        onSelectClue={handleSelectClue}
      />
      {activeClue && (
        <QuestionModal
          clue={activeClue}
          teams={teams}
          scores={scores}
          activeTeam={activeTeam}
          onClose={handleCloseClue}
        />
      )}
    </div>
  );
}

export default App;
