import styled from '@emotion/styled';
export const TransactionHistoryTable = styled.table`
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 10px 5px 5px rgb(136, 134, 134);
  width: 449px;
  border: 2px solid rgb(177, 179, 180);
`;
export const TableThead = styled.thead`
  background-color: rgb(140, 174, 247);
`;
export const Tablebody = styled.tbody`
  background-color: white;
  text-align: center;
`;
export const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background: rgb(216, 219, 221);
  }
`;
