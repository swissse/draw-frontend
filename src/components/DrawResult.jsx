export default function DrawResult({ draw }) {
  if (!draw || Object.keys(draw).length === 0) return null;

  return (
    <div className="draw-section">
      <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
        Результаты жеребьёвки
      </h3>

      {Object.entries(draw).map(([category, pairs]) => (
        <div key={category} className="draw-category">
          <h4>Весовая категория: {category} кг</h4>
          {pairs.map((pair, index) => (
            <div key={index} className="pair">
              {pair.length === 2
                ? `${pair[0].fullName} 🆚 ${pair[1].fullName}`
                : `${pair[0].fullName} проходит дальше автоматически`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
