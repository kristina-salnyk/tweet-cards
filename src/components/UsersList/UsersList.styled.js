import styled from 'styled-components';

export const UsersListStyled = styled.ul`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 30px;
`;

export const UsersListItem = styled.li`
  margin: 0 auto;
`;
