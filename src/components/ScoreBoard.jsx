import { useState, useCallback, useEffect } from 'react';

function ScoreBoard({ teams, scores, activeTeam, onSelectTeam, onAdjust, onAddTeam, onRemoveTeam, onReset, onSwitchGame, gameName }) {
  const [buzzerActive, setBuzzerActive] = useState(false);

  const [isFullscreen, setIsFullscreen] = useState(!!document.fullscreenElement);

  const handleBuzzer = () => {
    setBuzzerActive(true);
    setTimeout(() => setBuzzerActive(false), 600);
  };

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const formatScore = (val) => (val < 0 ? `-$${Math.abs(val)}` : `$${val}`);

  return (
    <div className="scoreboard">
      <div className="teams-row">
        {teams.map((team, idx) => (
          <div
            key={idx}
            className={`team-card ${idx === activeTeam ? 'team-card--active' : ''}`}
            style={{ '--team-color': team.color }}
            onClick={() => onSelectTeam(idx)}
          >
            <div className="team-card__name">{team.name}</div>
            <div className="team-card__score">{formatScore(scores[idx])}</div>
            <div className="team-card__adjust">
              <button onClick={(e) => { e.stopPropagation(); onAdjust(idx, -100); }}>-100</button>
              <button onClick={(e) => { e.stopPropagation(); onAdjust(idx, 100); }}>+100</button>
            </div>
          </div>
        ))}
      </div>

      <div className="scoreboard__controls">
        <button className="scoreboard__btn scoreboard__btn--add" onClick={onAddTeam} disabled={teams.length >= 8}>
          + Team
        </button>
        <button className="scoreboard__btn scoreboard__btn--remove" onClick={onRemoveTeam} disabled={teams.length <= 1}>
          - Team
        </button>
        <button
          className="scoreboard__btn scoreboard__btn--buzzer"
          onClick={handleBuzzer}
          style={buzzerActive ? { background: '#ff4444', color: '#fff' } : {}}
        >
          {buzzerActive ? 'BUZZED!' : 'BUZZER'}
        </button>
        <button className="scoreboard__btn scoreboard__btn--reset" onClick={onReset}>
          Reset Game
        </button>
        <button className="scoreboard__btn scoreboard__btn--switch" onClick={onSwitchGame}>
          {gameName === 'Nav Night' ? 'Wisconsin Edition' : 'Nav Night'}
        </button>
        <button className="scoreboard__btn scoreboard__btn--fullscreen" onClick={toggleFullscreen}>
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>
    </div>
  );
}

export default ScoreBoard;
