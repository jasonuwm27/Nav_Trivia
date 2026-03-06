import QuestionTile from './QuestionTile';

function CategoryColumn({ category, catIdx, usedClues, onSelectClue }) {
  return (
    <div className="category-column">
      <div className="category-header">{category.name}</div>
      {category.clues.map((clue, clueIdx) => (
        <QuestionTile
          key={clue.value}
          value={clue.value}
          used={!!usedClues[`${catIdx}-${clueIdx}`]}
          onClick={() => onSelectClue(catIdx, clueIdx)}
        />
      ))}
    </div>
  );
}

export default CategoryColumn;
