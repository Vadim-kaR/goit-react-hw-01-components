import styled from 'styled-components';

export const FriensList = styled.ul`
  width: 240px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  padding: 10px;
  border: #000;
  border-radius: ${p => p.theme.radii.min};
  margin-bottom: ${p => p.theme.space.xxl};
  background-color: ${p => p.theme.colors.primaryBgColor};
`;

export const Item = styled.li`
  display: flex;
  padding: 10px;
  box-shadow: 5px 3px 8px -3px #8c95ae;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const Status = styled.span`
  width: 10px;
  height: 10px;
  display: block;
  margin: 20px 15px 0 5px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  margin-left: 15px;
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
`;
