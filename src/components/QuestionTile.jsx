function QuestionTile({ value, used, onClick }) {
  return (
    <div
      className={`tile ${used ? 'tile--used' : ''}`}
      onClick={used ? undefined : onClick}
    >
      {used ? '' : `$${value}`}
    </div>
  );
}

export default QuestionTile;
