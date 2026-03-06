import { useState } from 'react';
import LatexText from './LatexText';

function QuestionModal({ clue, teams, scores, activeTeam, onClose }) {
  const [showAnswer, setShowAnswer] = useState(false);
  // Which team gets the points (defaults to the active team on the scoreboard)
  const [selectedTeam, setSelectedTeam] = useState(activeTeam);

  return (
    <div className="modal-overlay">
      <div className="modal-category">{clue.category}</div>
      <div className="modal-value">${clue.value}</div>

      <div className="modal-question">
        <LatexText text={clue.question} />
      </div>

      {showAnswer && (
        <div className="modal-answer">
          <LatexText text={clue.answer} />
          {clue.steps && (
            <div className="modal-steps">
              {clue.steps.map((step, i) => (
                <div key={i} className="modal-step">
                  <LatexText text={step} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Team selector — pick which team is answering */}
      <div className="modal-team-select">
        {teams.map((team, idx) => (
          <button
            key={idx}
            className={`modal-team-btn ${idx === selectedTeam ? 'modal-team-btn--active' : ''}`}
            style={{ '--team-color': team.color }}
            onClick={() => setSelectedTeam(idx)}
          >
            {team.name}
          </button>
        ))}
      </div>

      <div className="modal-actions">
        {!showAnswer ? (
          <button className="modal-btn" onClick={() => setShowAnswer(true)}>
            Reveal Answer
          </button>
        ) : (
          <>
            <button
              className="modal-btn modal-btn--correct"
              onClick={() => onClose(selectedTeam, clue.value)}
            >
              Correct (+${clue.value})
            </button>
            <button
              className="modal-btn modal-btn--wrong"
              onClick={() => onClose(selectedTeam, -clue.value)}
            >
              Wrong (-${clue.value})
            </button>
          </>
        )}
        <button className="modal-btn" onClick={() => onClose(null, 0)}>
          No Answer (Back)
        </button>
      </div>
    </div>
  );
}

export default QuestionModal;
