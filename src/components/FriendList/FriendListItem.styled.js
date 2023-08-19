import styled, { createGlobalStyle } from 'styled-components';

export const ListFriends = styled.ul`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 auto;
  padding: 20px 0px;
`;
export const ItemListFriends = styled.li`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  padding: 20px 10px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 4px;
`;
export const StatusItem = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.level) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'yellow';
    }
  }};
`;
