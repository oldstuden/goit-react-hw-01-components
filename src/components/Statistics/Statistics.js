export const Statistics = ({ stats }) => {
  return (
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
  );
};
