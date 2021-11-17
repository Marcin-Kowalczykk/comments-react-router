import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  margin: 5em 5em 1em 5em;
  border-radius: 0.5em;
  background: ${(props) => props.theme.color.main};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.font.large};
  margin-bottom: 1em;
`;
