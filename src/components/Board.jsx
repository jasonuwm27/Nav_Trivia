import CategoryColumn from './CategoryColumn';

function Board({ categories, usedClues, onSelectClue }) {
  return (
    <div className="board">
      {categories.map((cat, catIdx) => (
        <CategoryColumn
          key={cat.name}
          category={cat}
          catIdx={catIdx}
          usedClues={usedClues}
          onSelectClue={onSelectClue}
        />
      ))}
    </div>
  );
}

export default Board;
