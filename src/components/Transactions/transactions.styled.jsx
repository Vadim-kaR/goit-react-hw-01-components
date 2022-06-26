import styled from "styled-components";

export const Table = styled.table`
    width: 620px;
    margin-left: auto;
    margin-right: auto;
    background-color:${p=>p.theme.colors.white};
    text-align: center;
    border: ${p=>p.theme.borders.slim}
    ${p=> p.theme.colors.black};
`
export const TableHeader = styled.thead`
    background-color: ${p=>p.theme.colors.accent};
`;

export const RowInfo = styled.tbody`
    td {
        padding: 5px;
    }

    tr:nth-child(even) {
    background-color: ${p=>p.theme.colors.secondary};
  }

`;