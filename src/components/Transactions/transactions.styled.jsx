import styled from 'styled-components';

export const Table = styled.table`
  width: 620px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.colors.primaryBgColor};
  text-align: center;
  border: #000;
`;
export const TableHeader = styled.thead`
  background-color: ${p => p.theme.colors.accent};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const TableData = styled.td`
  padding: 5px;
`;
