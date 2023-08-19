export const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {stats.map(item => {
          return (
            <li key={item.id}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage + '%'}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
