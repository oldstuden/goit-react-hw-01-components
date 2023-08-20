import {
  DataTable,
  TableElement,
  TableRow,
  TableTitle,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <DataTable>
        <thead>
          <tr>
            <TableTitle>Type</TableTitle>
            <TableTitle>Amount</TableTitle>
            <TableTitle>Currency</TableTitle>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <TableRow key={item.id}>
                <TableElement>{item.type}</TableElement>
                <TableElement>{item.amount}</TableElement>
                <TableElement>{item.currency}</TableElement>
              </TableRow>
            );
          })}
        </tbody>
      </DataTable>
    </div>
  );
};
