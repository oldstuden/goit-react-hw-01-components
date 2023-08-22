import { ListStats, Wrap, ItemListStats, Topic } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Wrap>
      {title && <Topic>{title}</Topic>}
      <ListStats>
        {stats.map(item => {
          return (
            <ItemListStats key={item.id} color={item.percentage}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage + '%'}</span>
            </ItemListStats>
          );
        })}
      </ListStats>
    </Wrap>
  );
};
